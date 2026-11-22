'use strict';
// Labs volontairement vulnérables, isolés de la base principale.
// Ne jamais exposer ce serveur sur Internet : usage local / réseau de la classe uniquement.
const crypto = require('crypto');
const { DatabaseSync } = require('node:sqlite');

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const page = (title, body) => `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title>
<style>
body{margin:0;font-family:'Segoe UI',Arial,sans-serif;background:#f4f6f8;color:#1c2733}
header{background:#14532d;color:#fff;padding:14px 20px;font-weight:700}
main{max-width:560px;margin:24px auto;padding:0 16px}
.box{background:#fff;border:1px solid #d9e0e6;border-radius:10px;padding:18px;margin-bottom:14px}
input{width:100%;padding:10px;margin:6px 0 12px;border:1px solid #b8c4ce;border-radius:6px;box-sizing:border-box;font-size:15px}
button{background:#14532d;color:#fff;border:0;padding:10px 18px;border-radius:6px;font-size:15px;cursor:pointer}
.err{background:#fde8e8;border:1px solid #f5b5b5;padding:10px;border-radius:6px;font-family:Consolas,monospace;font-size:13px;word-break:break-all}
.ok{background:#e6f6ea;border:1px solid #a9dbb6;padding:10px;border-radius:6px}
code{background:#eef2f5;padding:2px 5px;border-radius:4px}
</style></head><body>${body}</body></html>`;

const send = (res, code, html, headers = {}) => {
  res.writeHead(code, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', ...headers });
  res.end(html);
};
const readForm = req => new Promise(resolve => {
  let d = '';
  req.on('data', c => { d += c; if (d.length > 10000) req.destroy(); });
  req.on('end', () => resolve(Object.fromEntries(new URLSearchParams(d))));
});
const getCookie = (req, name) => {
  const m = (req.headers.cookie || '').split(/;\s*/).find(c => c.startsWith(name + '='));
  return m ? m.slice(name.length + 1) : '';
};

// ---------- Lab SQLi : base SQLite en mémoire, séparée de la vraie base ----------
const lab = new DatabaseSync(':memory:');
lab.exec(`CREATE TABLE users(id INTEGER PRIMARY KEY, username TEXT, password TEXT, role TEXT);`);
lab.prepare('INSERT INTO users(username,password,role) VALUES (?,?,?)').run('guest', 'guest', 'invite');
lab.prepare('INSERT INTO users(username,password,role) VALUES (?,?,?)').run('admin', crypto.randomBytes(12).toString('hex'), 'admin');

const sqliForm = (extra = '') => page('Mairie Connect', `<header>Mairie Connect · Espace agents</header><main>
<div class="box"><form method="POST" action="/lab/sqli/login">
<label>Nom d'utilisateur<input name="u" autocomplete="off"></label>
<label>Mot de passe<input name="p" type="password" autocomplete="off"></label>
<button>Se connecter</button></form></div>${extra}
<p style="color:#667">Compte de test : guest / guest</p></main>`);

// ---------- Lab IDOR ----------
const FACTURES = {
  1: { client: 'Direction Générale', montant: '2 500 000 FCFA', note: 'SEH{idor_facture_admin_1}' },
  2: { client: 'Service Technique', montant: '340 000 FCFA', note: 'Maintenance réseau' },
  1041: { client: 'M. Fotso', montant: '18 000 FCFA', note: 'Abonnement' },
  1042: { client: 'Toi (compte « client »)', montant: '12 500 FCFA', note: 'Abonnement mensuel' },
  1043: { client: 'Mme Nkou', montant: '22 000 FCFA', note: 'Abonnement' }
};

// ---------- Lab UNION SQL ----------
const unionDb = new DatabaseSync(':memory:');
unionDb.exec("ATTACH DATABASE ':memory:' AS information_schema");
unionDb.exec('CREATE TABLE produits(id INTEGER PRIMARY KEY, nom TEXT, prix TEXT);');
unionDb.exec('CREATE TABLE utilisateurs_secrets(id INTEGER PRIMARY KEY, flag TEXT);');
unionDb.exec('CREATE TABLE information_schema.tables(table_name TEXT);');
for (const [nom, prix] of [['Clé USB 32 Go', '3 500 FCFA'], ['Casque audio', '12 000 FCFA'], ['Chargeur rapide', '5 000 FCFA'], ['Souris sans fil', '4 500 FCFA']])
  unionDb.prepare('INSERT INTO produits(nom, prix) VALUES (?,?)').run(nom, prix);
unionDb.prepare('INSERT INTO utilisateurs_secrets(flag) VALUES (?)').run('SEH{union_select_extraction_totale}');
for (const t of ['produits', 'utilisateurs_secrets']) unionDb.prepare('INSERT INTO information_schema.tables(table_name) VALUES (?)').run(t);

const unionPage = (rowsHtml, errHtml, q) => page('Catalogue', `<header>Boutique en ligne · Catalogue</header><main>
<div class="box"><form method="GET" action="/lab/sqli-union"><label>Rechercher un produit<input name="q" value="${esc(q || '')}" autocomplete="off"></label><button>Chercher</button></form></div>
${errHtml || ''}${rowsHtml}</main>`);

// ---------- Lab JWT (vérification volontairement laxiste) ----------
const JWT_SECRET = 'cle-secrete-de-la-boutique';
const b64url = o => Buffer.from(JSON.stringify(o)).toString('base64url');
const b64urlDecode = s => { try { return JSON.parse(Buffer.from(s, 'base64url').toString()); } catch { return null; } };
const signJwt = payload => { const h = b64url({ alg: 'HS256', typ: 'JWT' }), p = b64url(payload); const sig = crypto.createHmac('sha256', JWT_SECRET).update(h + '.' + p).digest('base64url'); return `${h}.${p}.${sig}`; };
const readJwt = tok => { // VULNÉRABLE (volontaire) : accepte alg "none" sans vérifier la signature
  const parts = String(tok || '').split('.'); if (parts.length !== 3) return null;
  const header = b64urlDecode(parts[0]), payload = b64urlDecode(parts[1]);
  if (!header || !payload) return null;
  if (String(header.alg).toLowerCase() === 'none') return payload; // accepte sans vérifier !
  const expected = crypto.createHmac('sha256', JWT_SECRET).update(parts[0] + '.' + parts[1]).digest('base64url');
  return expected === parts[2] ? payload : null;
};

module.exports = async function handleLab(req, res, url) {
  const p = url.pathname;

  // ----- SQLi -----
  if (p === '/lab/sqli' && req.method === 'GET') return send(res, 200, sqliForm()), true;
  if (p === '/lab/sqli/login' && req.method === 'POST') {
    const { u = '', p: pw = '' } = await readForm(req);
    const sql = `SELECT * FROM users WHERE username='${u}' AND password='${pw}'`; // VULNÉRABLE (volontaire)
    try {
      const row = lab.prepare(sql).get();
      if (!row) return send(res, 200, sqliForm(`<div class="box err">Identifiants incorrects.</div>`)), true;
      const extra = row.role === 'admin'
        ? `<div class="box ok"><b>Bienvenue, administrateur.</b><br>Flag : <code>SEH{sqli_login_bypass_7f3a}</code></div>`
        : `<div class="box ok">Bienvenue, <b>${esc(row.username)}</b> (rôle : ${esc(row.role)}). Aucun accès administrateur.</div>`;
      return send(res, 200, sqliForm(extra)), true;
    } catch (e) {
      return send(res, 200, sqliForm(`<div class="box err">Erreur SQL : ${esc(e.message)}<br>Requête : ${esc(sql)}</div>`)), true;
    }
  }

  // ----- XSS réfléchi -----
  if (p === '/lab/xss') {
    const q = url.searchParams.get('q') || '';
    const result = q ? `<div class="box">Résultats pour : <b>${q}</b><br><i>Aucune annonce trouvée.</i></div>` : ''; // VULNÉRABLE (volontaire)
    return send(res, 200, page('Annonces', `<header>PetitesAnnonces.cm</header><main>
<div class="box"><form method="GET" action="/lab/xss"><label>Rechercher une annonce<input name="q" value="" autocomplete="off"></label><button>Chercher</button></form></div>${result}</main>`),
      { 'Set-Cookie': 'session_annonces=SEH{xss_reflechi_cookie_92b1}; Path=/lab/xss; SameSite=Lax' }), true;
  }

  // ----- IDOR -----
  if (p === '/lab/idor') {
    return send(res, 200, page('Factures', `<header>Portail Factures · compte « client »</header><main>
<div class="box"><b>Ta facture : n° 1042</b><p>Adresse de l'API : <code>/lab/idor/api/facture/1042</code></p>
<button onclick="f()">Afficher ma facture</button><pre id="o"></pre></div></main>
<script>function f(){fetch('/lab/idor/api/facture/1042').then(r=>r.text()).then(t=>o.textContent=t)}</script>`)), true;
  }
  const m = p.match(/^\/lab\/idor\/api\/facture\/(\d+)$/);
  if (m) {
    const f = FACTURES[Number(m[1])];
    res.writeHead(f ? 200 : 404, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
    return res.end(JSON.stringify(f ? { id: Number(m[1]), ...f } : { erreur: 'Facture introuvable' }, null, 2)), true; // VULNÉRABLE : aucun contrôle du propriétaire
  }

  // ----- Authentification cassée -----
  if (p === '/lab/auth' && req.method === 'GET') {
    return send(res, 200, page('Intranet', `<header>Intranet Entreprise</header><main>
<div class="box"><form method="POST" action="/lab/auth/login">
<label>Utilisateur<input name="u" autocomplete="off"></label><label>Mot de passe<input name="p" type="password"></label>
<button>Connexion</button></form></div><p style="color:#667">Compte de test : guest / guest. Page d'administration : <code>/lab/auth/admin</code></p></main>`)), true;
  }
  if (p === '/lab/auth/login' && req.method === 'POST') {
    const { u, p: pw } = await readForm(req);
    if (u === 'guest' && pw === 'guest') {
      return send(res, 200, page('Intranet', `<header>Intranet Entreprise</header><main><div class="box ok">Connecté en tant que <b>guest</b>.
<p>Va voir la <a href="/lab/auth/admin">page d'administration</a>.</p></div></main>`),
        { 'Set-Cookie': 'role=Z3Vlc3Q=; Path=/lab/auth; SameSite=Lax' }), true;
    }
    return send(res, 200, page('Intranet', `<header>Intranet Entreprise</header><main><div class="box err">Identifiants incorrects.</div><a href="/lab/auth">Retour</a></main>`)), true;
  }
  if (p === '/lab/auth/admin') {
    const role = Buffer.from(getCookie(req, 'role'), 'base64').toString();
    if (role === 'admin') return send(res, 200, page('Admin', `<header>Administration</header><main><div class="box ok">Bienvenue, administrateur.<br>Flag : <code>SEH{cookie_role_modifie_c41d}</code></div></main>`)), true;
    return send(res, 403, page('Interdit', `<header>Administration</header><main><div class="box err">Accès interdit : rôle « ${esc(role || 'aucun')} ».</div><a href="/lab/auth">Retour</a></main>`)), true;
  }

  // ----- UNION SQL -----
  if (p === '/lab/sqli-union') {
    const q = url.searchParams.get('q') || '';
    if (!q) return send(res, 200, unionPage(`<div class="box"><ul>${unionDb.prepare('SELECT * FROM produits').all().map(r => `<li>${esc(r.nom)} — ${esc(r.prix)}</li>`).join('')}</ul></div>`, '', q)), true;
    const sql = `SELECT id, nom, prix FROM produits WHERE nom LIKE '%${q}%'`; // VULNÉRABLE (volontaire)
    try {
      const rows = unionDb.prepare(sql).all();
      const html = rows.length ? `<div class="box"><ul>${rows.map(r => `<li>#${esc(r.id)} — ${esc(r.nom)} — ${esc(r.prix)}</li>`).join('')}</ul></div>` : '<div class="box">Aucun produit trouvé.</div>';
      return send(res, 200, unionPage(html, '', q)), true;
    } catch (e) {
      return send(res, 200, unionPage('', `<div class="box err">Erreur SQL : ${esc(e.message)}<br>Requête : ${esc(sql)}</div>`, q)), true;
    }
  }

  // ----- JWT -----
  if (p === '/lab/jwt' && req.method === 'GET') {
    return send(res, 200, page('Boutique · Mon compte', `<header>Boutique en ligne · Connexion</header><main>
<div class="box"><form method="POST" action="/lab/jwt/login">
<label>Utilisateur<input name="u" autocomplete="off"></label><label>Mot de passe<input name="p" type="password"></label>
<button>Connexion</button></form></div><p style="color:#667">Compte de test : client / client. Page admin : <code>/lab/jwt/admin</code> (en-tête <code>Authorization: Bearer ...</code> ou cookie <code>jwt</code>).</p></main>`)), true;
  }
  if (p === '/lab/jwt/login' && req.method === 'POST') {
    const { u, p: pw } = await readForm(req);
    if (u !== 'client' || pw !== 'client') return send(res, 200, page('Connexion', `<header>Boutique</header><main><div class="box err">Identifiants incorrects.</div><a href="/lab/jwt">Retour</a></main>`)), true;
    const tok = signJwt({ sub: 'client', role: 'client' });
    return send(res, 200, page('Connecté', `<header>Boutique</header><main><div class="box ok">Connecté en tant que <b>client</b>.<br>Ton jeton (copie-le, modifie-le) :<br><code style="word-break:break-all">${esc(tok)}</code></div>
<div class="box"><form method="GET" action="/lab/jwt/admin"><label>Tester un jeton sur la page admin<input name="jwt" value="${esc(tok)}" autocomplete="off"></label><button>Essayer</button></form></div></main>`)), true;
  }
  if (p === '/lab/jwt/admin') {
    const tok = url.searchParams.get('jwt') || (req.headers.authorization || '').replace(/^Bearer\s+/i, '') || getCookie(req, 'jwt');
    const payload = readJwt(tok);
    if (!payload) return send(res, 401, page('Admin', `<header>Boutique · Admin</header><main><div class="box err">Jeton absent ou invalide.</div><a href="/lab/jwt">Retour</a></main>`)), true;
    if (payload.role !== 'admin') return send(res, 403, page('Admin', `<header>Boutique · Admin</header><main><div class="box err">Accès refusé : rôle « ${esc(payload.role || 'inconnu')} ».</div><a href="/lab/jwt">Retour</a></main>`)), true;
    return send(res, 200, page('Admin', `<header>Boutique · Admin</header><main><div class="box ok">Bienvenue, administrateur.<br>Flag : <code>SEH{jwt_alg_none_accepte}</code></div></main>`)), true;
  }

  return false;
};

'use strict';
(() => {
  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const app = $('#app');
  let ME = null, VIEW = '', es = null, newChalCount = 0;

  const ICON = `<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="44" fill="none" stroke="#12233d" stroke-width="14"/><path d="M50 6 A44 44 0 0 1 94 50" fill="none" stroke="#4a8fa6" stroke-width="14"/><path d="M50 50 m-26 0 a26 26 0 1 1 18.4 24.9" fill="none" stroke="#12233d" stroke-width="10" stroke-linecap="round"/><path d="M50 50 m26 0 a26 26 0 0 1 -7.6 18.4" fill="none" stroke="#4a8fa6" stroke-width="10" stroke-linecap="round"/></svg>`;
  const LEVELS = ['Script Kiddie', 'Initié', 'Apprenti', 'Hacker', 'Pentester', 'Expert', 'Élite'];
  const levelOf = pts => { const n = Math.min(LEVELS.length - 1, Math.floor(pts / 1400)); return { n: n + 1, title: LEVELS[n], next: n + 1 < LEVELS.length ? (n + 1) * 1400 : null, base: n * 1400 }; };
  const LEVEL_CLASS = { 'Débutant': 'deb', 'Intermédiaire': 'int', 'Avancé': 'ava' };

  async function api(url, body) {
    const opt = body !== undefined ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {};
    const r = await fetch(url, opt);
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw Object.assign(new Error(j.erreur || 'Erreur réseau'), { status: r.status });
    return j;
  }
  function toast(msg, bad) {
    const t = document.createElement('div'); t.className = 'toast' + (bad ? ' bad' : ''); t.textContent = msg;
    $('#toasts').appendChild(t); setTimeout(() => t.remove(), 4500);
  }
  const go = h => { location.hash = h; };
  const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
  const bar = (a, b) => `<div class="bar" role="progressbar" aria-valuenow="${pct(a, b)}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct(a, b)}%"></i></div>`;

  // ---------- Navigation ----------
  function renderNav() {
    const cur = VIEW;
    const link = (h, t, k) => `<a href="#/${h}" class="${cur === k ? 'on' : ''}">${t}</a>`;
    $('#nav').innerHTML = `
      <a class="brand" href="#/"><span style="display:contents">${ICON}</span><span class="bt"><b>CyberLab</b></span></a>
      <button class="menu-btn" id="mb" aria-label="Menu">☰</button>
      <nav class="links" id="lk">${link('parcours', 'Parcours', 'parcours')}${link('ctf', 'CTF', 'ctf')}${link('classement', 'Classement', 'classement')}${link('avis', 'Avis', 'avis')}${ME ? link('profil', 'Profil', 'profil') : ''}${ME && ['formateur', 'admin'].includes(ME.user.role) ? link('admin', 'Formateur', 'admin') : ''}</nav>
      <div class="who">${ME ? `<button class="btn ghost sm bell" id="bell" title="Nouveaux challenges CTF" aria-label="Notifications">🔔${newChalCount ? `<span class="bell-dot">${newChalCount > 9 ? '9+' : newChalCount}</span>` : ''}</button><span class="pts" title="${esc(ME.level.title)}">${ME.points} pts</span><button class="btn ghost sm" id="out">Déconnexion</button>` : `<a class="btn sm" href="#/connexion">Connexion</a>`}</div>`;
    $('#mb').onclick = () => $('#lk').classList.toggle('open');
    $('#lk').onclick = () => $('#lk').classList.remove('open');
    const out = $('#out'); if (out) out.onclick = async () => { await api('/api/logout', {}); ME = null; renderNav(); go('#/'); route(); };
    const bell = $('#bell'); if (bell) bell.onclick = () => { newChalCount = 0; renderNav(); go('#/ctf'); if (VIEW === 'ctf') route(); };
  }
  async function loadMe() { try { const m = await api('/api/me'); ME = m.user ? m : null; } catch { ME = null; } }

  // ---------- Routeur ----------
  async function route() {
    const parts = (location.hash.replace(/^#\/?/, '') || '').split('?')[0].split('/');
    const [name, arg] = [parts[0] || 'accueil', parts[1]];
    VIEW = name; renderNav(); window.scrollTo(0, 0);
    const views = { accueil: home, parcours: pathsView, room: roomView, ctf: ctfView, classement: boardView, avis: avisView, profil: profileView, connexion: authView, admin: adminView, certificat: certView, rapport: rapportView, historique: historiqueView };
    try { await (views[name] || notFound)(arg); }
    catch (e) { app.innerHTML = `<div class="card"><h2>Oups</h2><p class="muted">${esc(e.message)}</p><a class="btn" href="#/">Retour à l'accueil</a></div>`; }
  }
  const notFound = () => { app.innerHTML = `<div class="card"><h2>Page introuvable</h2><a class="btn" href="#/">Retour à l'accueil</a></div>`; };
  const needLogin = () => { if (!ME) { go('#/connexion'); return true; } return false; };

  // ---------- Accueil ----------
  async function home() {
    if (ME) return dashboard();
    app.innerHTML = `
      <section class="hero"><div>
        <h1>Apprends le hacking éthique, en français, en pratiquant.</h1>
        <p>Des leçons guidées, de vraies applications vulnérables à attaquer, un terminal dans ton navigateur et des compétitions de flags. Gratuit, sans installation.</p>
        <div class="cta"><a class="btn" href="#/connexion?inscription">Créer mon compte</a><a class="btn ghost" href="#/parcours">Voir les parcours</a></div></div>
        <div class="shell"><div class="shell-top"><i></i><i></i><i></i></div><pre>$ nmap -sV 192.168.1.10
PORT     STATE SERVICE  VERSION
22/tcp   open  ssh      OpenSSH 7.2p2
80/tcp   open  http     Apache httpd 2.4.49
3306/tcp open  mysql    MySQL 5.7.33
8080/tcp open  http     <span style="color:#5be37d">SEH{...}</span>

$ <span style="color:#5be37d">_</span></pre></div></section>
      <div class="grid g3" style="margin-top:34px">
        <div class="card feat"><h3>Rooms guidées</h3><p>Chaque room explique une notion, puis te pose des questions concrètes. Tu gagnes des points à chaque réponse juste.</p></div>
        <div class="card feat"><h3>Labs à attaquer</h3><p>Injection SQL, XSS, IDOR, cookies truqués : des portails volontairement vulnérables, isolés et sans danger.</p></div>
        <div class="card feat"><h3>CTF en direct</h3><p>Des challenges de web et de cryptographie dont la valeur baisse quand beaucoup les résolvent. Le premier gagne le « first blood ».</p></div>
      </div>
      <p class="muted" style="margin-top:26px">Cette plateforme enseigne la sécurité pour se défendre. N'attaque jamais un système sans autorisation écrite.</p>`;
  }
  async function dashboard() {
    const [{ paths }, prof] = await Promise.all([api('/api/parcours'), api('/api/profil')]);
    const lv = prof.level, nextLeft = lv.next ? lv.next - prof.points : 0;
    let resume = null;
    for (const p of paths) for (const r of p.rooms) if (!resume && r.solved < r.qcount) resume = { ...r, path: p.title };
    app.innerHTML = `
      <h1>Salut, ${esc(ME.user.username)} 👋</h1>
      <div class="grid g4 keep2" style="margin:16px 0">
        <div class="card stat"><b>${prof.points}</b><span>points</span></div>
        <div class="card stat"><b>${prof.roomsDone.length}/${prof.roomsTotal}</b><span>rooms terminées</span></div>
        <div class="card stat"><b>${prof.streak} 🔥</b><span>jours de suite</span></div>
        <div class="card stat"><b>${prof.ctfCount}</b><span>flags CTF</span></div></div>
      <div class="card"><div class="row between"><b>Niveau ${lv.n} · ${esc(lv.title)}</b><span class="muted">${lv.next ? nextLeft + ' pts avant le niveau suivant' : 'Niveau maximum atteint'}</span></div>
        <div style="margin-top:10px">${lv.next ? bar(prof.points - lv.base, lv.next - lv.base) : bar(1, 1)}</div></div>
      ${resume ? `<div class="section-title"><h2>Reprendre</h2></div>
        <a class="room-row" href="#/room/${resume.id}"><span class="ic">${resume.icon}</span><span class="tt"><b>${esc(resume.title)}</b><span>${esc(resume.path)} · ${resume.solved}/${resume.qcount} questions</span></span><span class="pr">Continuer</span></a>` : `<div class="banner" style="margin-top:16px">Bravo, tu as terminé toutes les rooms disponibles ! Lance-toi dans le <a href="#/ctf">CTF</a>.</div>`}
      <div class="section-title"><h2>Tes parcours</h2><a href="#/parcours">Tout voir</a></div>
      <div class="grid g3">${paths.map(pathCard).join('')}</div>`;
  }
  function pathCard(p) {
    const total = p.rooms.reduce((s, r) => s + r.qcount, 0), solved = p.rooms.reduce((s, r) => s + r.solved, 0);
    return `<a class="card path-card" style="--c:${p.color};color:inherit;text-decoration:none" href="#/parcours"><h3>${p.icon} ${esc(p.title)}</h3><p class="muted" style="margin:0 0 12px;font-size:.92rem">${esc(p.desc)}</p>${bar(solved, total)}<div class="muted" style="font-size:.82rem;margin-top:6px">${p.rooms.length} rooms · ${pct(solved, total)} %${p.done ? ' · <span class="done-tag">Certifié ✔</span>' : p.eligible ? ' · <span class="muted">En attente de validation</span>' : ''}</div></a>`;
  }

  // ---------- Parcours ----------
  async function pathsView() {
    const { paths } = await api('/api/parcours');
    app.innerHTML = `<h1>Parcours d'apprentissage</h1><p class="muted">Suis les rooms dans l'ordre. Chaque parcours terminé te donne un certificat.</p>` + paths.map(p => {
      const total = p.rooms.reduce((s, r) => s + r.qcount, 0), solved = p.rooms.reduce((s, r) => s + r.solved, 0);
      return `<section style="margin-top:28px"><div class="row between" style="flex-wrap:wrap;gap:8px"><h2 style="margin:0">${p.icon} ${esc(p.title)}</h2>${p.done ? `<a class="btn sm" href="#/certificat/${p.id}">Voir mon certificat</a>` : p.eligible ? `<span class="pill" style="color:var(--am);border-color:#7a5a20">En attente de validation</span>` : `<span class="muted">${pct(solved, total)} %</span>`}</div>
        <p class="muted" style="margin:6px 0 12px">${esc(p.desc)}</p>
        ${p.rooms.map(r => `<a class="room-row" href="#/room/${r.id}"><span class="ic">${r.icon}</span><span class="tt"><b>${esc(r.title)}</b><span>${esc(r.desc)}</span></span><span class="pill ${LEVEL_CLASS[r.level] || ''}">${esc(r.level)}</span><span class="pr">${r.solved >= r.qcount && r.qcount ? '<span class="done-tag">Terminé ✔</span>' : `${r.solved}/${r.qcount}<br>${r.min} min`}</span></a>`).join('')}</section>`;
    }).join('');
  }

  // ---------- Room ----------
  async function roomView(id) {
    const { room, solved } = await api('/api/room/' + encodeURIComponent(id));
    const done = new Set(solved);
    const allQ = room.tasks.flatMap(t => t.questions);
    const parts = [];
    if (room.lab) parts.push(`<div class="card"><div class="row between" style="margin-bottom:10px"><b>Machine cible</b><a class="btn ghost sm" href="/lab/${room.lab}" target="_blank" rel="noopener">Ouvrir dans un onglet</a></div><iframe class="frame" src="/lab/${room.lab}" title="Lab ${esc(room.title)}"></iframe><p class="muted" style="font-size:.85rem;margin:8px 0 0">Application volontairement vulnérable, isolée de la plateforme.</p></div>`);
    if (room.terminal) parts.push(`<div class="card"><b>Terminal simulé</b><div id="term" style="margin-top:10px"></div></div>`);
    if (room.code) parts.push(`<div class="card"><div class="row between" style="margin-bottom:8px"><b>Atelier code (${room.code.lang === 'python' ? 'Python' : 'Bash'})</b><button class="btn sm" id="coderun">▶ Exécuter</button></div>
      <textarea id="codesrc" spellcheck="false" style="width:100%;height:220px;font-family:var(--mono);font-size:.85rem;background:#070d18;color:#d6f5de;border:1px solid var(--line);border-radius:8px;padding:10px;resize:vertical">${esc(room.code.starter)}</textarea>
      <div class="muted" style="font-size:.78rem;margin:6px 0">Code exécuté réellement sur le serveur (pas un bac à sable isolé) — limité à 8 secondes.</div>
      <pre id="codeout" style="min-height:60px;white-space:pre-wrap">Clique sur « Exécuter » pour lancer le script.</pre></div>`);
    if (!parts.length) parts.push(`<div class="card"><b>Pas de machine pour cette room</b><p class="muted">Lis les tâches et réponds aux questions. Tu peux t'aider d'un moteur de recherche : c'est normal en cybersécurité.</p></div>`);
    const machine = parts.join('');
    app.innerHTML = `<div class="room-head"><a href="#/parcours" class="muted">← Parcours</a>
      <h1>${room.icon} ${esc(room.title)}</h1>
      <div class="row" style="flex-wrap:wrap"><span class="pill ${LEVEL_CLASS[room.level] || ''}">${esc(room.level)}</span><span class="muted">${room.min} min · ${room.points} pts</span></div>
      <div style="margin-top:12px" id="rbar"></div></div>
      <div id="banner"></div>
      <div class="room-layout"><div>${room.tasks.map((t, i) => `
        <details class="task" ${i === 0 ? 'open' : ''}><summary>Tâche ${i + 1} · ${esc(t.title)}</summary><div class="task-body">${t.body}
        ${t.questions.map(qs => `<div class="qa ${done.has(qs.id) ? 'ok' : ''}" data-q="${qs.id}"><div class="q">${esc(qs.q)} <span class="muted">(${qs.pts} pts)</span></div>
          ${done.has(qs.id) ? '<div class="res good">Réponse validée.</div>' : `<form><input autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Ta réponse" aria-label="Réponse"><button class="btn" type="submit">Valider</button></form><div class="res"></div>${qs.hasHint ? '<button class="hint-btn" type="button">Obtenir un indice (-5 pts)</button><div class="hint" hidden></div>' : ''}`}</div>`).join('')}
        </div></details>`).join('')}</div>
        <div class="machine">${machine}</div></div>`;
    const refresh = () => {
      $('#rbar').innerHTML = bar(done.size, allQ.length) + `<div class="muted" style="font-size:.85rem;margin-top:4px">${done.size}/${allQ.length} questions</div>`;
      if (allQ.length && done.size >= allQ.length) $('#banner').innerHTML = `<div class="banner"><b>Room terminée ! 🎉</b> Retourne aux <a href="#/parcours">parcours</a> pour continuer.</div>`;
    };
    refresh();
    app.querySelectorAll('.qa').forEach(box => {
      const hb = box.querySelector('.hint-btn');
      if (hb) hb.onclick = async () => {
        if (!ME) return go('#/connexion');
        hb.disabled = true;
        try {
          const r = await api('/api/hint', { room: room.id, qid: box.dataset.q });
          const hintEl = box.querySelector('.hint');
          hintEl.textContent = r.hint; hintEl.hidden = false; hb.remove();
          if (r.charged) { toast(`Indice débloqué : -${r.cost} points`, true); await loadMe(); renderNav(); }
        } catch (e) { toast(e.message, true); hb.disabled = false; }
      };
      const form = box.querySelector('form'); if (!form) return;
      form.onsubmit = async ev => {
        ev.preventDefault();
        if (!ME) return go('#/connexion');
        const input = form.querySelector('input'), res = box.querySelector('.res');
        if (!input.value.trim()) return;
        try {
          const r = await api('/api/answer', { room: room.id, qid: box.dataset.q, answer: input.value });
          if (!r.correct) { res.className = 'res bad'; res.textContent = 'Ce n\'est pas ça. Réessaie !'; return; }
          done.add(box.dataset.q); box.classList.add('ok'); form.remove(); box.querySelector('.hint-btn')?.remove();
          res.className = 'res good'; res.textContent = r.points ? `Bravo ! +${r.points} points.` : 'Réponse validée.';
          toast(r.points ? `+${r.points} points` : 'Déjà validé'); refresh(); await loadMe(); renderNav();
        } catch (e) { if (e.status === 401) go('#/connexion'); else { res.className = 'res bad'; res.textContent = e.message; } }
      };
    });
    if (room.terminal) startTerminal($('#term'), room.terminal);
    if (room.code) {
      $('#coderun').onclick = async () => {
        if (!ME) return go('#/connexion');
        const btn = $('#coderun'), out = $('#codeout');
        btn.disabled = true; btn.textContent = '… exécution'; out.textContent = 'Exécution en cours (jusqu\'à 8 secondes)…';
        try {
          const r = await api('/api/run-code', { lang: room.code.lang, code: $('#codesrc').value });
          if (!r.ok) { out.textContent = '✗ ' + r.erreur; }
          else {
            let t = (r.stdout || '') + (r.stderr ? '\n--- erreurs ---\n' + r.stderr : '');
            if (r.timedOut) t += '\n\n⏱ Temps dépassé (8 s) — le script a été arrêté. Vérifie qu\'il ne boucle pas à l\'infini.';
            out.textContent = t.trim() || '(aucune sortie — pense à print())';
          }
        } catch (e) { out.textContent = '✗ ' + e.message; }
        btn.disabled = false; btn.textContent = '▶ Exécuter';
      };
    }
    if (!ME) toast('Connecte-toi pour enregistrer tes réponses et gagner des points.');
  }

  // ---------- Terminal simulé ----------
  const LINUX = {
    dirs: { '/': ['home', 'etc'], '/home': ['stagiaire'], '/home/stagiaire': ['mission.txt', 'notes', '.cache_secret', '.bashrc'], '/home/stagiaire/notes': ['todo.txt'], '/etc': ['hostname'] },
    files: {
      '/home/stagiaire/mission.txt': 'Mission : un fichier caché dans ce dossier contient le flag.\nAstuce : ls -a affiche aussi les fichiers cachés.',
      '/home/stagiaire/.cache_secret': 'SEH{linux_ls_a_cat}',
      '/home/stagiaire/.bashrc': '# configuration du shell\nalias ll="ls -l"',
      '/home/stagiaire/notes/todo.txt': '- sauvegarder la base\n- changer le mot de passe admin',
      '/etc/hostname': 'serveur-formation'
    }
  };
  function startTerminal(root, kind) {
    root.innerHTML = `<div class="term"><div class="term-out" id="to"></div><div class="term-in"><span id="pr"></span><input id="ti" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Commande"></div></div>`;
    const out = $('#to'), inp = $('#ti'), pr = $('#pr');
    let cwd = '/home/stagiaire'; const hist = []; let hi = 0;
    let privescRoot = false, inViShell = false;
    const prompt = () => {
      if (kind === 'privesc') return privescRoot ? 'root@serveur-web:~#' : 'stagiaire@serveur-web:~$';
      return kind === 'linux' ? `stagiaire@formation:${cwd === '/home/stagiaire' ? '~' : cwd}$` : 'hacker@kali:~$';
    };
    const print = (t, cls) => { const d = document.createElement('div'); if (cls) d.className = cls; d.textContent = t; out.appendChild(d); out.scrollTop = out.scrollHeight; };
    const resolve = p => {
      if (!p) return cwd; if (p === '~') return '/home/stagiaire';
      let parts = (p.startsWith('/') ? p : cwd + '/' + p).split('/').filter(Boolean), st = [];
      for (const x of parts) { if (x === '..') st.pop(); else if (x !== '.') st.push(x); }
      return '/' + st.join('/');
    };
    const NMAP_PORTS = [['22/tcp', 'ssh', 'OpenSSH 7.2p2 Ubuntu'], ['80/tcp', 'http', 'Apache httpd 2.4.49'], ['3306/tcp', 'mysql', 'MySQL 5.7.33'], ['8080/tcp', 'http-proxy', 'Jetty (bannière : SEH{nmap_sv_banner_8080})']];
    const runLinux = (c, a) => {
      if (c === 'help') return 'Commandes : help, pwd, ls [-a], cd, cat, whoami, id, echo, uname, clear';
      if (c === 'pwd') return cwd;
      if (c === 'whoami') return 'stagiaire';
      if (c === 'id') return 'uid=1000(stagiaire) gid=1000(stagiaire)';
      if (c === 'uname') return 'Linux formation 5.15.0 x86_64';
      if (c === 'echo') return a.join(' ');
      if (c === 'ls') {
        const showAll = a.some(x => /^-.*a/.test(x)), target = resolve(a.find(x => !x.startsWith('-')));
        if (!LINUX.dirs[target]) return LINUX.files[target] !== undefined ? target.split('/').pop() : `ls : impossible d'accéder à '${a.find(x => !x.startsWith('-'))}' : Aucun fichier ou dossier de ce type`;
        let items = LINUX.dirs[target].filter(n => showAll || !n.startsWith('.'));
        if (showAll) items = ['.', '..', ...items];
        return items.map(n => (LINUX.dirs[(target === '/' ? '' : target) + '/' + n] ? n + '/' : n)).join('  ');
      }
      if (c === 'cd') { const t = resolve(a[0]); if (LINUX.dirs[t]) { cwd = t; return ''; } return `cd : ${a[0]} : Aucun fichier ou dossier de ce type`; }
      if (c === 'cat') { if (!a[0]) return 'cat : fichier manquant'; const t = resolve(a[0]); if (LINUX.files[t] !== undefined) return LINUX.files[t]; return LINUX.dirs[t] ? `cat : ${a[0]} : est un dossier` : `cat : ${a[0]} : Aucun fichier ou dossier de ce type`; }
      return `${c} : commande introuvable (tape help)`;
    };
    const runNmap = (c, a) => {
      if (c === 'help') return 'Commandes : help, nmap [-sV] IP, ping IP, whoami, clear\nCible de l\'exercice : 192.168.1.10';
      if (c === 'whoami') return 'hacker';
      if (c === 'ping') return a[0] === '192.168.1.10' ? 'Réponse de 192.168.1.10 : octets=32 temps=2ms TTL=64' : `Impossible de joindre ${a[0] || 'la destination'}`;
      if (c === 'nmap') {
        const sv = a.includes('-sV'), ip = a.find(x => !x.startsWith('-'));
        if (!ip) return 'Usage : nmap [-sV] IP';
        if (ip !== '192.168.1.10') return `Starting Nmap 7.94\nNote : l'hôte ${ip} semble hors ligne ou bloque les scans.\nNmap done: 1 IP address (0 hosts up)`;
        let s = 'Starting Nmap 7.94 ( https://nmap.org )\nNmap scan report for 192.168.1.10\nHost is up (0.0021s latency).\nNot shown: 996 closed tcp ports\n' + (sv ? 'PORT      STATE SERVICE    VERSION\n' : 'PORT      STATE SERVICE\n');
        s += NMAP_PORTS.map(([p, sv2, v]) => p.padEnd(9) + ' open  ' + (sv ? sv2.padEnd(10) + ' ' + v : sv2)).join('\n');
        return s + '\n\nNmap done: 1 IP address (1 host up) scanned in 1.42 seconds';
      }
      return `${c} : commande introuvable (tape help)`;
    };
    const runPrivesc = (line, c, a) => {
      if (inViShell && !privescRoot) { // dans l'éditeur vi, en attente de :shell
        if (line.trim() === ':shell') { privescRoot = true; return "Shell obtenu. L'éditeur a été lancé en sudo : ce shell est root."; }
        if (line.trim() === ':q' || line.trim() === ':q!') { inViShell = false; return 'Sortie de vi, retour au terminal normal.'; }
        return "(dans vi) tape :shell pour ouvrir un terminal, ou :q pour quitter.";
      }
      if (c === 'whoami') return privescRoot ? 'root' : 'stagiaire';
      if (c === 'cat') { if (a[0] !== '/root/flag.txt') return a[0] ? `cat : ${a[0]} : Aucun fichier ou dossier de ce type` : 'cat : fichier manquant'; return privescRoot ? 'SEH{privesc_sudo_vi_root}' : "cat : /root/flag.txt : Permission refusée"; }
      if (c === 'exit' && privescRoot) { privescRoot = false; inViShell = false; return 'Sortie du shell root, retour au terminal normal.'; }
      if (c === 'help') return 'Commandes : help, whoami, sudo -l, sudo vi FICHIER, cat FICHIER, exit';
      if (c === 'sudo' && a[0] === '-l') return "L'utilisateur stagiaire peut exécuter, SANS mot de passe, sur serveur-web :\n    (root) NOPASSWD: /usr/bin/vi /etc/motd";
      if (c === 'sudo' && a[0] === 'vi') {
        if (a[1] !== '/etc/motd') return `sudo : désolé, l'utilisateur stagiaire n'est pas autorisé à exécuter « /usr/bin/vi ${a.slice(1).join(' ')} » en root.`;
        inViShell = true; return '~ /etc/motd (ouvert avec vi, en root) ~\nMode commande : tape :shell pour ouvrir un terminal, :q pour quitter.';
      }
      if (c === 'sudo') return "Désolé, l'utilisateur stagiaire n'est pas autorisé à exécuter cette commande en root (tape « sudo -l » pour voir ce qui est permis).";
      return `${c} : commande introuvable (tape help)`;
    };
    const exec = line => {
      print(prompt() + ' ' + line, 'cmd');
      const [c, ...a] = line.trim().split(/\s+/); if (!c && !inViShell) return;
      if (c === 'clear') { out.textContent = ''; return; }
      const r = kind === 'linux' ? runLinux(c, a) : kind === 'privesc' ? runPrivesc(line, c, a) : runNmap(c, a);
      if (r) print(r);
    };
    const refreshPrompt = () => { pr.textContent = prompt(); };
    print(kind === 'linux' ? 'Bienvenue sur la machine de formation. Tape help pour commencer.' : kind === 'privesc' ? 'Connecté en SSH sur serveur-web, compte limité "stagiaire". Tape help.' : 'Terminal d\'attaque prêt. Cible : 192.168.1.10. Tape help.');
    refreshPrompt();
    inp.onkeydown = e => {
      if (e.key === 'Enter') { const v = inp.value; if (v.trim()) { hist.push(v); hi = hist.length; } exec(v); inp.value = ''; refreshPrompt(); }
      else if (e.key === 'ArrowUp') { if (hi > 0) inp.value = hist[--hi]; e.preventDefault(); }
      else if (e.key === 'ArrowDown') { hi = Math.min(hist.length, hi + 1); inp.value = hist[hi] || ''; e.preventDefault(); }
    };
    root.querySelector('.term').onclick = () => inp.focus();
  }

  // ---------- CTF ----------
  function fmtDuree(ms) {
    if (ms <= 0) return '0 s';
    const s = Math.floor(ms / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return (h ? h + ' h ' : '') + (h || m ? m + ' min ' : '') + sec + ' s';
  }
  async function ctfView() {
    if (newChalCount) { newChalCount = 0; renderNav(); }
    let cat = 'tous', data = await api('/api/ctf'), board = (await api('/api/classement')).board;
    const feed = ctfView.feed || (ctfView.feed = []);
    let tickTimer = null;
    const draw = () => {
      clearInterval(tickTimer);
      const list = data.challenges.filter(c => cat === 'tous' || c.cat === cat);
      const w = data.window || { status: 'libre' };
      const locked = w.status === 'avant' || w.status === 'termine';
      let banner = '';
      if (w.status === 'avant') banner = `<div class="banner" id="ctfbanner">⏳ La compétition commence dans <b id="ctfcount"></b></div>`;
      else if (w.status === 'en_cours' && w.end) banner = `<div class="banner" id="ctfbanner" style="background:linear-gradient(90deg,#14532d,#0f3d22)">🟢 Compétition en cours — il reste <b id="ctfcount"></b></div>`;
      else if (w.status === 'termine') banner = `<div class="banner" id="ctfbanner" style="background:#3a1414;border-color:#7a2a2a">🏁 Compétition terminée — classement final ci-dessous.</div>`;
      app.innerHTML = `<h1>CTF en direct</h1><p class="muted">Trouve des flags au format <code>SEH{...}</code>. Plus un challenge est résolu, moins il rapporte. Le premier à le résoudre gagne le « first blood ».</p>
        ${banner}
        <div class="ctf-layout"><div>
          <div class="chips">${['tous', 'web', 'crypto', 'forensique', 'reseau', 'divers'].map(k => `<button class="chip ${cat === k ? 'on' : ''}" data-cat="${k}">${k === 'tous' ? 'Tous' : k[0].toUpperCase() + k.slice(1)}</button>`).join('')}</div>
          ${list.map(c => `<details class="chal ${c.solved ? 'solved' : ''}" data-id="${c.id}"><summary><span class="pill ${c.cat}">${c.cat}</span><span class="nm">${c.solved ? '✔ ' : ''}${esc(c.title)}</span><span class="muted" style="font-size:.85rem">${c.solves} résolu${c.solves > 1 ? 's' : ''}</span><span class="sc">${c.points} pts</span></summary>
            <div class="body"><p>${c.desc}</p>${c.code ? `<div class="card" style="margin:10px 0"><div class="row between" style="margin-bottom:8px"><b>Atelier code (${c.code.lang === 'python' ? 'Python' : 'Bash'})</b><button class="btn sm coderun" type="button" data-lang="${c.code.lang}">▶ Exécuter</button></div><textarea class="codesrc" spellcheck="false" style="width:100%;height:160px;font-family:var(--mono);font-size:.85rem;background:#070d18;color:#d6f5de;border:1px solid var(--line);border-radius:8px;padding:10px;resize:vertical">${esc(c.code.starter)}</textarea><pre class="codeout" style="min-height:40px;white-space:pre-wrap;margin-top:8px">Clique sur « Exécuter » pour lancer le script.</pre></div>` : ''}${c.solved ? '<div class="res good">Flag validé.</div>' : locked ? `<p class="muted">${w.status === 'avant' ? 'Les soumissions ouvriront au début de la compétition.' : 'Les soumissions sont closes.'}</p>` : `<form><input autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="SEH{...}" aria-label="Flag"><button class="btn" type="submit">Valider</button></form><div class="res"></div>`}</div></details>`).join('') || '<p class="muted">Aucun challenge dans cette catégorie.</p>'}
        </div><aside class="card"><b>Top 5</b><div class="feed" style="margin-top:8px">${board.slice(0, 5).map((u, i) => `<div>${i + 1}. ${esc(u.username)} <span class="muted" style="float:right">${u.points} pts</span></div>`).join('') || '<div class="muted">Personne pour l\'instant.</div>'}</div>
        <b style="display:block;margin-top:16px">En direct</b><div class="feed" style="margin-top:8px">${feed.slice(0, 8).map(f => `<div>${f}</div>`).join('') || '<div class="muted">Les résolutions apparaîtront ici.</div>'}</div></aside></div>`;
      const countEl = $('#ctfcount');
      if (countEl) {
        const target = w.status === 'avant' ? w.start : w.end;
        const tick = () => { const left = target - Date.now(); countEl.textContent = fmtDuree(left); if (left <= 0) { clearInterval(tickTimer); draw(); } };
        tick(); tickTimer = setInterval(tick, 1000);
      }
      app.querySelectorAll('.chip').forEach(b => b.onclick = () => { cat = b.dataset.cat; draw(); });
      app.querySelectorAll('.coderun').forEach(btn => {
        btn.onclick = async () => {
          const box = btn.closest('.chal'), out = box.querySelector('.codeout'), src = box.querySelector('.codesrc');
          btn.disabled = true; btn.textContent = '… exécution'; out.textContent = 'Exécution en cours (jusqu\'à 8 secondes)…';
          try {
            const r = await api('/api/run-code', { lang: btn.dataset.lang, code: src.value });
            if (!r.ok) out.textContent = '✗ ' + r.erreur;
            else { let t = (r.stdout || '') + (r.stderr ? '\n--- erreurs ---\n' + r.stderr : ''); if (r.timedOut) t += '\n\n⏱ Temps dépassé (8 s).'; out.textContent = t.trim() || '(aucune sortie — pense à print())'; }
          } catch (e) { out.textContent = '✗ ' + e.message; }
          btn.disabled = false; btn.textContent = '▶ Exécuter';
        };
      });
      app.querySelectorAll('.chal').forEach(box => {
        const form = box.querySelector('form'); if (!form) return;
        form.onsubmit = async ev => {
          ev.preventDefault(); if (!ME) return go('#/connexion');
          const input = form.querySelector('input'), res = box.querySelector('.res');
          try {
            const r = await api('/api/ctf/submit', { id: box.dataset.id, flag: input.value });
            if (!r.correct) { res.className = 'res bad'; res.textContent = 'Mauvais flag. Réessaie !'; return; }
            toast(r.first ? `🩸 First blood ! +${r.points} points` : `+${r.points} points`);
            data = await api('/api/ctf'); board = (await api('/api/classement')).board; await loadMe(); renderNav(); draw();
          } catch (e) { if (e.status === 401) go('#/connexion'); else { res.className = 'res bad'; res.textContent = e.message; } }
        };
      });
    };
    draw();
    ctfView.refresh = async () => { if (VIEW !== 'ctf') return; const open = [...app.querySelectorAll('.chal[open]')].map(x => x.dataset.id); data = await api('/api/ctf'); board = (await api('/api/classement')).board; draw(); open.forEach(id => { const el = app.querySelector(`.chal[data-id="${id}"]`); if (el) el.open = true; }); };
  }

  // ---------- Classement ----------
  async function avisView() {
    const d = await api('/api/avis');
    const etoiles = n => '★'.repeat(n) + '☆'.repeat(5 - n);
    app.innerHTML = `<h1>Avis des participants</h1>
      <p class="muted">${d.total ? `Note moyenne : <b style="color:var(--gr)">${d.moyenne} / 5</b> (${d.total} avis)` : 'Aucun avis pour le moment, sois le premier !'}</p>
      ${ME ? `<div class="card"><b>Laisser un avis</b><form id="aform" style="margin-top:10px">
        <label>Note<select name="note">${[5, 4, 3, 2, 1].map(n => `<option value="${n}">${etoiles(n)} (${n}/5)</option>`).join('')}</select></label>
        <label>Commentaire<input name="commentaire" required maxlength="500" placeholder="Qu'as-tu pensé de la plateforme ?"></label>
        <div class="err" id="aerr"></div><button class="btn" type="submit">Envoyer</button></form></div>`
        : `<p class="muted"><a href="#/connexion">Connecte-toi</a> pour laisser un avis.</p>`}
      <div class="section-title"><h2>Tous les avis</h2></div>
      ${d.avis.map(a => `<div class="card" style="margin-bottom:10px"><div class="row between"><b>${esc(a.username)}</b><span style="color:var(--am)">${etoiles(a.note)}</span></div><p style="margin:6px 0 0">${esc(a.commentaire)}</p><div class="muted" style="font-size:.78rem;margin-top:4px">${new Date(a.created_at).toLocaleDateString('fr-FR')}</div></div>`).join('') || ''}`;
    const f = $('#aform'); if (f) f.onsubmit = async ev => {
      ev.preventDefault(); const fd = new FormData(ev.target);
      try { await api('/api/avis', { note: Number(fd.get('note')), commentaire: fd.get('commentaire') }); toast('Merci pour ton avis !'); avisView(); }
      catch (e) { $('#aerr').textContent = e.message; }
    };
  }
  async function boardView() {
    const { board, teams, me } = await api('/api/classement');
    app.innerHTML = `<h1>Classement</h1>
      <div class="section-title" style="margin-top:0"><h2>Joueurs</h2></div>
      <div class="card tw" style="padding:6px 8px"><table><thead><tr><th>#</th><th>Hacker</th><th>Niveau</th><th>Rooms</th><th>Flags CTF</th><th>Points</th></tr></thead><tbody>
      ${board.map((u, i) => `<tr class="${u.id === me ? 'me' : ''}"><td class="rank">${i + 1}</td><td><b>${esc(u.username)}</b></td><td class="muted">${esc(levelOf(u.points).title)}</td><td>${u.rooms}</td><td>${u.flags}</td><td><b style="font-family:var(--mono);color:var(--gr)">${u.points}</b></td></tr>`).join('') || '<tr><td colspan="6" class="muted">Aucun joueur pour l\'instant. Sois le premier !</td></tr>'}</tbody></table></div>
      <div class="section-title"><h2>Équipes</h2></div>
      <div class="card tw" style="padding:6px 8px"><table><thead><tr><th>#</th><th>Équipe</th><th>Membres</th><th>Flags CTF</th><th>Points</th></tr></thead><tbody>
      ${(teams || []).map((t, i) => `<tr><td class="rank">${i + 1}</td><td><b>${esc(t.name)}</b></td><td>${t.members}</td><td>${t.flags}</td><td><b style="font-family:var(--mono);color:var(--gr)">${t.points}</b></td></tr>`).join('') || '<tr><td colspan="5" class="muted">Aucune équipe pour l\'instant.</td></tr>'}</tbody></table></div>`;
  }

  // ---------- Profil ----------
  const ROLE_LABEL = { eleve: 'Élève', formateur: 'Formateur', admin: 'Administrateur' };
  async function teamCard() {
    const { team } = await api('/api/team');
    if (!team) return `<div class="card"><b>Mon équipe</b><p class="muted" style="font-size:.9rem">Forme une équipe pour le classement CTF par équipes (10 membres maximum).</p>
      <div class="grid g2">
        <form id="tcreate"><label>Créer une équipe<input name="name" placeholder="Nom de l'équipe" autocomplete="off"></label><button class="btn sm" type="submit">Créer</button></form>
        <form id="tjoin"><label>Rejoindre avec un code<input name="code" placeholder="Ex. 3F9A2B" autocomplete="off" style="text-transform:uppercase"></label><button class="btn ghost sm" type="submit">Rejoindre</button></form>
      </div><div class="err" id="terr"></div></div>`;
    return `<div class="card"><div class="row between"><b>Équipe : ${esc(team.name)}</b><button class="btn ghost sm" id="tleave">Quitter l'équipe</button></div>
      <p class="muted" style="font-size:.88rem;margin:6px 0">Code d'invitation : <code>${esc(team.code)}</code> · ${team.points} points cumulés</p>
      ${team.members.map(m => `<div style="font-size:.9rem;padding:4px 0">${esc(m.username)} <span class="muted" style="float:right">${m.points} pts</span></div>`).join('')}</div>`;
  }
  function bindTeamCard() {
    const tc = $('#tcreate'), tj = $('#tjoin'), tl = $('#tleave'), terr = $('#terr');
    if (tc) tc.onsubmit = async ev => { ev.preventDefault(); try { await api('/api/team/create', { name: new FormData(ev.target).get('name') }); profileView(); } catch (e) { terr.textContent = e.message; } };
    if (tj) tj.onsubmit = async ev => { ev.preventDefault(); try { await api('/api/team/join', { code: new FormData(ev.target).get('code') }); profileView(); } catch (e) { terr.textContent = e.message; } };
    if (tl) tl.onclick = async () => { await api('/api/team/leave', {}); profileView(); };
  }
  async function profileView() {
    if (needLogin()) return;
    const p = await api('/api/profil'), lv = p.level, team = await teamCard();
    app.innerHTML = `<div class="card row" style="gap:18px;flex-wrap:wrap"><div class="avatar">${esc(p.user.username[0].toUpperCase())}</div>
      <div style="flex:1;min-width:200px"><h1 style="margin:0">${esc(p.user.username)}</h1><div class="muted">Niveau ${lv.n} · ${esc(lv.title)}${p.user.role !== 'eleve' ? ' · ' + ROLE_LABEL[p.user.role] : ''}</div>
      <div style="margin-top:10px">${lv.next ? bar(p.points - lv.base, lv.next - lv.base) : bar(1, 1)}</div><div class="muted" style="font-size:.85rem;margin-top:4px">${p.points} pts${lv.next ? ' · prochain niveau à ' + lv.next : ''}</div></div></div>
      <div class="grid g4 keep2" style="margin:16px 0"><div class="card stat"><b>${p.points}</b><span>points</span></div><div class="card stat"><b>${p.roomsDone.length}/${p.roomsTotal}</b><span>rooms</span></div><div class="card stat"><b>${p.ctfCount}</b><span>flags CTF</span></div><div class="card stat"><b>${p.streak} 🔥</b><span>jours de suite</span></div></div>
      <div class="section-title"><h2>Mon équipe</h2><a href="#/historique">Voir mon historique →</a></div>${team}
      <div class="section-title"><h2>Badges</h2></div>
      <div class="grid g4">${p.badges.map(b => `<div class="card badge"><i>${b.icon}</i><b>${esc(b.title)}</b><span>${esc(b.desc)}</span></div>`).join('') || '<p class="muted">Résous ta première question pour débloquer un badge.</p>'}</div>
      <div class="section-title"><h2>Certificats</h2></div>
      ${p.paths.map(x => `<div class="room-row" style="cursor:default"><span class="ic">${x.icon}</span><span class="tt"><b>${esc(x.title)}</b><span>${x.done ? 'Certifié' : x.eligible ? 'Parcours terminé — en attente de validation par un formateur' : 'Parcours en cours'}</span></span>${x.done ? `<a class="btn sm" href="#/certificat/${x.id}">Voir</a>` : x.eligible ? '<span class="pill" style="color:var(--am);border-color:#7a5a20">En attente</span>' : '<span class="muted">Verrouillé</span>'}</div>`).join('')}`;
    bindTeamCard();
  }
  async function certView(id) {
    if (needLogin()) return;
    const p = await api('/api/profil'), path = p.paths.find(x => x.id === id);
    if (!path || !path.done) { toast(path && path.eligible ? 'Ce certificat doit encore être validé par un formateur.' : 'Termine le parcours pour obtenir ce certificat.', true); return go('#/profil'); }
    app.innerHTML = `<div class="noprint row" style="justify-content:center;margin-bottom:10px"><button class="btn" onclick="window.print()">Imprimer / enregistrer en PDF</button></div>
      <div class="cert">${ICON}<h1>Certificat de réussite</h1><p>CyberLab certifie que</p><div class="nm">${esc(p.user.username)}</div><p>a terminé avec succès le parcours</p><h2 style="color:#14213a">${esc(path.title)}</h2><p style="color:#556">Délivré le ${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p></div>`;
  }

  // ---------- Formateur / admin ----------
  const CATS = { web: 'Web', crypto: 'Crypto', forensique: 'Forensique', reseau: 'Réseau', divers: 'Divers' };
  const unesc = s => String(s || '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
  const dtLocal = ms => { if (!ms) return ''; const d = new Date(ms - new Date().getTimezoneOffset() * 60000); return d.toISOString().slice(0, 16); };
  async function adminView() {
    if (needLogin()) return;
    const [d, certs, chals, win, triche] = await Promise.all([api('/api/admin/users'), api('/api/admin/certificats'), api('/api/admin/challenges'), api('/api/admin/ctf-window'), api('/api/admin/triche')]);
    const isAdmin = ME.user.role === 'admin';
    let editing = null; // id du challenge en cours d'édition, ou null pour "créer"
    const drawChalForm = () => {
      const ch = editing ? chals.challenges.find(c => c.id === editing) : null;
      $('#cform-wrap').innerHTML = `<b>${ch ? 'Modifier le challenge' : 'Ajouter un challenge'}</b>
        <form id="cform" style="margin-top:10px">
          <label>Titre<input name="title" required maxlength="60" value="${ch ? esc(ch.title) : ''}"></label>
          <div class="grid g2"><label>Catégorie<select name="cat">${Object.entries(CATS).map(([k, v]) => `<option value="${k}" ${ch && ch.cat === k ? 'selected' : ''}>${v}</option>`).join('')}</select></label><label>Points<input name="base" type="number" min="50" max="500" value="${ch ? ch.base : 150}" required></label></div>
          <label>Énoncé (affiché aux participants)<input name="desc" required maxlength="2000" placeholder="Décris l'épreuve, donne les indices nécessaires" value="${ch ? esc(unesc(ch.descr || '')) : ''}"></label>
          <label>Flag attendu<input name="flag" required maxlength="200" placeholder="SEH{...}" value="${ch ? esc(ch.flag) : ''}"></label>
          <label>Atelier de code (optionnel)<select name="code_lang"><option value="">Aucun</option><option value="python" ${ch && ch.code_lang === 'python' ? 'selected' : ''}>Python</option><option value="bash" ${ch && ch.code_lang === 'bash' ? 'selected' : ''}>Bash</option></select></label>
          <label>Code de départ (si atelier choisi)<textarea name="code_starter" rows="5" style="width:100%;font-family:var(--mono);background:#070d18;color:#d6f5de;border:1px solid var(--line);border-radius:8px;padding:8px">${ch ? esc(ch.code_starter || '') : ''}</textarea></label>
          <div class="err" id="cerr"></div><div class="row"><button class="btn" type="submit">${ch ? 'Enregistrer' : 'Créer le challenge'}</button>${ch ? '<button class="btn ghost" type="button" id="cancel-edit">Annuler</button>' : ''}</div>
        </form>`;
      const ce = $('#cancel-edit'); if (ce) ce.onclick = () => { editing = null; drawChalForm(); };
      $('#cform').onsubmit = async ev => {
        ev.preventDefault(); const f = new FormData(ev.target);
        const payload = { title: f.get('title'), cat: f.get('cat'), base: Number(f.get('base')), desc: f.get('desc'), flag: f.get('flag'), code_lang: f.get('code_lang') || '', code_starter: f.get('code_starter') || '' };
        try {
          if (ch) await api('/api/admin/challenges/update', { ...payload, id: ch.id });
          else await api('/api/admin/challenges', payload);
          toast(ch ? 'Challenge modifié' : 'Challenge créé'); editing = null; adminView();
        } catch (e) { $('#cerr').textContent = e.message; }
      };
    };
    app.innerHTML = `<div class="row between" style="flex-wrap:wrap;gap:8px"><h1 style="margin:0">Espace ${isAdmin ? 'administrateur' : 'formateur'}</h1>
      <div class="row"><button class="btn ghost sm" id="pdf">Rapport imprimable</button><button class="btn ghost sm" id="csv">Exporter en CSV</button></div></div>
      <p class="muted">${d.users.length} compte(s) · ${d.roomsTotal} rooms disponibles.</p>

      <div class="section-title"><h2>Compétition CTF</h2></div>
      <div class="card"><form id="winform" class="grid g2">
        <label>Début<input type="datetime-local" name="start" value="${dtLocal(win.window.start)}"></label>
        <label>Fin<input type="datetime-local" name="end" value="${dtLocal(win.window.end)}"></label></form>
        <p class="muted" style="font-size:.85rem;margin:8px 0">Laisse les deux champs vides pour un CTF toujours ouvert (par défaut). Statut actuel : <b>${{ libre: 'toujours ouvert', avant: 'pas encore commencé', en_cours: 'en cours', termine: 'terminé' }[win.window.status]}</b>.</p>
        <div class="row"><button class="btn sm" id="winsave">Enregistrer</button><button class="btn ghost sm" id="winclear">Retirer le minuteur</button></div></div>

      <div class="section-title"><h2>Similarités suspectes</h2></div>
      <p class="muted" style="font-size:.85rem;margin-top:-6px">Deux comptes ayant résolu la même question ou le même flag à moins de ${triche.threshold_seconds} secondes d'écart. Cela peut indiquer un copiage — ou une coïncidence (binôme, hasard). À vérifier toi-même, ce n'est pas une accusation automatique.</p>
      ${triche.matches.length ? `<div class="card tw" style="padding:6px 8px"><table><thead><tr><th>Quoi</th><th>Compte 1</th><th>Compte 2</th><th>Écart</th><th>Quand</th></tr></thead><tbody>
        ${triche.matches.map(m => `<tr><td>${m.type === 'ctf' ? '🚩 ' : '📘 '}${esc(m.title)}</td><td><b>${esc(m.user_a)}</b></td><td><b>${esc(m.user_b)}</b></td><td>${m.seconds} s</td><td class="muted">${new Date(m.at).toLocaleString('fr-FR')}</td></tr>`).join('')}
        </tbody></table></div>` : '<p class="muted">Rien de suspect détecté pour l\'instant.</p>'}

      <div class="section-title"><h2>Certificats à valider</h2></div>
      ${certs.pending.length ? certs.pending.map(c => `<div class="room-row" style="cursor:default"><span class="ic">🎓</span><span class="tt"><b>${esc(c.username)}</b><span>${esc(c.path_title)}</span></span><button class="btn sm" data-val-u="${c.user_id}" data-val-p="${esc(c.path_id)}">Valider</button></div>`).join('')
        : '<p class="muted">Rien à valider pour le moment.</p>'}

      <div class="section-title"><h2>Utilisateurs</h2></div>
      <div class="card tw" style="padding:6px 8px"><table><thead><tr><th>Utilisateur</th><th>Points</th><th>Dernière activité</th><th>Rôle</th><th></th></tr></thead><tbody>
      ${d.users.map(u => `<tr><td><b>${esc(u.username)}</b></td><td style="font-family:var(--mono)">${u.points}</td><td class="muted">${u.last_active ? new Date(u.last_active).toLocaleString('fr-FR') : 'jamais'}</td>
        <td>${!isAdmin || u.id === ME.user.id ? ROLE_LABEL[u.role] + (u.id === ME.user.id ? ' (toi)' : '') : `<select data-id="${u.id}" aria-label="Rôle"><option value="eleve" ${u.role === 'eleve' ? 'selected' : ''}>Élève</option><option value="formateur" ${u.role === 'formateur' ? 'selected' : ''}>Formateur</option><option value="admin" ${u.role === 'admin' ? 'selected' : ''}>Administrateur</option></select>`}</td>
        <td class="row" style="gap:6px"><a class="btn ghost sm" href="#/historique/${u.id}">Historique</a>${(isAdmin || u.role === 'eleve') && u.id !== ME.user.id ? `<button class="btn ghost sm" data-reset="${u.id}" data-name="${esc(u.username)}">Réinit. mdp</button>` : ''}</td></tr>`).join('')}</tbody></table></div>

      <div class="section-title"><h2>Challenges CTF créés</h2></div>
      ${chals.challenges.length ? chals.challenges.map(c => `<div class="room-row" style="cursor:default"><span class="ic">🚩</span><span class="tt"><b>${esc(c.title)}</b><span>${CATS[c.cat] || c.cat} · ${c.base} pts · ${c.solves} résolu(s)</span></span><div class="row" style="gap:6px"><button class="btn ghost sm" data-edit="${esc(c.id)}">Modifier</button><button class="btn ghost sm" data-del="${esc(c.id)}">Supprimer</button></div></div>`).join('') : '<p class="muted">Aucun challenge créé pour l\'instant.</p>'}
      <div class="card" id="cform-wrap" style="margin-top:10px"></div>`;
    drawChalForm();
    app.querySelectorAll('select[data-id]').forEach(s => s.onchange = async () => { try { await api('/api/admin/users', { id: Number(s.dataset.id), role: s.value }); toast('Rôle mis à jour'); } catch (e) { toast(e.message, true); } });
    app.querySelectorAll('[data-val-u]').forEach(b => b.onclick = async () => { try { await api('/api/admin/certificats', { user_id: Number(b.dataset.valU), path_id: b.dataset.valP }); toast('Certificat validé'); adminView(); } catch (e) { toast(e.message, true); } });
    app.querySelectorAll('[data-del]').forEach(b => b.onclick = async () => { try { await api('/api/admin/challenges/delete', { id: b.dataset.del }); toast('Challenge supprimé'); adminView(); } catch (e) { toast(e.message, true); } });
    app.querySelectorAll('[data-edit]').forEach(b => b.onclick = () => { editing = b.dataset.edit; drawChalForm(); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); });
    app.querySelectorAll('[data-reset]').forEach(b => b.onclick = () => {
      const np = prompt(`Nouveau mot de passe pour ${b.dataset.name} (6 caractères minimum) :`);
      if (np === null) return;
      api('/api/admin/reset-password', { user_id: Number(b.dataset.reset), new_password: np }).then(() => toast('Mot de passe réinitialisé')).catch(e => toast(e.message, true));
    });
    $('#winsave').onclick = async ev => {
      ev.preventDefault(); const f = new FormData($('#winform'));
      try { await api('/api/admin/ctf-window', { start: f.get('start') || null, end: f.get('end') || null }); toast('Minuteur enregistré'); adminView(); } catch (e) { toast(e.message, true); }
    };
    $('#winclear').onclick = async ev => { ev.preventDefault(); try { await api('/api/admin/ctf-window', { start: null, end: null }); toast('Minuteur retiré'); adminView(); } catch (e) { toast(e.message, true); } };
    $('#csv').onclick = () => {
      const rows = [['utilisateur', 'points', 'derniere_activite', 'role'], ...d.users.map(u => [u.username, u.points, u.last_active ? new Date(u.last_active).toISOString() : '', u.role])];
      const blob = new Blob(['\ufeff' + rows.map(r => r.map(x => `"${String(x).replace(/"/g, '""')}"`).join(';')).join('\n')], { type: 'text/csv;charset=utf-8' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'progression.csv'; a.click();
    };
    $('#pdf').onclick = () => go('#/rapport');
  }
  async function rapportView() {
    if (needLogin()) return;
    if (!['formateur', 'admin'].includes(ME.user.role)) { toast('Réservé aux formateurs et administrateurs.', true); return go('#/'); }
    const d = await api('/api/admin/users');
    app.innerHTML = `<div class="noprint row" style="justify-content:center;margin-bottom:10px"><button class="btn" onclick="window.print()">Imprimer / enregistrer en PDF</button></div>
      <div class="cert" style="text-align:left;max-width:900px"><div class="row between">${ICON}<div><h1 style="margin:0">Rapport de progression</h1><p class="muted" style="margin:2px 0">CyberLab · ${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p></div></div>
      <table style="margin-top:20px;width:100%"><thead><tr><th>Utilisateur</th><th>Rôle</th><th>Points</th><th>Dernière activité</th></tr></thead><tbody>
      ${d.users.sort((a, b) => b.points - a.points).map(u => `<tr><td><b>${esc(u.username)}</b></td><td>${ROLE_LABEL[u.role]}</td><td>${u.points}</td><td>${u.last_active ? new Date(u.last_active).toLocaleDateString('fr-FR') : '—'}</td></tr>`).join('')}
      </tbody></table><p class="muted" style="margin-top:16px;font-size:.82rem">${d.users.length} compte(s) · ${d.roomsTotal} rooms disponibles</p></div>`;
  }
  async function historiqueView(userId) {
    if (needLogin()) return;
    const isSelf = !userId || Number(userId) === ME.user.id;
    if (!isSelf && !['formateur', 'admin'].includes(ME.user.role)) { toast('Accès refusé.', true); return go('#/'); }
    let d; try { d = await api('/api/historique' + (userId ? '?user_id=' + userId : '')); } catch (e) { toast(e.message, true); return go('#/'); }
    app.innerHTML = `<a href="${isSelf ? '#/profil' : '#/admin'}" class="muted">← Retour</a>
      <h1>Historique de ${esc(d.username)}</h1><p class="muted">Journal chronologique des rooms et challenges résolus (pas un enregistrement image par image des manipulations).</p>
      <div class="card">${d.events.length ? d.events.map(e => `<div class="row between" style="padding:9px 0;border-bottom:1px dashed var(--line)"><span>${e.type === 'ctf' ? '🚩' : '📘'} ${esc(e.title)}${e.detail ? ' — <span class="muted">' + esc(e.detail) + '</span>' : ''}</span><span class="muted" style="font-size:.85rem;white-space:nowrap">${new Date(e.at).toLocaleString('fr-FR')} · +${e.points} pts</span></div>`).join('') : '<p class="muted">Aucune activité pour l\'instant.</p>'}</div>`;
  }

  // ---------- Connexion ----------
  async function authView() {
    let mode = location.hash.includes('inscription') ? 'inscription' : 'connexion';
    const draw = () => {
      app.innerHTML = `<div class="card auth"><div class="tabs"><button data-m="connexion" class="${mode === 'connexion' ? 'on' : ''}">Connexion</button><button data-m="inscription" class="${mode === 'inscription' ? 'on' : ''}">Inscription</button></div>
        <form id="af"><label>Nom d'utilisateur<input name="u" autocomplete="username" required></label><label>Mot de passe<input name="p" type="password" autocomplete="${mode === 'connexion' ? 'current-password' : 'new-password'}" required minlength="6"></label>
        <div class="err" id="ae"></div><button class="btn" style="width:100%" type="submit">${mode === 'connexion' ? 'Se connecter' : 'Créer mon compte'}</button></form>
        ${mode === 'inscription' ? '<p class="muted" style="font-size:.85rem;margin-bottom:0">3 à 20 caractères pour le nom, 6 minimum pour le mot de passe. Ne réutilise pas un mot de passe important.</p>' : ''}</div>`;
      app.querySelectorAll('.tabs button').forEach(b => b.onclick = () => { mode = b.dataset.m; draw(); });
      $('#af').onsubmit = async ev => {
        ev.preventDefault(); const f = new FormData(ev.target);
        try { await api(mode === 'connexion' ? '/api/login' : '/api/register', { username: f.get('u'), password: f.get('p') }); await loadMe(); renderNav(); go('#/'); if (location.hash === '#/' ) route(); }
        catch (e) { $('#ae').textContent = e.message; }
      };
    };
    draw();
  }

  // ---------- Temps réel ----------
  function connectEvents() {
    if (!window.EventSource) return;
    es = new EventSource('/api/events');
    es.onmessage = ev => {
      let m; try { m = JSON.parse(ev.data); } catch { return; }
      if (m.type === 'solve') {
        const line = `${m.first ? '🩸 ' : '🚩 '}<b>${esc(m.user)}</b> a résolu « ${esc(m.challenge)} »`;
        (ctfView.feed = ctfView.feed || []).unshift(line);
        if (!ME || m.user !== ME.user.username) toast(`${m.user} a résolu « ${m.challenge} »`);
        if (ctfView.refresh) ctfView.refresh();
      } else if (m.type === 'progress' && VIEW === 'classement') boardView();
      else if (m.type === 'newchal') {
        if (VIEW !== 'ctf') { newChalCount++; renderNav(); }
        toast(`🆕 Nouveau challenge CTF : « ${esc(m.title)} »`);
        if (ctfView.refresh) ctfView.refresh();
      }
    };
  }

  window.addEventListener('hashchange', route);
  (async () => { await loadMe(); connectEvents(); route(); })();
})();

'use strict';
// CyberLab : serveur sans aucune dépendance externe (Node.js 22.13+ requis).
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const os = require('os');
const { DatabaseSync } = require('node:sqlite');
const { PATHS, ROOMS } = require('./content/rooms');
const { CTF } = require('./content/ctf');
const handleLab = require('./labs');
const { runCode } = require('./code-runner');

const PORT = Number(process.env.PORT) || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const PUBLIC_DIR = path.join(__dirname, 'public');
fs.mkdirSync(DATA_DIR, { recursive: true });

// ---------- Base de données ----------
const db = new DatabaseSync(path.join(DATA_DIR, 'smith.db'));
db.exec(`
CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE COLLATE NOCASE NOT NULL,
  salt TEXT NOT NULL, hash TEXT NOT NULL, role TEXT NOT NULL DEFAULT 'eleve', created_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY, user_id INTEGER NOT NULL, created_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS progress(
  user_id INTEGER NOT NULL, room_id TEXT NOT NULL, qid TEXT NOT NULL, points INTEGER NOT NULL, solved_at INTEGER NOT NULL,
  PRIMARY KEY(user_id, room_id, qid));
CREATE TABLE IF NOT EXISTS ctf_solves(
  user_id INTEGER NOT NULL, chal_id TEXT NOT NULL, points INTEGER NOT NULL, solved_at INTEGER NOT NULL, first_blood INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY(user_id, chal_id));
`);
db.exec(`
CREATE TABLE IF NOT EXISTS teams(
  id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE COLLATE NOCASE NOT NULL, code TEXT UNIQUE NOT NULL, owner_id INTEGER NOT NULL, created_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS custom_ctf(
  id TEXT PRIMARY KEY, cat TEXT NOT NULL, title TEXT NOT NULL, descr TEXT NOT NULL, base INTEGER NOT NULL, flag TEXT NOT NULL, created_by INTEGER NOT NULL, created_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS cert_validations(
  user_id INTEGER NOT NULL, path_id TEXT NOT NULL, validated_by INTEGER NOT NULL, validated_at INTEGER NOT NULL, PRIMARY KEY(user_id, path_id));
CREATE TABLE IF NOT EXISTS settings(key TEXT PRIMARY KEY, value TEXT);
CREATE TABLE IF NOT EXISTS avis(
  user_id INTEGER PRIMARY KEY, note INTEGER NOT NULL, commentaire TEXT NOT NULL, created_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS hint_uses(
  user_id INTEGER NOT NULL, room_id TEXT NOT NULL, qid TEXT NOT NULL, cost INTEGER NOT NULL, used_at INTEGER NOT NULL,
  PRIMARY KEY(user_id, room_id, qid));
`);
const HINT_COST = 5;
try { db.exec('ALTER TABLE users ADD COLUMN team_id INTEGER'); } catch { /* colonne déjà présente */ }
try { db.exec('ALTER TABLE custom_ctf ADD COLUMN code_lang TEXT'); } catch { /* colonne déjà présente */ }
try { db.exec('ALTER TABLE custom_ctf ADD COLUMN code_starter TEXT'); } catch { /* colonne déjà présente */ }
const q = {
  userByName: db.prepare('SELECT * FROM users WHERE username = ?'),
  userById: db.prepare('SELECT id, username, role, created_at FROM users WHERE id = ?'),
  countUsers: db.prepare('SELECT COUNT(*) n FROM users'),
  insUser: db.prepare('INSERT INTO users(username, salt, hash, role, created_at) VALUES (?,?,?,?,?)'),
  insSession: db.prepare('INSERT INTO sessions(token, user_id, created_at) VALUES (?,?,?)'),
  sessionUser: db.prepare('SELECT u.id, u.username, u.role FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token = ?'),
  delSession: db.prepare('DELETE FROM sessions WHERE token = ?'),
  progOf: db.prepare('SELECT room_id, qid, points, solved_at FROM progress WHERE user_id = ?'),
  insProg: db.prepare('INSERT OR IGNORE INTO progress(user_id, room_id, qid, points, solved_at) VALUES (?,?,?,?,?)'),
  ctfOf: db.prepare('SELECT chal_id, points, solved_at, first_blood FROM ctf_solves WHERE user_id = ?'),
  ctfCount: db.prepare('SELECT chal_id, COUNT(*) n FROM ctf_solves GROUP BY chal_id'),
  ctfCountOne: db.prepare('SELECT COUNT(*) n FROM ctf_solves WHERE chal_id = ?'),
  insCtf: db.prepare('INSERT OR IGNORE INTO ctf_solves(user_id, chal_id, points, solved_at, first_blood) VALUES (?,?,?,?,?)'),
  board: db.prepare(`SELECT u.id, u.username,
    COALESCE((SELECT SUM(points) FROM progress WHERE user_id = u.id), 0) + COALESCE((SELECT SUM(points) FROM ctf_solves WHERE user_id = u.id), 0) - COALESCE((SELECT SUM(cost) FROM hint_uses WHERE user_id = u.id), 0) AS points,
    (SELECT COUNT(*) FROM ctf_solves WHERE user_id = u.id) AS flags,
    (SELECT COUNT(DISTINCT room_id) FROM progress WHERE user_id = u.id) AS rooms,
    (SELECT name FROM teams WHERE id = u.team_id) AS team
    FROM users u ORDER BY points DESC, u.username LIMIT 100`),
  adminUsers: db.prepare(`SELECT u.id, u.username, u.role, u.created_at,
    COALESCE((SELECT SUM(points) FROM progress WHERE user_id = u.id), 0) + COALESCE((SELECT SUM(points) FROM ctf_solves WHERE user_id = u.id), 0) - COALESCE((SELECT SUM(cost) FROM hint_uses WHERE user_id = u.id), 0) AS points,
    (SELECT MAX(x) FROM (SELECT MAX(solved_at) AS x FROM progress WHERE user_id = u.id UNION ALL SELECT MAX(solved_at) FROM ctf_solves WHERE user_id = u.id UNION ALL SELECT MAX(used_at) FROM hint_uses WHERE user_id = u.id)) AS last_active FROM users u ORDER BY u.id`),
  setRole: db.prepare('UPDATE users SET role = ? WHERE id = ?'),
  setHash: db.prepare('UPDATE users SET salt = ?, hash = ? WHERE id = ?'),
  getSetting: db.prepare('SELECT value FROM settings WHERE key = ?'),
  setSetting: db.prepare('INSERT INTO settings(key, value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value = excluded.value'),
  delSetting: db.prepare('DELETE FROM settings WHERE key = ?'),
  historique: db.prepare(`
    SELECT 'room' AS type, room_id AS ref, qid AS detail, points, solved_at FROM progress WHERE user_id = ?
    UNION ALL
    SELECT 'ctf' AS type, chal_id AS ref, CASE WHEN first_blood THEN 'first_blood' ELSE '' END AS detail, points, solved_at FROM ctf_solves WHERE user_id = ?
    ORDER BY solved_at DESC LIMIT 300`),
  teamById: db.prepare('SELECT * FROM teams WHERE id = ?'),
  teamByName: db.prepare('SELECT id FROM teams WHERE name = ?'),
  teamByCode: db.prepare('SELECT * FROM teams WHERE code = ?'),
  insTeam: db.prepare('INSERT INTO teams(name, code, owner_id, created_at) VALUES (?,?,?,?)'),
  delTeam: db.prepare('DELETE FROM teams WHERE id = ?'),
  setTeam: db.prepare('UPDATE users SET team_id = ? WHERE id = ?'),
  userTeam: db.prepare('SELECT team_id FROM users WHERE id = ?'),
  teamCount: db.prepare('SELECT COUNT(*) n FROM users WHERE team_id = ?'),
  teamMembers: db.prepare('SELECT u.username, COALESCE((SELECT SUM(points) FROM ctf_solves WHERE user_id = u.id), 0) AS points FROM users u WHERE u.team_id = ? ORDER BY points DESC, u.username'),
  teamsBoard: db.prepare(`SELECT t.id, t.name, COUNT(DISTINCT u.id) AS members, COALESCE(SUM(cs.points), 0) AS points, COUNT(cs.chal_id) AS flags
    FROM teams t LEFT JOIN users u ON u.team_id = t.id LEFT JOIN ctf_solves cs ON cs.user_id = u.id GROUP BY t.id ORDER BY points DESC, t.name LIMIT 50`),
  customAll: db.prepare('SELECT * FROM custom_ctf ORDER BY created_at'),
  customOne: db.prepare('SELECT * FROM custom_ctf WHERE id = ?'),
  insCustom: db.prepare('INSERT INTO custom_ctf(id, cat, title, descr, base, flag, created_by, created_at, code_lang, code_starter) VALUES (?,?,?,?,?,?,?,?,?,?)'),
  updCustom: db.prepare('UPDATE custom_ctf SET cat = ?, title = ?, descr = ?, base = ?, flag = ?, code_lang = ?, code_starter = ? WHERE id = ?'),
  delCustom: db.prepare('DELETE FROM custom_ctf WHERE id = ?'),
  delCustomSolves: db.prepare('DELETE FROM ctf_solves WHERE chal_id = ?'),
  certValidated: db.prepare('SELECT 1 FROM cert_validations WHERE user_id = ? AND path_id = ?'),
  certsOf: db.prepare('SELECT path_id FROM cert_validations WHERE user_id = ?'),
  insCertValidation: db.prepare('INSERT OR IGNORE INTO cert_validations(user_id, path_id, validated_by, validated_at) VALUES (?,?,?,?)'),
  pendingCerts: db.prepare(`SELECT u.id user_id, u.username FROM users u WHERE u.id != ?`),
  avisAll: db.prepare('SELECT a.note, a.commentaire, a.created_at, u.username FROM avis a JOIN users u ON u.id = a.user_id ORDER BY a.created_at DESC LIMIT 200'),
  avisSet: db.prepare('INSERT INTO avis(user_id, note, commentaire, created_at) VALUES (?,?,?,?) ON CONFLICT(user_id) DO UPDATE SET note=excluded.note, commentaire=excluded.commentaire, created_at=excluded.created_at'),
  hintUsed: db.prepare('SELECT 1 FROM hint_uses WHERE user_id = ? AND room_id = ? AND qid = ?'),
  insHint: db.prepare('INSERT OR IGNORE INTO hint_uses(user_id, room_id, qid, cost, used_at) VALUES (?,?,?,?,?)'),
  hintsOf: db.prepare('SELECT room_id, qid, cost FROM hint_uses WHERE user_id = ?'),
  allSolvesOrdered: db.prepare(`
    SELECT 'room' AS type, room_id AS ref, qid AS detail, user_id, solved_at FROM progress
    UNION ALL
    SELECT 'ctf' AS type, chal_id AS ref, NULL AS detail, user_id, solved_at FROM ctf_solves
    ORDER BY type, ref, solved_at`)
};

// ---------- Utilitaires ----------
const norm = s => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, ' ');
const json = (res, code, obj, headers = {}) => {
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers });
  res.end(JSON.stringify(obj));
};
const readJson = req => new Promise((resolve, reject) => {
  let d = '';
  req.on('data', c => { d += c; if (d.length > 100000) { reject(new Error('trop gros')); req.destroy(); } });
  req.on('end', () => { try { resolve(d ? JSON.parse(d) : {}); } catch { reject(new Error('JSON invalide')); } });
});
const hashPw = (pw, salt) => crypto.scryptSync(pw, salt, 32).toString('hex');
const parseCookies = req => Object.fromEntries((req.headers.cookie || '').split(/;\s*/).filter(Boolean).map(c => { const i = c.indexOf('='); return [c.slice(0, i), c.slice(i + 1)]; }));
const currentUser = req => { const t = parseCookies(req).sid; return t ? q.sessionUser.get(t) : null; };
const buckets = new Map(); // limitation simple des tentatives
const limited = (key, max, windowMs) => {
  const now = Date.now(); const arr = (buckets.get(key) || []).filter(t => now - t < windowMs);
  arr.push(now); buckets.set(key, arr); return arr.length > max;
};

// ---------- Temps réel (Server-Sent Events) ----------
const clients = new Set();
const broadcast = (type, data) => { const msg = `data: ${JSON.stringify({ type, ...data })}\n\n`; for (const c of clients) c.write(msg); };

// ---------- Logique métier ----------
const roomPoints = room => room.tasks.reduce((s, t) => s + t.questions.reduce((a, x) => a + x.pts, 0), 0);
const roomQCount = room => room.tasks.reduce((s, t) => s + t.questions.length, 0);
const escHtml = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])).replace(/\n/g, '<br>');
const allCtf = () => [...CTF, ...q.customAll.all().map(r => ({ id: r.id, cat: r.cat, title: r.title, desc: r.descr, base: r.base, flag: r.flag, code: r.code_lang ? { lang: r.code_lang, starter: r.code_starter || '' } : null }))];
const ctfValue = (chal, solves) => Math.max(Math.ceil(chal.base * 0.5), chal.base - Math.floor(chal.base * 0.05) * solves);
const publicRoom = (id, r) => ({
  id, title: r.title, level: r.level, min: r.min, icon: r.icon, desc: r.desc, lab: r.lab || null, terminal: r.terminal || null, code: r.code || null,
  points: roomPoints(r), qcount: roomQCount(r),
  tasks: r.tasks.map(t => ({ title: t.title, body: t.body, questions: t.questions.map(({ id, q, pts, hint }) => ({ id, q, pts, hasHint: !!hint })) }))
});
const LEVELS = ['Script Kiddie', 'Initié', 'Apprenti', 'Hacker', 'Pentester', 'Expert', 'Élite'];
const levelOf = pts => { const n = Math.min(LEVELS.length - 1, Math.floor(pts / 1400)); return { n: n + 1, title: LEVELS[n], next: n + 1 < LEVELS.length ? (n + 1) * 1400 : null, base: n * 1400 }; };

function userStats(userId) {
  const prog = q.progOf.all(userId), ctf = q.ctfOf.all(userId), hints = q.hintsOf.all(userId);
  const points = prog.reduce((s, x) => s + x.points, 0) + ctf.reduce((s, x) => s + x.points, 0) - hints.reduce((s, x) => s + x.cost, 0);
  const byRoom = {};
  for (const p of prog) (byRoom[p.room_id] ||= []).push(p.qid);
  const roomsDone = Object.keys(ROOMS).filter(id => (byRoom[id] || []).length >= roomQCount(ROOMS[id]));
  const pathsDone = PATHS.filter(p => p.rooms.every(r => roomsDone.includes(r))).map(p => p.id);
  const days = [...new Set([...prog, ...ctf].map(x => new Date(x.solved_at).toISOString().slice(0, 10)))].sort();
  let streak = 0, cur = new Date(); cur = new Date(cur.toISOString().slice(0, 10));
  if (!days.includes(cur.toISOString().slice(0, 10))) cur.setUTCDate(cur.getUTCDate() - 1);
  while (days.includes(cur.toISOString().slice(0, 10))) { streak++; cur.setUTCDate(cur.getUTCDate() - 1); }
  const badges = [];
  if (prog.length + ctf.length >= 1) badges.push({ id: 'premier', icon: '🚩', title: 'Premier flag', desc: 'Résoudre sa première question.' });
  if (roomsDone.length >= 1) badges.push({ id: 'room1', icon: '🏁', title: 'Room terminée', desc: 'Terminer une room.' });
  if (roomsDone.length >= 5) badges.push({ id: 'room5', icon: '🎯', title: 'Cinq rooms', desc: 'Terminer 5 rooms.' });
  if (ctf.length >= 3) badges.push({ id: 'ctf3', icon: '⚔️', title: 'Chasseur de flags', desc: 'Résoudre 3 challenges CTF.' });
  if (ctf.some(c => c.first_blood)) badges.push({ id: 'fb', icon: '🩸', title: 'First blood', desc: 'Être le premier à résoudre un challenge.' });
  if (streak >= 3) badges.push({ id: 'streak3', icon: '🔥', title: 'Série de 3 jours', desc: 'Apprendre 3 jours de suite.' });
  for (const p of PATHS) if (pathsDone.includes(p.id)) badges.push({ id: 'path-' + p.id, icon: p.icon, title: 'Parcours : ' + p.title, desc: 'Parcours terminé.' });
  const validated = new Set(q.certsOf.all(userId).map(x => x.path_id));
  return { points, level: levelOf(points), byRoom, roomsDone, pathsDone, validated, streak, badges, ctf, ctfCount: ctf.length, hintsUsed: hints.map(h => h.room_id + ':' + h.qid) };
}

// ---------- API ----------
async function api(req, res, url) {
  const p = url.pathname, method = req.method;
  const user = currentUser(req);
  const need = () => { if (!user) { json(res, 401, { erreur: 'Connexion requise' }); return false; } return true; };

  if (p === '/api/register' && method === 'POST') {
    if (limited('reg:' + req.socket.remoteAddress, 10, 600000)) return json(res, 429, { erreur: 'Trop de tentatives, réessaie plus tard.' });
    const { username, password } = await readJson(req);
    if (!/^[A-Za-z0-9_.-]{3,20}$/.test(username || '')) return json(res, 400, { erreur: "Nom d'utilisateur : 3 à 20 caractères (lettres, chiffres, _ . -)." });
    if (typeof password !== 'string' || password.length < 6) return json(res, 400, { erreur: 'Mot de passe : 6 caractères minimum.' });
    if (q.userByName.get(username)) return json(res, 409, { erreur: "Ce nom d'utilisateur est déjà pris." });
    const salt = crypto.randomBytes(16).toString('hex');
    const role = q.countUsers.get().n === 0 ? 'admin' : 'eleve'; // le premier compte créé devient administrateur
    const id = Number(q.insUser.run(username, salt, hashPw(password, salt), role, Date.now()).lastInsertRowid);
    const token = crypto.randomBytes(32).toString('hex'); q.insSession.run(token, id, Date.now());
    return json(res, 200, { ok: true, user: { id, username, role } }, { 'Set-Cookie': `sid=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=2592000` });
  }
  if (p === '/api/login' && method === 'POST') {
    if (limited('log:' + req.socket.remoteAddress, 20, 600000)) return json(res, 429, { erreur: 'Trop de tentatives, réessaie dans quelques minutes.' });
    const { username, password } = await readJson(req);
    const u = q.userByName.get(String(username || ''));
    const ok = u && crypto.timingSafeEqual(Buffer.from(hashPw(String(password || ''), u.salt), 'hex'), Buffer.from(u.hash, 'hex'));
    if (!ok) return json(res, 401, { erreur: 'Identifiants incorrects.' });
    const token = crypto.randomBytes(32).toString('hex'); q.insSession.run(token, u.id, Date.now());
    return json(res, 200, { ok: true, user: { id: u.id, username: u.username, role: u.role } }, { 'Set-Cookie': `sid=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=2592000` });
  }
  if (p === '/api/logout' && method === 'POST') {
    const t = parseCookies(req).sid; if (t) q.delSession.run(t);
    return json(res, 200, { ok: true }, { 'Set-Cookie': 'sid=; HttpOnly; Path=/; Max-Age=0' });
  }
  if (p === '/api/me') {
    if (!user) return json(res, 200, { user: null });
    const s = userStats(user.id);
    return json(res, 200, { user, points: s.points, level: s.level, streak: s.streak });
  }

  if (p === '/api/parcours') {
    const s = user ? userStats(user.id) : null;
    return json(res, 200, {
      paths: PATHS.map(pa => ({
        ...pa, done: !!s && s.validated.has(pa.id), eligible: !!s && s.pathsDone.includes(pa.id) && !s.validated.has(pa.id),
        rooms: pa.rooms.map(id => { const r = ROOMS[id]; const solved = s ? (s.byRoom[id] || []).length : 0;
          return { id, title: r.title, level: r.level, min: r.min, icon: r.icon, desc: r.desc, qcount: roomQCount(r), solved, points: roomPoints(r), lab: !!r.lab, terminal: !!r.terminal }; })
      }))
    });
  }
  let m = p.match(/^\/api\/room\/([\w-]+)$/);
  if (m) {
    const r = ROOMS[m[1]]; if (!r) return json(res, 404, { erreur: 'Room introuvable' });
    const s = user ? userStats(user.id) : null;
    return json(res, 200, { room: publicRoom(m[1], r), solved: s ? s.byRoom[m[1]] || [] : [] });
  }
  if (p === '/api/answer' && method === 'POST') {
    if (!need()) return;
    if (limited('ans:' + user.id, 60, 60000)) return json(res, 429, { erreur: 'Doucement ! Attends quelques secondes.' });
    const { room, qid, answer } = await readJson(req);
    const r = ROOMS[room]; let found = null;
    if (r) for (const t of r.tasks) for (const x of t.questions) if (x.id === qid) found = x;
    if (!found) return json(res, 404, { erreur: 'Question introuvable' });
    if (!found.a.map(norm).includes(norm(answer))) return json(res, 200, { correct: false });
    const res2 = q.insProg.run(user.id, room, qid, found.pts, Date.now());
    const s = userStats(user.id);
    if (res2.changes) broadcast('progress', { user: user.username });
    return json(res, 200, { correct: true, points: res2.changes ? found.pts : 0, already: !res2.changes, roomDone: (s.byRoom[room] || []).length >= roomQCount(r), total: s.points });
  }
  if (p === '/api/hint' && method === 'POST') {
    if (!need()) return;
    const { room, qid } = await readJson(req);
    const r = ROOMS[room]; let found = null;
    if (r) for (const t of r.tasks) for (const x of t.questions) if (x.id === qid) found = x;
    if (!found) return json(res, 404, { erreur: 'Question introuvable' });
    if (!found.hint) return json(res, 400, { erreur: "Pas d'indice pour cette question." });
    const dejaResolue = q.progOf.all(user.id).some(p => p.room_id === room && p.qid === qid);
    if (dejaResolue) return json(res, 200, { hint: found.hint, cost: 0, charged: false });
    const dejaDemande = q.hintUsed.get(user.id, room, qid);
    if (dejaDemande) return json(res, 200, { hint: found.hint, cost: HINT_COST, charged: false });
    q.insHint.run(user.id, room, qid, HINT_COST, Date.now());
    const s = userStats(user.id);
    return json(res, 200, { hint: found.hint, cost: HINT_COST, charged: true, total: s.points });
  }

  const ctfWindow = () => {
    const s = q.getSetting.get('ctf_start')?.value, e = q.getSetting.get('ctf_end')?.value;
    if (!s && !e) return { start: null, end: null, status: 'libre' };
    const now = Date.now(), st = s ? Number(s) : null, en = e ? Number(e) : null;
    const status = st && now < st ? 'avant' : en && now > en ? 'termine' : 'en_cours';
    return { start: st, end: en, status };
  };
  if (p === '/api/ctf') {
    const counts = Object.fromEntries(q.ctfCount.all().map(x => [x.chal_id, x.n]));
    const mine = user ? Object.fromEntries(q.ctfOf.all(user.id).map(x => [x.chal_id, x])) : {};
    return json(res, 200, { challenges: allCtf().map(c => ({ id: c.id, cat: c.cat, title: c.title, desc: c.desc, points: ctfValue(c, counts[c.id] || 0), solves: counts[c.id] || 0, solved: !!mine[c.id], code: c.code || null })), window: ctfWindow() });
  }
  if (p === '/api/admin/ctf-window') {
    if (!need()) return; if (!['formateur', 'admin'].includes(user.role)) return json(res, 403, { erreur: 'Réservé aux formateurs et administrateurs.' });
    if (method === 'POST') {
      const { start, end } = await readJson(req);
      if (start) q.setSetting.run('ctf_start', String(new Date(start).getTime())); else q.delSetting.run('ctf_start');
      if (end) q.setSetting.run('ctf_end', String(new Date(end).getTime())); else q.delSetting.run('ctf_end');
      return json(res, 200, { ok: true, window: ctfWindow() });
    }
    return json(res, 200, { window: ctfWindow() });
  }
  if (p === '/api/ctf/submit' && method === 'POST') {
    if (!need()) return;
    const win = ctfWindow();
    if (win.status === 'avant') return json(res, 403, { erreur: 'La compétition CTF n\'a pas encore commencé.' });
    if (win.status === 'termine') return json(res, 403, { erreur: 'La compétition CTF est terminée.' });
    if (limited('ctf:' + user.id, 40, 60000)) return json(res, 429, { erreur: 'Doucement ! Attends quelques secondes.' });
    const { id, flag } = await readJson(req);
    const c = allCtf().find(x => x.id === id); if (!c) return json(res, 404, { erreur: 'Challenge introuvable' });
    if (norm(flag) !== norm(c.flag)) return json(res, 200, { correct: false });
    const n = q.ctfCountOne.get(c.id).n;
    const pts = ctfValue(c, n), first = n === 0 ? 1 : 0;
    const r = q.insCtf.run(user.id, c.id, pts, Date.now(), first);
    if (r.changes) broadcast('solve', { user: user.username, challenge: c.title, first: !!first });
    return json(res, 200, { correct: true, already: !r.changes, points: r.changes ? pts : 0, first: !!first && !!r.changes });
  }

  if (p === '/api/run-code' && method === 'POST') {
    if (!need()) return;
    if (limited('run:' + user.id, 10, 60000)) return json(res, 429, { erreur: "Trop d'exécutions en une minute, patiente un peu." });
    const { lang, code } = await readJson(req);
    if (!['python', 'bash'].includes(lang)) return json(res, 400, { erreur: 'Langage non supporté.' });
    const r = await runCode(lang, String(code || ''), { SMITH_BASE: `http://localhost:${PORT}` });
    return json(res, 200, r);
  }

  if (p === '/api/avis' && method === 'GET') {
    const all = q.avisAll.all();
    const moyenne = all.length ? Math.round(all.reduce((s, a) => s + a.note, 0) / all.length * 10) / 10 : null;
    return json(res, 200, { avis: all, moyenne, total: all.length });
  }
  if (p === '/api/avis' && method === 'POST') {
    if (!need()) return;
    const { note, commentaire } = await readJson(req);
    const n = Number(note);
    if (!Number.isInteger(n) || n < 1 || n > 5) return json(res, 400, { erreur: 'Note : un nombre entier de 1 à 5.' });
    const c = String(commentaire || '').trim();
    if (c.length < 3 || c.length > 500) return json(res, 400, { erreur: 'Commentaire : 3 à 500 caractères.' });
    q.avisSet.run(user.id, n, c, Date.now());
    return json(res, 200, { ok: true });
  }

  if (p === '/api/classement') return json(res, 200, { board: q.board.all(), teams: q.teamsBoard.all(), me: user ? user.id : null });
  if (p === '/api/profil') {
    if (!need()) return;
    const s = userStats(user.id), u = q.userById.get(user.id);
    return json(res, 200, { user: u, ...s, paths: PATHS.map(x => ({ id: x.id, title: x.title, icon: x.icon, done: s.validated.has(x.id), eligible: s.pathsDone.includes(x.id) && !s.validated.has(x.id) })), roomsTotal: Object.keys(ROOMS).length });
  }
  if (p === '/api/events') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
    res.write('retry: 3000\n\n'); clients.add(res); req.on('close', () => clients.delete(res)); return;
  }

  // ----- Équipes -----
  const teamInfo = id => { const t = q.teamById.get(id); if (!t) return null; const members = q.teamMembers.all(id); return { id: t.id, name: t.name, code: t.code, members, points: members.reduce((a, m) => a + m.points, 0), owner: t.owner_id === user.id }; };
  if (p === '/api/team' && method === 'GET') {
    if (!need()) return; const tid = q.userTeam.get(user.id)?.team_id;
    return json(res, 200, { team: tid ? teamInfo(tid) : null });
  }
  if (p === '/api/team/create' && method === 'POST') {
    if (!need()) return;
    if (q.userTeam.get(user.id)?.team_id) return json(res, 400, { erreur: 'Tu fais déjà partie d\'une équipe.' });
    const name = String((await readJson(req)).name || '').trim();
    if (!/^[\p{L}\p{N} _.-]{3,24}$/u.test(name)) return json(res, 400, { erreur: "Nom d'équipe : 3 à 24 caractères (lettres, chiffres, espaces, _ . -)." });
    if (q.teamByName.get(name)) return json(res, 409, { erreur: 'Ce nom d\'équipe est déjà pris.' });
    const code = crypto.randomBytes(4).toString('hex').slice(0, 6).toUpperCase();
    const id = Number(q.insTeam.run(name, code, user.id, Date.now()).lastInsertRowid);
    q.setTeam.run(id, user.id); return json(res, 200, { ok: true });
  }
  if (p === '/api/team/join' && method === 'POST') {
    if (!need()) return;
    if (q.userTeam.get(user.id)?.team_id) return json(res, 400, { erreur: 'Tu fais déjà partie d\'une équipe.' });
    const t = q.teamByCode.get(String((await readJson(req)).code || '').trim().toUpperCase());
    if (!t) return json(res, 404, { erreur: "Code d'invitation inconnu." });
    if (q.teamCount.get(t.id).n >= 10) return json(res, 400, { erreur: 'Cette équipe est complète (10 membres maximum).' });
    q.setTeam.run(t.id, user.id); return json(res, 200, { ok: true });
  }
  if (p === '/api/team/leave' && method === 'POST') {
    if (!need()) return; const tid = q.userTeam.get(user.id)?.team_id;
    if (tid) { q.setTeam.run(null, user.id); if (q.teamCount.get(tid).n === 0) q.delTeam.run(tid); }
    return json(res, 200, { ok: true });
  }

  if (p === '/api/certificat') {
    if (!need()) return;
    const pathId = url.searchParams.get('path');
    const pa = PATHS.find(x => x.id === pathId); if (!pa) return json(res, 404, { erreur: 'Parcours introuvable' });
    if (!q.certValidated.get(user.id, pathId)) return json(res, 403, { erreur: 'Ce certificat doit encore être validé par un formateur.' });
    return json(res, 200, { ok: true, title: pa.title, username: user.username });
  }

  // ----- Validation des certificats par le formateur / admin -----
  if (p === '/api/admin/certificats') {
    if (!need()) return; if (!['formateur', 'admin'].includes(user.role)) return json(res, 403, { erreur: 'Réservé aux formateurs et administrateurs.' });
    if (method === 'GET') {
      const rows = q.pendingCerts.all(user.id);
      const list = [];
      for (const r of rows) { const s = userStats(r.user_id); for (const pid of s.pathsDone) if (!s.validated.has(pid)) list.push({ user_id: r.user_id, username: r.username, path_id: pid, path_title: (PATHS.find(x => x.id === pid) || {}).title || pid }); }
      return json(res, 200, { pending: list });
    }
    if (method === 'POST') {
      const { user_id, path_id } = await readJson(req);
      if (!PATHS.find(x => x.id === path_id)) return json(res, 400, { erreur: 'Parcours inconnu.' });
      const s = userStats(Number(user_id));
      if (!s.pathsDone.includes(path_id)) return json(res, 400, { erreur: "Ce parcours n'est pas terminé par cet utilisateur." });
      q.insCertValidation.run(Number(user_id), path_id, user.id, Date.now());
      return json(res, 200, { ok: true });
    }
  }

  if (p === '/api/admin/users') {
    if (!need()) return; if (!['formateur', 'admin'].includes(user.role)) return json(res, 403, { erreur: 'Réservé aux formateurs et administrateurs.' });
    if (method === 'POST') {
      if (user.role !== 'admin') return json(res, 403, { erreur: 'Seul un administrateur peut changer les rôles.' });
      const { id, role } = await readJson(req);
      if (!['eleve', 'formateur', 'admin'].includes(role) || id === user.id) return json(res, 400, { erreur: 'Changement refusé.' });
      q.setRole.run(role, Number(id)); return json(res, 200, { ok: true });
    }
    return json(res, 200, { users: q.adminUsers.all(), roomsTotal: Object.keys(ROOMS).length });
  }
  if (p.startsWith('/api/admin/challenges')) {
    if (!need()) return; if (!['formateur', 'admin'].includes(user.role)) return json(res, 403, { erreur: 'Réservé aux formateurs et administrateurs.' });
    if (p === '/api/admin/challenges' && method === 'GET' && url.searchParams.get('id')) {
      const c = q.customOne.get(url.searchParams.get('id')); if (!c) return json(res, 404, { erreur: 'Challenge introuvable' });
      return json(res, 200, { challenge: c });
    }
    if (p === '/api/admin/challenges' && method === 'GET') {
      const counts = Object.fromEntries(q.ctfCount.all().map(x => [x.chal_id, x.n]));
      return json(res, 200, { challenges: q.customAll.all().map(r => ({ id: r.id, cat: r.cat, title: r.title, base: r.base, flag: r.flag, descr: r.descr, code_lang: r.code_lang, code_starter: r.code_starter, solves: counts[r.id] || 0 })) });
    }
    if (p === '/api/admin/challenges' && method === 'POST') {
      const b = await readJson(req);
      const title = String(b.title || '').trim(), desc = String(b.desc || '').trim(), flag = String(b.flag || '').trim(), base = Number(b.base);
      if (title.length < 3 || title.length > 60) return json(res, 400, { erreur: 'Titre : 3 à 60 caractères.' });
      if (!['web', 'crypto', 'forensique', 'reseau', 'divers'].includes(b.cat)) return json(res, 400, { erreur: 'Catégorie invalide.' });
      if (!Number.isInteger(base) || base < 50 || base > 500) return json(res, 400, { erreur: 'Points : un nombre entier entre 50 et 500.' });
      if (!flag || flag.length > 200) return json(res, 400, { erreur: 'Flag : 1 à 200 caractères.' });
      if (desc.length < 5 || desc.length > 2000) return json(res, 400, { erreur: 'Énoncé : 5 à 2000 caractères.' });
      const codeLang = ['python', 'bash'].includes(b.code_lang) ? b.code_lang : null;
      const codeStarter = codeLang ? String(b.code_starter || '').slice(0, 4000) : null;
      const id = 'c-' + crypto.randomBytes(4).toString('hex');
      q.insCustom.run(id, b.cat, title, escHtml(desc), base, flag, user.id, Date.now(), codeLang, codeStarter);
      broadcast('newchal', { title });
      return json(res, 200, { ok: true, id });
    }
    if (p === '/api/admin/challenges/update' && method === 'POST') {
      const b = await readJson(req);
      const existing = q.customOne.get(String(b.id || '')); if (!existing) return json(res, 404, { erreur: 'Challenge introuvable' });
      const title = String(b.title || '').trim(), desc = String(b.desc || '').trim(), flag = String(b.flag || '').trim(), base = Number(b.base);
      if (title.length < 3 || title.length > 60) return json(res, 400, { erreur: 'Titre : 3 à 60 caractères.' });
      if (!['web', 'crypto', 'forensique', 'reseau', 'divers'].includes(b.cat)) return json(res, 400, { erreur: 'Catégorie invalide.' });
      if (!Number.isInteger(base) || base < 50 || base > 500) return json(res, 400, { erreur: 'Points : un nombre entier entre 50 et 500.' });
      if (!flag || flag.length > 200) return json(res, 400, { erreur: 'Flag : 1 à 200 caractères.' });
      if (desc.length < 5 || desc.length > 2000) return json(res, 400, { erreur: 'Énoncé : 5 à 2000 caractères.' });
      const codeLang = ['python', 'bash'].includes(b.code_lang) ? b.code_lang : null;
      const codeStarter = codeLang ? String(b.code_starter || '').slice(0, 4000) : null;
      q.updCustom.run(b.cat, title, escHtml(desc), base, flag, codeLang, codeStarter, String(b.id));
      return json(res, 200, { ok: true });
    }
    if (p === '/api/admin/challenges/delete' && method === 'POST') {
      const { id } = await readJson(req); const r = q.delCustom.run(String(id || ''));
      if (r.changes) q.delCustomSolves.run(String(id));
      return json(res, 200, { ok: true });
    }
  }

  // ----- Réinitialisation de mot de passe (formateur/admin) -----
  if (p === '/api/admin/reset-password' && method === 'POST') {
    if (!need()) return; if (!['formateur', 'admin'].includes(user.role)) return json(res, 403, { erreur: 'Réservé aux formateurs et administrateurs.' });
    const { user_id, new_password } = await readJson(req);
    const target = q.userById.get(Number(user_id)); if (!target) return json(res, 404, { erreur: 'Utilisateur introuvable.' });
    if (user.role !== 'admin' && target.role !== 'eleve') return json(res, 403, { erreur: "Un formateur ne peut réinitialiser que le mot de passe d'un élève." });
    if (typeof new_password !== 'string' || new_password.length < 6) return json(res, 400, { erreur: 'Nouveau mot de passe : 6 caractères minimum.' });
    const salt = crypto.randomBytes(16).toString('hex');
    q.setHash.run(salt, hashPw(new_password, salt), target.id);
    return json(res, 200, { ok: true });
  }

  // ----- Historique / journal d'activité -----
  if (p === '/api/historique') {
    if (!need()) return;
    const targetId = url.searchParams.get('user_id') ? Number(url.searchParams.get('user_id')) : user.id;
    if (targetId !== user.id && !['formateur', 'admin'].includes(user.role)) return json(res, 403, { erreur: 'Accès refusé.' });
    const target = q.userById.get(targetId); if (!target) return json(res, 404, { erreur: 'Utilisateur introuvable.' });
    const rows = q.historique.all(targetId, targetId);
    const all = allCtf();
    const events = rows.map(r => {
      if (r.type === 'room') {
        const room = ROOMS[r.ref];
        const qText = room ? (room.tasks.flatMap(t => t.questions).find(x => x.id === r.detail) || {}).q : null;
        return { type: 'room', title: room ? room.title : r.ref, detail: qText || r.detail, points: r.points, at: r.solved_at };
      }
      const c = all.find(x => x.id === r.ref);
      return { type: 'ctf', title: c ? c.title : r.ref, detail: r.detail === 'first_blood' ? 'First blood' : null, points: r.points, at: r.solved_at };
    });
    return json(res, 200, { username: target.username, events });
  }

  // ----- Détection de similarités suspectes (même question/flag résolu à quelques secondes d'écart) -----
  if (p === '/api/admin/triche') {
    if (!need()) return; if (!['formateur', 'admin'].includes(user.role)) return json(res, 403, { erreur: 'Réservé aux formateurs et administrateurs.' });
    const SEUIL_S = 90;
    const rows = q.allSolvesOrdered.all();
    const all = allCtf();
    const userNames = Object.fromEntries(q.adminUsers.all().map(u => [u.id, u.username]));
    const matches = [];
    for (let i = 1; i < rows.length; i++) {
      const a = rows[i - 1], b = rows[i];
      if (a.type !== b.type || a.ref !== b.ref || a.user_id === b.user_id) continue;
      const diff = (b.solved_at - a.solved_at) / 1000;
      if (diff < 0 || diff > SEUIL_S) continue;
      const title = a.type === 'room' ? (ROOMS[a.ref] ? ROOMS[a.ref].title + ' — ' + ((ROOMS[a.ref].tasks.flatMap(t => t.questions).find(x => x.id === a.detail) || {}).q || a.detail) : a.ref)
        : (all.find(x => x.id === a.ref) || {}).title || a.ref;
      matches.push({ type: a.type, title, user_a: userNames[a.user_id] || '?', user_b: userNames[b.user_id] || '?', seconds: Math.round(diff), at: b.solved_at });
    }
    matches.sort((x, y) => y.at - x.at);
    return json(res, 200, { threshold_seconds: SEUIL_S, matches: matches.slice(0, 100) });
  }
  return json(res, 404, { erreur: 'Route inconnue' });
}

// ---------- Fichiers statiques et pages CTF web ----------
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.json': 'application/json' };
function ctfWeb(req, res, p) {
  if (p === '/robots.txt') { res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('User-agent: *\nDisallow: /archives-secretes-7731\n'); return true; }
  if (p === '/archives-secretes-7731') { res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Zone confidentielle.\nFlag : SEH{robots_txt_trop_bavard}\n'); return true; }
  if (p === '/ctf/page') { res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); res.end('<!doctype html><meta charset="utf-8"><title>Page ordinaire</title><h1>Rien à voir ici</h1><p>Circulez.</p>\n<!-- TODO: supprimer avant mise en ligne. SEH{commentaire_html_oublie} -->'); return true; }
  if (p === '/ctf/cookie') { res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Set-Cookie': 'menu=' + Buffer.from('SEH{cookie_decode_avec_succes}').toString('base64') + '; Path=/' }); res.end('<!doctype html><meta charset="utf-8"><h1>Un cookie a été posé.</h1><p>Regarde dans les outils du navigateur.</p>'); return true; }
  if (p === '/ctf/panneau') {
    if (req.method !== 'PUT') { res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8', Allow: 'PUT' }); return res.end("Méthode non autorisée.\nRegarde l'en-tête 'Allow' de cette réponse (curl.exe -i) : une seule méthode HTTP est acceptée ici."); }
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('Accès autorisé.\nFlag : SEH{methode_put_autorisee}');
  }
  if (p === '/ctf/navigateur') {
    const ua = req.headers['user-agent'] || '';
    if (!ua.startsWith('ClubInfo706/1.0')) { res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end("Accès refusé : seul le navigateur 'ClubInfo706/1.0' peut entrer.\nChange ton User-Agent et réessaie."); }
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('Bienvenue, agent reconnu.\nFlag : SEH{user_agent_usurpe_ok}');
  }
  if (p === '/ctf/entete') { res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'X-SEH-Secret': 'SEH{entetes_http_revelateurs}' }); res.end('<!doctype html><meta charset="utf-8"><h1>Rien d\'affiché.</h1><p>Mais la réponse contient plus que ça.</p>'); return true; }
  return false;
}
function serveStatic(res, p) {
  let f = p === '/' ? '/index.html' : p;
  const full = path.normalize(path.join(PUBLIC_DIR, f));
  if (!full.startsWith(PUBLIC_DIR + path.sep) && full !== PUBLIC_DIR) { res.writeHead(403); return res.end('Interdit'); }
  fs.readFile(full, (err, buf) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('Page introuvable'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(full)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(buf);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (url.pathname.startsWith('/api/')) return await api(req, res, url);
    if (url.pathname.startsWith('/lab/')) { if (await handleLab(req, res, url)) return; }
    if (ctfWeb(req, res, url.pathname)) return;
    return serveStatic(res, decodeURIComponent(url.pathname));
  } catch (e) {
    if (res.headersSent) return;
    if (e.message === 'JSON invalide' || e.message === 'trop gros') json(res, 400, { erreur: 'Requête invalide.' });
    else json(res, 500, { erreur: 'Erreur serveur : ' + e.message });
  }
});
setInterval(() => { for (const c of clients) c.write(': ping\n\n'); }, 25000);

server.on('error', e => {
  if (e.code === 'EADDRINUSE') console.log(`\n  ERREUR : le port ${PORT} est deja utilise. Ferme l'autre fenetre du serveur, ou lance avec un autre port (voir GUIDE_WINDOWS.md).\n`);
  else console.log('\n  ERREUR : ' + e.message + '\n');
  process.exit(1);
});
server.listen(PORT, '0.0.0.0', () => {
  console.log('\n  CyberLab est demarre.\n');
  console.log(`  Sur cet ordinateur : http://localhost:${PORT}`);
  for (const list of Object.values(os.networkInterfaces()))
    for (const i of list || []) if (i.family === 'IPv4' && !i.internal) console.log(`  Pour les autres (meme Wi-Fi ou reseau) : http://${i.address}:${PORT}`);
  console.log('\n  Le premier compte cree devient le compte administrateur.');
  console.log('  Pour arreter : Ctrl + C\n');
});

'use strict';
// Exécute du code réel (Python ou Bash) dans un sous-processus isolé.
// AVERTISSEMENT : ce n'est PAS un bac à sable sécurisé (pas de Docker, pas de VM).
// Limites appliquées : délai maximum, taille de sortie limitée, dossier temporaire jetable.
// À utiliser uniquement sur un réseau local, avec des participants de confiance.
const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');

const TIMEOUT_MS = 8000;
const MAX_OUTPUT = 12000; // caractères
const RUNNERS = {
  python: { candidates: ['python3', 'python'], file: 'script.py', args: f => [f] },
  bash: { candidates: ['bash'], file: 'script.sh', args: f => [f] }
};

// mémorise le premier exécutable trouvé pour chaque langage (évite de re-tester à chaque appel)
const resolved = {};
function tryExec(cmd, args) {
  return new Promise(resolve => {
    const p = spawn(cmd, args, { stdio: 'ignore' });
    p.on('error', () => resolve(false));
    p.on('exit', code => resolve(code === 0 || code === null));
  });
}
async function resolveRunner(lang) {
  if (resolved[lang] !== undefined) return resolved[lang];
  const cfg = RUNNERS[lang];
  if (!cfg) return (resolved[lang] = null);
  for (const cmd of cfg.candidates) {
    const ok = await tryExec(cmd, ['--version']);
    if (ok) return (resolved[lang] = cmd);
  }
  return (resolved[lang] = null);
}

async function runCode(lang, code, env = {}) {
  const cfg = RUNNERS[lang];
  if (!cfg) return { ok: false, erreur: 'Langage non supporté.' };
  const cmd = await resolveRunner(lang);
  if (!cmd) return { ok: false, erreur: lang === 'python' ? "Python n'est pas installé sur le serveur (ou introuvable dans le PATH). Installe Python 3 sur le PC qui héberge la plateforme." : "Bash n'est pas disponible sur le serveur (sous Windows, il faut Git Bash ou WSL dans le PATH)." };
  if (typeof code !== 'string' || code.length > 20000) return { ok: false, erreur: 'Code vide ou trop long (20 000 caractères maximum).' };

  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'smith-code-' + crypto.randomBytes(6).toString('hex') + '-'));
  const file = path.join(dir, cfg.file);
  fs.writeFileSync(file, code, 'utf8');

  return new Promise(resolve => {
    let out = '', err = '', done = false;
    const finish = result => { if (done) return; done = true; try { fs.rmSync(dir, { recursive: true, force: true }); } catch {} resolve(result); };
    let child;
    try {
      child = spawn(cmd, cfg.args(file), { cwd: dir, stdio: ['ignore', 'pipe', 'pipe'], env: { ...process.env, ...env } });
    } catch (e) {
      return finish({ ok: false, erreur: 'Impossible de lancer ' + lang + ' : ' + e.message });
    }
    const timer = setTimeout(() => { try { child.kill('SIGKILL'); } catch {} finish({ ok: true, stdout: out.slice(0, MAX_OUTPUT), stderr: err.slice(0, MAX_OUTPUT), timedOut: true, code: null }); }, TIMEOUT_MS);
    child.stdout.on('data', d => { if (out.length < MAX_OUTPUT) out += d.toString(); });
    child.stderr.on('data', d => { if (err.length < MAX_OUTPUT) err += d.toString(); });
    child.on('error', e => { clearTimeout(timer); finish({ ok: false, erreur: 'Erreur : ' + e.message }); });
    child.on('exit', code => { clearTimeout(timer); finish({ ok: true, stdout: out.slice(0, MAX_OUTPUT), stderr: err.slice(0, MAX_OUTPUT), timedOut: false, code }); });
  });
}

module.exports = { runCode, resolveRunner };

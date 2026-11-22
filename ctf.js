'use strict';
const caesar = (s, n) => s.replace(/[a-z]/g, c => String.fromCharCode((c.charCodeAt(0) - 97 + n) % 26 + 97));
const rot13 = s => caesar(s, 13);
const b64 = s => Buffer.from(s).toString('base64');
const hex = s => Buffer.from(s).toString('hex');
const rotAll = s => s.replace(/[a-zA-Z]/g, c => { const b = c <= 'Z' ? 65 : 97; return String.fromCharCode((c.charCodeAt(0) - b + 13) % 26 + b); });
const vig = (txt, key) => { let k = 0; return txt.replace(/[a-z]/g, c => String.fromCharCode((c.charCodeAt(0) - 97 + key.charCodeAt(k++ % key.length) - 97) % 26 + 97)); };
const xorHex = (s, key) => [...Buffer.from(s)].map(b => (b ^ key).toString(16).padStart(2, '0')).join('');

module.exports.CTF = [
  { id: 'cesar', cat: 'crypto', title: 'Le message de César', base: 100,
    desc: `Un message a été intercepté : <code>${caesar('seh{cesar_cest_facile}', 3)}</code><br>Il a été décalé de 3 lettres. À toi de retrouver le flag.`,
    flag: 'seh{cesar_cest_facile}' },
  { id: 'base64', cat: 'crypto', title: "Ce n'est pas du chiffrement", base: 100,
    desc: `Un développeur pense avoir « chiffré » le flag : <code>${b64('SEH{base64_nest_pas_secret}')}</code>`,
    flag: 'SEH{base64_nest_pas_secret}' },
  { id: 'hex', cat: 'crypto', title: 'Hexagone', base: 100,
    desc: `Convertis ces octets en texte : <code>${hex('SEH{hex_en_clair}')}</code>`,
    flag: 'SEH{hex_en_clair}' },
  { id: 'rot13', cat: 'crypto', title: 'Deux fois la même chose', base: 150,
    desc: `Applique la même opération deux fois et tu reviens au départ : <code>${rot13('seh{rot13_deux_fois}')}</code>`,
    flag: 'seh{rot13_deux_fois}' },
  { id: 'robot', cat: 'web', title: 'Le robot indiscret', base: 150,
    desc: "Les moteurs de recherche lisent un fichier spécial à la racine du site. Il parle parfois de pages que l'on aimerait cacher. Le site, c'est cette plateforme.",
    flag: 'SEH{robots_txt_trop_bavard}' },
  { id: 'commentaire', cat: 'web', title: 'Commentaire oublié', base: 100,
    desc: 'Un développeur a laissé une note dans le code source de <a href="/ctf/page" target="_blank">cette page</a>. Affiche le code source (Ctrl+U).',
    flag: 'SEH{commentaire_html_oublie}' },
  { id: 'cookie', cat: 'web', title: 'Cookie gourmand', base: 200,
    desc: 'Visite <a href="/ctf/cookie" target="_blank">cette page</a>, puis regarde les cookies dans les outils du navigateur (F12, onglet Application ou Stockage). La valeur est encodée.',
    flag: 'SEH{cookie_decode_avec_succes}' },
  { id: 'entete', cat: 'web', title: 'En-tête secret', base: 200,
    desc: "La réponse de <a href=\"/ctf/entete\" target=\"_blank\">cette page</a> cache quelque chose qu'on ne voit pas à l'écran. Ouvre F12, onglet Réseau, et lis les en-têtes de réponse.",
    flag: 'SEH{entetes_http_revelateurs}' },
  { id: 'chaine', cat: 'crypto', title: 'Trois couches', base: 250,
    desc: `Un message a subi trois transformations, dans cet ordre : ROT13, puis conversion en hexadécimal, puis Base64. Voici le résultat final :<br><code>${b64(hex(rotAll('SEH{trois_couches_decodees}')))}</code><br>Remonte la chaîne à l'envers.`,
    flag: 'SEH{trois_couches_decodees}' },
  { id: 'vigenere', cat: 'crypto', title: 'Le chiffre de Vigenère', base: 300,
    desc: `Le message ci-dessous est chiffré avec Vigenère. La clé est le <b>deuxième mot</b> du nom de la plateforme (Smith Élite Hacker), en minuscules et sans accent. Seules les lettres sont chiffrées.<br><code>${vig('seh{vigenere_sans_la_cle}', 'elite')}</code>`,
    flag: 'seh{vigenere_sans_la_cle}' },
  { id: 'xor', cat: 'crypto', title: 'XOR à clé unique', base: 350,
    desc: `Chaque octet du flag a été combiné (XOR) avec un même nombre entre 0 et 255. Voici les octets en hexadécimal :<br><code>${xorHex('SEH{xor_force_brute_256}', 90)}</code><br>Il n'y a que 256 clés possibles : écris un petit script ou utilise un outil en ligne.`,
    flag: 'SEH{xor_force_brute_256}' },
  { id: 'verbe', cat: 'web', title: 'Le bon verbe', base: 300,
    desc: 'Cette page refuse ta requête : <a href="/ctf/panneau" target="_blank">/ctf/panneau</a>. Lis bien la réponse (code et en-têtes) puis refais la requête autrement. Sous Windows, dans <code>cmd</code> : <code>curl.exe -i -X METHODE http://localhost:3000/ctf/panneau</code>',
    flag: 'SEH{methode_put_autorisee}' },
  { id: 'agent', cat: 'web', title: 'Navigateur exclusif', base: 350,
    desc: 'Ce site n\'accepte qu\'un navigateur très particulier : <a href="/ctf/navigateur" target="_blank">/ctf/navigateur</a>. Lis le message, puis change ton « User-Agent ». Exemple : <code>curl.exe -A "NOM/VERSION" http://localhost:3000/ctf/navigateur</code>',
    flag: 'SEH{user_agent_usurpe_ok}' }
];

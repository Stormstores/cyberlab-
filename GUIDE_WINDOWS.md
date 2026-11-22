# CyberLab — Guide Windows

Plateforme d'apprentissage du hacking éthique en français : 12 rooms en 3 parcours, 4 labs vulnérables, 8 challenges CTF en direct, classement, badges, certificats et espace formateur.

Aucune installation de base de données, aucun Docker, aucune commande `npm install`. Le projet n'utilise que Node.js.

---

## 0. Ateliers de code réel (Python)

4 rooms contiennent un éditeur où tu écris du **vrai code Python**, exécuté réellement par le serveur (attaque par dictionnaire, automatisation d'une injection SQL, analyse de journal, extraction UNION).

**Ça demande Python 3 installé sur le PC qui héberge la plateforme** (en plus de Node.js) : télécharge-le sur https://python.org (coche « Add python.exe to PATH » pendant l'installation). Sans Python installé, ces ateliers affichent un message clair au lieu de planter.

**Important, à lire avant d'utiliser ces ateliers en classe :** ce n'est **pas un bac à sable sécurisé** (pas de Docker, pas de machine virtuelle). Le code tourne directement sur le PC de l'administrateur, avec un délai maximum de 8 secondes et une sortie limitée, mais sans isolation complète. À n'utiliser que sur un réseau fermé, avec des participants de confiance — jamais exposé sur Internet. Si tu veux une sécurité supplémentaire, lance `DEMARRER.bat` depuis un compte Windows standard (non administrateur).

## 1. Démarrer en 3 étapes

### Étape 1 : installer Node.js (une seule fois)

1. Va sur https://nodejs.org et télécharge la version **LTS** (22 ou plus récente).
2. Lance l'installeur et clique sur « Suivant » jusqu'à la fin.
3. Vérifie : ouvre **Windows + R**, tape `cmd`, puis :

```
node -v
```

Tu dois voir un numéro `v22.13.0` ou plus.

### Étape 2 : lancer la plateforme

1. Décompresse le dossier `smith-elite-hacker` (clic droit, « Extraire tout »).
2. Double-clique sur **`DEMARRER.bat`**.
3. Une fenêtre noire s'ouvre et affiche :

```
CyberLab est demarre.
Sur cet ordinateur : http://localhost:3000
Pour les autres (meme Wi-Fi ou reseau) : http://192.168.1.25:3000
```

Laisse cette fenêtre ouverte tant que la plateforme est utilisée.

### Étape 3 : ouvrir le site

Dans Chrome, Edge ou Firefox, va sur **http://localhost:3000**.

Le **premier compte créé devient le compte administrateur** (il voit l'onglet « Formateur »). Crée donc ton compte en premier.

---

## 2. Utiliser avec plusieurs personnes (salle de classe)

```
        ┌──────────────────────────┐
        │  PC du formateur         │
        │  DEMARRER.bat (serveur)  │
        │  http://192.168.1.25:3000│
        └────────────┬─────────────┘
                     │  même Wi-Fi ou même réseau
     ┌───────────────┼───────────────┐
┌────▼────┐     ┌────▼────┐     ┌────▼────┐
│ Élève 1 │     │ Élève 2 │     │ Élève 3 │
│ navigat.│     │ navigat.│     │ navigat.│
└─────────┘     └─────────┘     └─────────┘
```

1. Le PC qui lance `DEMARRER.bat` est le **serveur**. Note l'adresse « Pour les autres » affichée dans la fenêtre.
2. Les autres PC et téléphones, **connectés au même Wi-Fi ou réseau**, ouvrent cette adresse dans leur navigateur.
3. La première fois, Windows demande d'autoriser Node.js dans le pare-feu : clique sur **Autoriser** pour les « réseaux privés ».
4. Chaque élève crée son compte. Le formateur suit tout le monde dans l'onglet **Formateur** et peut exporter un fichier CSV.

Si les autres ne peuvent pas se connecter : vérifie qu'ils sont sur le même réseau, que le pare-feu a bien autorisé Node.js, et que l'adresse tapée est celle affichée (avec `:3000`).

---

## 3. Installer sur une clé USB (sans installer Node.js sur les autres PC)

1. Télécharge **Node.js au format ZIP « Windows Binary (.zip) »** (version 22 ou plus) sur https://nodejs.org/en/download.
2. Décompresse-le, puis **renomme le dossier obtenu en `node`** et place-le dans le dossier du projet, à côté de `server.js` :

```
smith-elite-hacker\
├── node\            ← Node.js portable (contient node.exe)
├── data\            ← la base de données (créée automatiquement)
├── public\          ← le site (pages, styles, logo)
├── content\         ← les rooms et les challenges CTF
├── DEMARRER.bat
├── server.js
└── labs.js
```

3. Copie tout le dossier sur la clé USB.
4. Sur n'importe quel PC Windows : double-clique sur `DEMARRER.bat`. Le script utilise automatiquement `node\node.exe` s'il existe.

La progression est dans `data\smith.db` : copie ce fichier pour sauvegarder.

---

## 4. Comment ça marche

```
Navigateur                         Serveur Node.js (server.js)
┌──────────────┐   HTTP / JSON    ┌──────────────────────────────┐
│ public/      │ ───────────────► │ API : comptes, réponses, CTF │──► data/smith.db (SQLite)
│  index.html  │ ◄─────────────── │ Sessions (cookie sécurisé)   │
│  app.js      │   événements     │ Temps réel (SSE) : scoreboard│
│  style.css   │   en direct      ├──────────────────────────────┤
└──────────────┘                  │ labs.js : 4 labs vulnérables │──► base en mémoire isolée
                                  │ content/ : rooms + CTF       │
                                  └──────────────────────────────┘
```

| Élément | Technologie |
|---|---|
| Serveur | Node.js (module `http`), aucune dépendance |
| Base de données | SQLite intégré à Node (`node:sqlite`), un seul fichier |
| Mots de passe | Hachage scrypt avec sel aléatoire |
| Sessions | Cookie `HttpOnly`, jeton aléatoire de 256 bits |
| Temps réel | Server-Sent Events (notifications CTF et classement) |
| Interface | HTML, CSS et JavaScript pur, sans compilation |
| Terminal | Terminal simulé dans le navigateur (aucun accès au vrai système) |

---

## 5. Les 3 rôles

| Rôle | Peut faire |
|---|---|
| **Utilisateur** (élève) | Répondre aux rooms, jouer le CTF, rejoindre une équipe |
| **Formateur** | + valider les certificats, créer des challenges CTF, suivre sa classe, exporter en CSV |
| **Administrateur** | + changer le rôle de n'importe quel compte (le premier compte créé est administrateur) |

Les comptes se créent toujours par inscription libre, sur la même page que la connexion. L'administrateur promeut ensuite qui il veut au rang de formateur depuis l'onglet **Formateur**.

**Certificats :** un parcours terminé par un élève apparaît dans « Certificats à valider », dans l'onglet Formateur. Tant qu'un formateur ou l'administrateur n'a pas cliqué sur « Valider », le certificat reste verrouillé pour l'élève.

**Équipes :** chaque utilisateur peut créer ou rejoindre une équipe (par un code à 6 caractères) depuis sa page Profil. Le classement par équipes additionne les points CTF de tous les membres.

## 6. Contenu inclus

**Fondamentaux de la cybersécurité** : Bienvenue, Réseaux, Linux (terminal simulé), Mots de passe et hachage.

**Pentest Web** : HTTP, Injection SQL (lab), XSS (lab), IDOR (lab), Authentification cassée (lab).

**Réseaux et défense** : Nmap (terminal simulé), Phishing et ingénierie sociale, Cryptographie.

**CTF** : 4 challenges crypto (César, Base64, hexadécimal, ROT13) et 4 challenges web (robots.txt, commentaire HTML, cookie, en-tête HTTP). Leur valeur baisse quand ils sont résolus, et le premier à réussir gagne le « first blood ».

---

## 7. Ajouter tes propres rooms et challenges

- **Rôles** : le premier compte créé est automatiquement administrateur ; pour en créer un deuxième, inscris un compte puis promeus-le depuis l'onglet Formateur.
- **Rooms** : ouvre `content\rooms.js`. Chaque room est un objet avec ses tâches, et chaque question est écrite `Q('identifiant', 'Question ?', ['réponse acceptée'], points, 'indice')`. Écris les réponses **sans accents et en minuscules** : la plateforme ignore les accents et la casse de la saisie.
- **Parcours** : en haut du même fichier, ajoute l'identifiant de ta room dans la liste `rooms` d'un parcours.
- **CTF intégré** : ouvre `content\ctf.js` et ajoute un objet avec `id`, `cat` (`web` ou `crypto`), `title`, `base` (points), `desc` et `flag`.
- **CTF sans toucher au code** : un formateur ou l'administrateur peut aussi créer un challenge directement depuis l'onglet Formateur, sans modifier aucun fichier.
- Après une modification, ferme la fenêtre noire et relance `DEMARRER.bat`.

---

## 8. Sécurité : à lire

- Les labs sont **volontairement vulnérables**. Utilise la plateforme uniquement sur un **réseau local** (salle de classe, domicile). Ne la mets **jamais** sur Internet.
- Les labs sont isolés : le lab SQL travaille sur une base en mémoire séparée, il ne peut pas toucher aux comptes.
- Ne tape pas de mot de passe personnel important dans le formulaire d'inscription.
- N'utilise jamais ces techniques sur un système sans autorisation écrite.

---

## 9. Problèmes fréquents

| Message ou symptôme | Solution |
|---|---|
| « Node.js est introuvable » | Installe Node.js (étape 1) ou ajoute le dossier `node` portable (section 3). |
| « Votre version de Node.js est trop ancienne » | Installe Node.js 22.13 ou plus récent. |
| « le port 3000 est déjà utilisé » | Une autre fenêtre du serveur est ouverte : ferme-la. Ou lance dans `cmd` : `set PORT=3001 && node server.js` |
| La page ne s'ouvre pas | Vérifie que la fenêtre noire est toujours ouverte et tape bien `http://localhost:3000`. |
| Les autres PC ne se connectent pas | Même réseau, pare-feu autorisé, bonne adresse IP (section 2). |
| Mot de passe administrateur oublié | Ferme le serveur, lance `REINITIALISER.bat` (efface tous les comptes) puis recrée le premier compte. |
| Remise à zéro complète | Lance `REINITIALISER.bat`. |

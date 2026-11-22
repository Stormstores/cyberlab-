'use strict';
// Contenu généré : rooms et questions de Smith Élite Hacker.
module.exports = {
  "PATHS": [
    {
      "id": "fondamentaux",
      "title": "Fondamentaux de la cybersécurité",
      "color": "#5be37d",
      "icon": "🛡️",
      "desc": "Les bases pour tout comprendre : concepts, réseaux, Linux et mots de passe. Idéal pour débuter.",
      "rooms": [
        "bienvenue",
        "reseaux",
        "linux",
        "mots-de-passe"
      ]
    },
    {
      "id": "pentest-web",
      "title": "Pentest Web",
      "color": "#ffb347",
      "icon": "🕷️",
      "desc": "Attaque de vraies applications vulnérables : injection SQL, XSS, IDOR et authentification cassée.",
      "rooms": [
        "http",
        "sqli",
        "xss",
        "idor",
        "auth"
      ]
    },
    {
      "id": "reseaux-defense",
      "title": "Réseaux et défense",
      "color": "#4aa8ff",
      "icon": "📡",
      "desc": "Scanner un réseau, repérer le phishing et comprendre la cryptographie.",
      "rooms": [
        "nmap",
        "phishing",
        "crypto"
      ]
    },
    {
      "id": "offensif-avance",
      "title": "Pentest avancé",
      "color": "#ff6b6b",
      "icon": "☠️",
      "desc": "Pour ceux qui ont fini les bases : injections UNION, jetons JWT falsifiés, élévation de privilèges et analyse de logs.",
      "rooms": [
        "sqli-union",
        "jwt",
        "privesc",
        "forensic-logs"
      ]
    }
  ],
  "ROOMS": {
    "bienvenue": {
      "title": "Bienvenue dans la cybersécurité",
      "level": "Débutant",
      "min": 15,
      "icon": "👋",
      "desc": "Les grands principes et l'éthique du hacker.",
      "tasks": [
        {
          "title": "La triade CIA",
          "body": "<p>Toute la sécurité informatique repose sur trois piliers :</p>\n<ul><li><b>Confidentialité</b> : seules les personnes autorisées accèdent à l'information.</li>\n<li><b>Intégrité</b> : l'information n'est pas modifiée sans autorisation.</li>\n<li><b>Disponibilité</b> : le service est accessible quand on en a besoin.</li></ul>\n<p>Exemple : une fuite de la base d'un opérateur Mobile Money casse la confidentialité. Un virement modifié en route casse l'intégrité. Une attaque qui bloque l'application casse la disponibilité.</p>",
          "questions": [
            {
              "id": "cia-c",
              "q": "Que signifie le « C » de la triade CIA ?",
              "a": [
                "confidentialite"
              ],
              "pts": 10,
              "hint": "Elle protège les secrets."
            },
            {
              "id": "cia-i",
              "q": "Quelle propriété garantit que les données n'ont pas été modifiées ?",
              "a": [
                "integrite"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "cia-a",
              "q": "Quelle propriété garantit l'accès au service quand on en a besoin ?",
              "a": [
                "disponibilite"
              ],
              "pts": 10,
              "hint": ""
            }
          ]
        },
        {
          "title": "Les chapeaux du hacker",
          "body": "<p>On distingue les hackers par la couleur de leur « chapeau » :</p>\n<ul><li><b>Chapeau blanc</b> : agit avec autorisation pour protéger.</li>\n<li><b>Chapeau noir</b> : attaque sans autorisation, pour nuire ou gagner de l'argent.</li>\n<li><b>Chapeau gris</b> : entre les deux, sans mauvaise intention mais sans autorisation.</li></ul>\n<p>Sur cette plateforme, tu es chapeau blanc. Charte à respecter : <i>« Je n'attaque que les systèmes sur lesquels j'ai une autorisation écrite. »</i></p>\n<p>Flag de la charte : <code>SEH{bienvenue_dans_smith}</code></p>",
          "questions": [
            {
              "id": "chapeau",
              "q": "Quelle couleur de chapeau porte un hacker éthique autorisé ?",
              "a": [
                "blanc",
                "chapeau blanc",
                "white hat"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "charte",
              "q": "Recopie le flag de la charte.",
              "a": [
                "seh{bienvenue_dans_smith}"
              ],
              "pts": 20,
              "hint": ""
            }
          ]
        },
        {
          "title": "Culture cybersécurité (3)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Sur quel port fonctionne SSH par défaut ?",
              "a": [
                "22"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Sur quel port fonctionne HTTP par défaut ?",
              "a": [
                "80"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Sur quel port fonctionne HTTPS par défaut ?",
              "a": [
                "443"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Sur quel port fonctionne le DNS ?",
              "a": [
                "53"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Sur quel port fonctionne FTP (commandes) ?",
              "a": [
                "21"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Sur quel port fonctionne Telnet ?",
              "a": [
                "23"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Sur quel port fonctionne SMTP ?",
              "a": [
                "25"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Sur quel port fonctionne RDP (bureau à distance Windows) ?",
              "a": [
                "3389"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Quel protocole traduit un nom de domaine en adresse IP ?",
              "a": [
                "dns"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Quel protocole attribue automatiquement une adresse IP sur un réseau ?",
              "a": [
                "dhcp"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Combien de couches compte le modèle OSI ?",
              "a": [
                "7",
                "sept"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Quelle couche OSI gère le routage entre réseaux (numéro) ?",
              "a": [
                "3",
                "couche 3",
                "reseau"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Quel protocole de la couche transport garantit la livraison des paquets ?",
              "a": [
                "tcp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Quel protocole de la couche transport est plus rapide mais sans garantie de livraison ?",
              "a": [
                "udp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Quel est le masque réseau correspondant à la notation /24 ?",
              "a": [
                "255.255.255.0"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Combien d'adresses utilisables y a-t-il dans un réseau /24 ?",
              "a": [
                "254"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quelle commande Windows affiche la configuration réseau ?",
              "a": [
                "ipconfig"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quelle commande Linux affiche la configuration réseau (moderne) ?",
              "a": [
                "ip a",
                "ip addr",
                "ifconfig"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quel outil envoie des paquets pour tester si une machine répond ?",
              "a": [
                "ping"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Quel outil scanne les ports ouverts d'une machine ?",
              "a": [
                "nmap"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Quel protocole chiffre les connexions web (sigle) ?",
              "a": [
                "tls",
                "ssl"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Quelle adresse IP désigne toujours la machine locale ?",
              "a": [
                "127.0.0.1",
                "localhost"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Combien de bits compose une adresse IPv4 ?",
              "a": [
                "32"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Combien de bits compose une adresse IPv6 ?",
              "a": [
                "128"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Quel équipement relie plusieurs réseaux différents ?",
              "a": [
                "routeur"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Quel équipement relie des machines au sein d'un même réseau local ?",
              "a": [
                "switch",
                "commutateur"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Combien de caractères hexadécimaux compose une empreinte MD5 ?",
              "a": [
                "32"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Combien de caractères hexadécimaux compose une empreinte SHA-256 ?",
              "a": [
                "64"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Comment s'appelle la valeur aléatoire ajoutée avant de hacher un mot de passe ?",
              "a": [
                "sel",
                "salt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Quel algorithme de chiffrement asymétrique très répandu commence par R ?",
              "a": [
                "rsa"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Quel algorithme de chiffrement symétrique est aujourd'hui le standard (sigle) ?",
              "a": [
                "aes"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Le chiffrement symétrique utilise combien de clés différentes ?",
              "a": [
                "1",
                "une"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Le chiffrement asymétrique utilise combien de clés différentes ?",
              "a": [
                "2",
                "deux"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Quel encodage transforme des données en texte lisible mais n'est pas un chiffrement ?",
              "a": [
                "base64"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Dans un chiffre de César avec un décalage de 13, comment s'appelle ce cas particulier ?",
              "a": [
                "rot13"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Quelle opération binaire, appliquée deux fois avec la même clé, redonne le texte original ?",
              "a": [
                "xor"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quel protocole garantit l'authenticité et l'intégrité d'un site web via un certificat ?",
              "a": [
                "tls",
                "ssl",
                "https"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Qui délivre les certificats utilisés en HTTPS (sigle) ?",
              "a": [
                "ac",
                "autorite de certification",
                "ca"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Peut-on « déchiffrer » une empreinte de hachage pour retrouver le mot de passe original ?",
              "a": [
                "non"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Quel est le nom de l'attaque qui teste tous les mots d'une liste pour casser un mot de passe ?",
              "a": [
                "attaque par dictionnaire",
                "dictionnaire"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Quel est le nom de l'attaque qui teste toutes les combinaisons possibles ?",
              "a": [
                "force brute",
                "attaque par force brute"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Quelle table précalculée accélère la cassage de hachages non salés ?",
              "a": [
                "table arc en ciel",
                "rainbow table"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Quel sigle désigne le top 10 des failles web les plus critiques, publié régulièrement ?",
              "a": [
                "owasp top 10",
                "owasp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Quelle faille permet d'injecter du code SQL dans une requête ?",
              "a": [
                "injection sql",
                "sqli"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Quelle faille permet d'injecter du JavaScript exécuté dans le navigateur d'un autre utilisateur ?",
              "a": [
                "xss"
              ],
              "pts": 8
            }
          ]
        }
      ]
    },
    "reseaux": {
      "title": "Les bases des réseaux",
      "level": "Débutant",
      "min": 20,
      "icon": "🌐",
      "desc": "Modèle OSI, adresses IP, ports et DNS.",
      "tasks": [
        {
          "title": "Le modèle OSI et les protocoles",
          "body": "<p>Le modèle OSI découpe la communication réseau en <b>7 couches</b> (physique, liaison, réseau, transport, session, présentation, application).</p>\n<p>Quelques protocoles à connaître : <b>DNS</b> traduit <code>exemple.cm</code> en adresse IP, <b>HTTP</b> (port 80) et <b>HTTPS</b> (port 443) servent le web, <b>SSH</b> (port 22) donne un accès distant sécurisé.</p>",
          "questions": [
            {
              "id": "osi",
              "q": "Combien de couches compte le modèle OSI ?",
              "a": [
                "7",
                "sept"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "dns",
              "q": "Quel protocole traduit un nom de domaine en adresse IP ?",
              "a": [
                "dns"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "https",
              "q": "Quel port utilise HTTPS par défaut ?",
              "a": [
                "443"
              ],
              "pts": 10,
              "hint": ""
            }
          ]
        },
        {
          "title": "Adresses IP et masques",
          "body": "<p>Une adresse IPv4 comporte 4 nombres de 0 à 255, par exemple <code>192.168.1.10</code>. Le masque indique quelle partie désigne le réseau.</p>\n<p><code>255.255.255.0</code> s'écrit aussi <code>/24</code> (24 bits à 1). Il reste 8 bits pour les machines : 2⁸ = 256 adresses, dont 2 réservées (adresse du réseau et diffusion).</p>",
          "questions": [
            {
              "id": "cidr",
              "q": "Quelle notation CIDR correspond au masque 255.255.255.0 ?",
              "a": [
                "/24",
                "24"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "hotes",
              "q": "Combien de machines peut-on adresser dans un réseau /24 ?",
              "a": [
                "254"
              ],
              "pts": 15,
              "hint": "256 moins 2."
            }
          ]
        },
        {
          "title": "Culture cybersécurité (3)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Qui délivre les certificats utilisés en HTTPS (sigle) ?",
              "a": [
                "ac",
                "autorite de certification",
                "ca"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Peut-on « déchiffrer » une empreinte de hachage pour retrouver le mot de passe original ?",
              "a": [
                "non"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Quel est le nom de l'attaque qui teste tous les mots d'une liste pour casser un mot de passe ?",
              "a": [
                "attaque par dictionnaire",
                "dictionnaire"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Quel est le nom de l'attaque qui teste toutes les combinaisons possibles ?",
              "a": [
                "force brute",
                "attaque par force brute"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Quelle table précalculée accélère la cassage de hachages non salés ?",
              "a": [
                "table arc en ciel",
                "rainbow table"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Quel sigle désigne le top 10 des failles web les plus critiques, publié régulièrement ?",
              "a": [
                "owasp top 10",
                "owasp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Quelle faille permet d'injecter du code SQL dans une requête ?",
              "a": [
                "injection sql",
                "sqli"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Quelle faille permet d'injecter du JavaScript exécuté dans le navigateur d'un autre utilisateur ?",
              "a": [
                "xss"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Quel sigle désigne l'accès à un objet via son identifiant sans contrôle d'autorisation ?",
              "a": [
                "idor"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Quel sigle désigne une requête forgée qui utilise la session d'une victime à son insu ?",
              "a": [
                "csrf"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Quel en-tête HTTP de réponse crée un cookie ?",
              "a": [
                "set-cookie"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Quel attribut de cookie empêche JavaScript de le lire ?",
              "a": [
                "httponly"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Quel attribut de cookie empêche son envoi sur une connexion non chiffrée ?",
              "a": [
                "secure"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Quelle méthode HTTP sert à envoyer les données d'un formulaire ?",
              "a": [
                "post"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Quel code HTTP signifie « page introuvable » ?",
              "a": [
                "404"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Quel code HTTP signifie « accès interdit » ?",
              "a": [
                "403"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quel code HTTP signifie « succès » ?",
              "a": [
                "200"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quel code HTTP signifie « erreur interne du serveur » ?",
              "a": [
                "500"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quelles requêtes SQL séparent le code des données pour éviter les injections ?",
              "a": [
                "requetes preparees",
                "requete preparee",
                "requetes parametrees"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Quelle opération neutralise les caractères spéciaux avant affichage pour éviter le XSS ?",
              "a": [
                "echappement",
                "echapper",
                "escaping"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Quel fichier à la racine d'un site indique aux robots les pages à ne pas indexer ?",
              "a": [
                "robots.txt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Quel format de jeton d'authentification, en 3 parties séparées par des points, est très utilisé sur le web ?",
              "a": [
                "jwt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Dans un JWT, quel champ de l'en-tête indique l'algorithme de signature ?",
              "a": [
                "alg"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Quelle extension de sécurité HTTP empêche l'affichage du site dans une iframe malveillante ?",
              "a": [
                "x-frame-options"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Quel en-tête HTTP aide à limiter les scripts autorisés à s'exécuter sur une page (sigle) ?",
              "a": [
                "csp",
                "content security policy"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Quel sigle désigne la double authentification ?",
              "a": [
                "2fa",
                "mfa",
                "a2f"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Que doit vérifier un serveur avant de renvoyer une ressource appartenant à un utilisateur ?",
              "a": [
                "le proprietaire",
                "proprietaire",
                "autorisation",
                "les droits"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Quel principe de sécurité consiste à ne donner que les droits strictement nécessaires ?",
              "a": [
                "moindre privilege",
                "principe du moindre privilege"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Comment s'appelle une connexion unique donnant accès à plusieurs services (sigle) ?",
              "a": [
                "sso"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Quelle pratique consiste à changer régulièrement et à ne jamais réutiliser ses mots de passe ?",
              "a": [
                "hygiene des mots de passe",
                "bonne pratique"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Quel outil permet de stocker ses mots de passe de façon chiffrée ?",
              "a": [
                "gestionnaire de mots de passe"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Quelle protection limite le nombre de tentatives de connexion échouées ?",
              "a": [
                "limitation du nombre de tentatives",
                "limitation de tentatives",
                "blocage apres plusieurs essais",
                "rate limiting",
                "verrouillage du compte"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Comment s'appelle une attaque qui imite un organisme de confiance pour voler des informations ?",
              "a": [
                "phishing",
                "hameconnage"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Comment s'appelle le phishing ciblé sur une personne précise ?",
              "a": [
                "spear phishing"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Comment s'appelle le phishing réalisé par téléphone ?",
              "a": [
                "vishing"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Comment s'appelle le phishing réalisé par SMS ?",
              "a": [
                "smishing"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quelle technique consiste à manipuler une personne plutôt qu'une machine pour obtenir un accès ?",
              "a": [
                "ingenierie sociale",
                "social engineering"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Quelle technique consiste à suivre quelqu'un dans un bâtiment sécurisé sans badge ?",
              "a": [
                "tailgating"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Que faut-il éviter de faire avec un lien reçu par SMS demandant de se connecter en urgence ?",
              "a": [
                "cliquer",
                "ne pas cliquer"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Quel type de logiciel malveillant se fait passer pour un programme légitime ?",
              "a": [
                "cheval de troie",
                "trojan"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Quel type de logiciel malveillant chiffre les fichiers et demande une rançon ?",
              "a": [
                "rancongiciel",
                "ransomware"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Quel type de logiciel malveillant se propage automatiquement sans intervention humaine ?",
              "a": [
                "ver",
                "worm"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Quel type de logiciel espionne discrètement l'activité de l'utilisateur ?",
              "a": [
                "logiciel espion",
                "spyware"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Quel type de malware enregistre les frappes clavier ?",
              "a": [
                "enregistreur de frappe",
                "keylogger"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Comment s'appelle un réseau de machines infectées contrôlées à distance ?",
              "a": [
                "botnet"
              ],
              "pts": 8
            }
          ]
        }
      ]
    },
    "linux": {
      "title": "Linux pour hackers",
      "level": "Débutant",
      "min": 25,
      "icon": "🐧",
      "terminal": "linux",
      "desc": "Navigue dans un terminal Linux simulé et trouve un fichier caché.",
      "tasks": [
        {
          "title": "Premiers pas dans le terminal",
          "body": "<p>Un terminal te permet de piloter une machine avec des commandes. Utilise le terminal à droite (ou en dessous sur téléphone). Tape <code>help</code> pour voir les commandes.</p>\n<ul><li><code>pwd</code> affiche le dossier courant</li><li><code>ls</code> liste les fichiers</li><li><code>cd dossier</code> change de dossier</li><li><code>cat fichier</code> affiche un fichier</li></ul>",
          "questions": [
            {
              "id": "pwd",
              "q": "Quelle commande affiche le dossier courant ?",
              "a": [
                "pwd"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "whoami",
              "q": "Quel est ton nom d'utilisateur sur la machine (commande whoami) ?",
              "a": [
                "stagiaire"
              ],
              "pts": 10,
              "hint": ""
            }
          ]
        },
        {
          "title": "Fichiers cachés",
          "body": "<p>Sous Linux, un fichier dont le nom commence par un point est caché. <code>ls</code> ne l'affiche pas, mais <code>ls -a</code> oui. Explore ton dossier personnel et lis la mission.</p>",
          "questions": [
            {
              "id": "ls-a",
              "q": "Quelle commande liste aussi les fichiers cachés ?",
              "a": [
                "ls -a",
                "ls -la",
                "ls -al"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "cache",
              "q": "Quel est le nom du fichier caché dans ton dossier personnel ?",
              "a": [
                ".cache_secret"
              ],
              "pts": 15,
              "hint": ""
            },
            {
              "id": "flag-linux",
              "q": "Quel flag contient ce fichier ?",
              "a": [
                "seh{linux_ls_a_cat}"
              ],
              "pts": 25,
              "hint": ""
            }
          ]
        },
        {
          "title": "Culture cybersécurité (3)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Quelle technique consiste à suivre quelqu'un dans un bâtiment sécurisé sans badge ?",
              "a": [
                "tailgating"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Que faut-il éviter de faire avec un lien reçu par SMS demandant de se connecter en urgence ?",
              "a": [
                "cliquer",
                "ne pas cliquer"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Quel type de logiciel malveillant se fait passer pour un programme légitime ?",
              "a": [
                "cheval de troie",
                "trojan"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Quel type de logiciel malveillant chiffre les fichiers et demande une rançon ?",
              "a": [
                "rancongiciel",
                "ransomware"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Quel type de logiciel malveillant se propage automatiquement sans intervention humaine ?",
              "a": [
                "ver",
                "worm"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Quel type de logiciel espionne discrètement l'activité de l'utilisateur ?",
              "a": [
                "logiciel espion",
                "spyware"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Quel type de malware enregistre les frappes clavier ?",
              "a": [
                "enregistreur de frappe",
                "keylogger"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Comment s'appelle un réseau de machines infectées contrôlées à distance ?",
              "a": [
                "botnet"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Quelle attaque vise à rendre un service indisponible en le saturant de trafic (sigle) ?",
              "a": [
                "ddos",
                "dos"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Comment s'appelle une faille exploitée avant même qu'un correctif existe ?",
              "a": [
                "faille zero day",
                "zero day",
                "0day"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Quelle commande Linux compte les lignes d'un fichier ?",
              "a": [
                "wc -l"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Quelle commande Linux recherche un motif dans un fichier texte ?",
              "a": [
                "grep"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Que doit-on faire en priorité face à une machine compromise avant d'investiguer ?",
              "a": [
                "l isoler du reseau",
                "isoler la machine",
                "isolement"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Comment s'appelle le document qui retrace chaque manipulation d'une preuve numérique ?",
              "a": [
                "chaine de possession",
                "chain of custody"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Quel type de fichier garde la trace des événements d'un système ou d'une application ?",
              "a": [
                "journal",
                "log",
                "fichier de log"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Que signifie l'acronyme IOC utilisé en réponse à incident ?",
              "a": [
                "indicateur de compromission",
                "indicator of compromise"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quel outil, en ligne de commande, scanne les ports et services réseau ?",
              "a": [
                "nmap"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quel outil capture et analyse le trafic réseau en détail ?",
              "a": [
                "wireshark"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quel proxy est très utilisé pour intercepter et modifier les requêtes web lors d'un test d'intrusion ?",
              "a": [
                "burp suite",
                "burp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Quel outil teste automatiquement les failles d'injection SQL ?",
              "a": [
                "sqlmap"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Quelle distribution Linux est spécialisée dans les tests d'intrusion ?",
              "a": [
                "kali linux",
                "kali"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Quel outil, basé sur des exploits prêts à l'emploi, est un cadre d'exploitation très utilisé (2 mots) ?",
              "a": [
                "metasploit"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Un hacker éthique doit obtenir quoi avant de tester un système ?",
              "a": [
                "une autorisation",
                "autorisation ecrite",
                "autorisation"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Comment s'appelle un document qui autorise formellement un test d'intrusion ?",
              "a": [
                "lettre d autorisation",
                "accord ecrit",
                "contrat de pentest"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Quelle couleur de chapeau porte un hacker qui agit avec autorisation pour protéger ?",
              "a": [
                "blanc",
                "chapeau blanc",
                "white hat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Quelle couleur de chapeau porte un hacker qui attaque sans autorisation ?",
              "a": [
                "noir",
                "chapeau noir",
                "black hat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Que risque-t-on légalement à attaquer un système sans autorisation, même « pour s'entraîner » ?",
              "a": [
                "des poursuites",
                "sanctions penales",
                "risques legaux"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Quel principe de sécurité repose sur confidentialité, intégrité et disponibilité (sigle) ?",
              "a": [
                "cia",
                "dic"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Laquelle de ces propriétés garantit que seules les personnes autorisées accèdent à l'information ?",
              "a": [
                "confidentialite"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Laquelle de ces propriétés garantit que l'information n'est pas modifiée sans autorisation ?",
              "a": [
                "integrite"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Laquelle de ces propriétés garantit l'accès au service quand on en a besoin ?",
              "a": [
                "disponibilite"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Quel protocole de sécurité Wi-Fi est aujourd'hui recommandé, succédant au WPA2 ?",
              "a": [
                "wpa3"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Quel protocole Wi-Fi ancien est aujourd'hui considéré comme non sécurisé ?",
              "a": [
                "wep"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Quel sigle désigne les objets connectés ?",
              "a": [
                "iot"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Pourquoi les objets connectés sont-ils souvent plus vulnérables ?",
              "a": [
                "mots de passe par defaut",
                "peu de mises a jour",
                "manque de mises a jour"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Quelle pratique consiste à isoler des services dans un environnement cloisonné ?",
              "a": [
                "sandboxing",
                "isolation",
                "conteneurisation"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quel terme désigne la surface totale exposée aux attaques d'un système ?",
              "a": [
                "surface d attaque"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Quelle action régulière corrige les failles connues d'un logiciel ?",
              "a": [
                "mise a jour",
                "mises a jour",
                "patch"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Quel terme désigne une copie de sécurité des données ?",
              "a": [
                "sauvegarde",
                "backup"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Pourquoi une sauvegarde régulière protège-t-elle contre un rançongiciel ?",
              "a": [
                "on peut restaurer les donnees",
                "restauration possible sans payer"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Sur quel port fonctionne POP3 (relève du courrier) ?",
              "a": [
                "110"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Sur quel port fonctionne IMAP ?",
              "a": [
                "143"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Sur quel port fonctionne LDAP ?",
              "a": [
                "389"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Sur quel port fonctionne SNMP ?",
              "a": [
                "161"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Quel protocole, sans connexion, est utilisé par le DNS et le streaming vidéo ?",
              "a": [
                "udp"
              ],
              "pts": 8
            }
          ]
        }
      ]
    },
    "mots-de-passe": {
      "title": "Mots de passe et hachage",
      "level": "Débutant",
      "min": 20,
      "icon": "🔑",
      "desc": "Comprendre comment les mots de passe sont stockés et cassés.",
      "tasks": [
        {
          "title": "Le hachage",
          "body": "<p>Un site sérieux ne stocke jamais ton mot de passe, mais son <b>empreinte</b> (hash), calculée par une fonction à sens unique : MD5 (32 caractères hexa), SHA-256 (64 caractères hexa), bcrypt…</p>\n<p>Même mot de passe donne toujours la même empreinte, d'où les « dictionnaires » d'attaquants. Pour s'en protéger, on ajoute un <b>sel</b> (valeur aléatoire) avant de hacher.</p>",
          "questions": [
            {
              "id": "sha-len",
              "q": "Sur combien de caractères hexadécimaux s'écrit une empreinte SHA-256 ?",
              "a": [
                "64"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "sel",
              "q": "Comment s'appelle la valeur aléatoire ajoutée avant de hacher un mot de passe ?",
              "a": [
                "sel",
                "salt"
              ],
              "pts": 10,
              "hint": ""
            }
          ]
        },
        {
          "title": "Casser des empreintes faibles",
          "body": "<p>Les empreintes MD5 de mots de passe courants sont connues de tous. Cherche-les sur un site de recherche d'empreintes ou calcule celles de mots courants.</p>\n<p>Mots à tester : password, admin, 123456, azerty, qwerty.</p>",
          "questions": [
            {
              "id": "md5-1",
              "q": "Quel mot de passe a pour empreinte MD5 5f4dcc3b5aa765d61d8327deb882cf99 ?",
              "a": [
                "password"
              ],
              "pts": 15,
              "hint": ""
            },
            {
              "id": "md5-2",
              "q": "Et 21232f297a57a5a743894a0e4a801fc3 ?",
              "a": [
                "admin"
              ],
              "pts": 15,
              "hint": ""
            },
            {
              "id": "md5-3",
              "q": "Et e10adc3949ba59abbe56e057f20f883e ?",
              "a": [
                "123456"
              ],
              "pts": 15,
              "hint": ""
            }
          ]
        },
        {
          "title": "Atelier pratique : casse un mot de passe en Python",
          "body": "<p>Tu vas écrire un vrai script Python, exécuté réellement par le serveur, pour casser un mot de passe par <b>attaque par dictionnaire</b> : on teste une liste de mots courants et on compare leur empreinte MD5 à celle qu'on veut casser.</p>\n<p>Complète le script à droite avec <code>hashlib.md5(mot.encode()).hexdigest()</code>, puis clique sur <b>Exécuter</b>. Le mot de passe s'affiche dans la console si tu as réussi.</p>",
          "questions": [
            {
              "id": "exo-md5",
              "q": "Quel mot de passe ton script a-t-il trouvé ?",
              "a": [
                "password"
              ],
              "pts": 30,
              "hint": "hashlib.md5(mot.encode()).hexdigest() == cible"
            }
          ]
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Quelle action régulière corrige les failles connues d'un logiciel ?",
              "a": [
                "mise a jour",
                "mises a jour",
                "patch"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Quel terme désigne une copie de sécurité des données ?",
              "a": [
                "sauvegarde",
                "backup"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Pourquoi une sauvegarde régulière protège-t-elle contre un rançongiciel ?",
              "a": [
                "on peut restaurer les donnees",
                "restauration possible sans payer"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Sur quel port fonctionne POP3 (relève du courrier) ?",
              "a": [
                "110"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Sur quel port fonctionne IMAP ?",
              "a": [
                "143"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Sur quel port fonctionne LDAP ?",
              "a": [
                "389"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Sur quel port fonctionne SNMP ?",
              "a": [
                "161"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Quel protocole, sans connexion, est utilisé par le DNS et le streaming vidéo ?",
              "a": [
                "udp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Quelle adresse MAC est attribuée de façon unique à chaque carte réseau ?",
              "a": [
                "adresse mac",
                "mac"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Quel outil affiche le chemin (les routeurs) emprunté par un paquet jusqu'à une destination ?",
              "a": [
                "traceroute",
                "tracert"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Quel protocole de la couche 2 relie les machines d'un même réseau local filaire ?",
              "a": [
                "ethernet"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Quelle classe d'adresse IPv4 commence par 192.168. et est réservée au privé ?",
              "a": [
                "classe c",
                "reseau prive"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Quel service réseau convertit une adresse IP privée en adresse IP publique (sigle) ?",
              "a": [
                "nat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Quel protocole sécurisé remplace Telnet pour l'administration à distance ?",
              "a": [
                "ssh"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Quel outil capture le trafic réseau en ligne de commande, plus léger que Wireshark ?",
              "a": [
                "tcpdump"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Quelle topologie réseau relie toutes les machines à un point central ?",
              "a": [
                "etoile",
                "topologie en etoile"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quel est le nom du paquet envoyé pour établir une connexion TCP (3 lettres) ?",
              "a": [
                "syn"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Combien d'échanges comporte la poignée de main TCP (3-way handshake) ?",
              "a": [
                "3",
                "trois"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quel VLAN permet de séparer logiquement un réseau physique unique ?",
              "a": [
                "vlan"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Quel protocole permet de synchroniser l'heure entre machines sur un réseau ?",
              "a": [
                "ntp"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Quelle commande Linux affiche les connexions réseau actives et les ports en écoute ?",
              "a": [
                "ss",
                "netstat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Quel service réseau central gère les comptes et droits sur un réseau d'entreprise Windows ?",
              "a": [
                "active directory"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Que signifie le sigle VPN ?",
              "a": [
                "reseau prive virtuel",
                "virtual private network"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Quel est l'intérêt principal d'un VPN pour la sécurité ?",
              "a": [
                "chiffrer le trafic",
                "chiffrement du trafic",
                "confidentialite du trafic"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Combien de caractères hexadécimaux compose une empreinte SHA-1 ?",
              "a": [
                "40"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "SHA-1 est-il aujourd'hui recommandé pour la sécurité ?",
              "a": [
                "non"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Quel algorithme de hachage, lent par conception, est recommandé pour les mots de passe (pas pour l'intégrité de fichiers) ?",
              "a": [
                "bcrypt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Quelle propriété d'une fonction de hachage garantit que deux entrées différentes ne donnent presque jamais la même empreinte ?",
              "a": [
                "resistance aux collisions"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Quel protocole utilise un échange de clés pour établir un secret partagé sans le transmettre en clair (2 noms propres) ?",
              "a": [
                "diffie-hellman",
                "diffie hellman"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Dans HTTPS, quelle clé chiffre les données envoyées au serveur (publique ou privée) ?",
              "a": [
                "publique",
                "clef publique"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Quelle taille de clé AES est aujourd'hui considérée comme très solide (en bits) ?",
              "a": [
                "256"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Quel terme désigne un texte chiffré, par opposition au texte en clair ?",
              "a": [
                "chiffre",
                "texte chiffre",
                "ciphertext"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Quelle attaque consiste à intercepter une communication entre deux parties à leur insu (sigle) ?",
              "a": [
                "mitm",
                "man in the middle",
                "homme du milieu"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Pourquoi ne faut-il jamais inventer son propre algorithme de chiffrement en production ?",
              "a": [
                "non audite",
                "risque de faille",
                "pas audite par des experts"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Quel format de fichier contient une clé privée ou un certificat, reconnaissable à son en-tête \"-----BEGIN\"?",
              "a": [
                "pem"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Quelle extension de certificat SSL/TLS valide le nom de domaine du site (abrégé) ?",
              "a": [
                "dv",
                "validation de domaine"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quelle faille du top 10 OWASP concerne une mauvaise configuration du serveur ou de l'application ?",
              "a": [
                "mauvaise configuration de securite",
                "security misconfiguration"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Quelle faille permet d'envoyer vers une URL arbitraire choisie par l'attaquant (sigle) ?",
              "a": [
                "ssrf"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Quelle faille consiste à remonter dans l'arborescence des fichiers via ../ ?",
              "a": [
                "traversee de repertoire",
                "path traversal",
                "directory traversal"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Quelle faille permet d'exécuter des commandes systeme via une application web (sigle) ?",
              "a": [
                "rce",
                "execution de code a distance"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (8)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Quelle faille vient d'une vérification insuffisante des fichiers uploadés par l'utilisateur ?",
              "a": [
                "upload de fichier malveillant",
                "unrestricted file upload"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Quel en-tête HTTP force l'utilisation exclusive d'HTTPS pour un site (sigle) ?",
              "a": [
                "hsts"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Quelle méthode HTTP sert uniquement à récupérer des données, sans les modifier ?",
              "a": [
                "get"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Quelle méthode HTTP supprime une ressource côté serveur ?",
              "a": [
                "delete"
              ],
              "pts": 8
            }
          ]
        }
      ],
      "code": {
        "lang": "python",
        "starter": "# Attaque par dictionnaire contre une empreinte MD5.\n# Objectif : retrouver le mot de passe en clair derrière ce hash.\nimport hashlib\n\ncible = '5f4dcc3b5aa765d61d8327deb882cf99'\ndictionnaire = ['123456', 'password', 'azerty', 'admin', 'motdepasse', 'soleil', 'bonjour']\n\nfor mot in dictionnaire:\n    # Complète : calcule le hash MD5 de \"mot\" et compare-le à \"cible\"\n    pass\n"
      }
    },
    "http": {
      "title": "Comment fonctionne le web (HTTP)",
      "level": "Débutant",
      "min": 20,
      "icon": "🧭",
      "desc": "Requêtes, réponses, codes de statut et cookies.",
      "tasks": [
        {
          "title": "Requêtes et réponses",
          "body": "<p>Ton navigateur envoie une <b>requête</b> (méthode + URL + en-têtes), le serveur répond avec un <b>code de statut</b> et un contenu. Méthodes courantes : GET (lire), POST (envoyer des données), PUT, DELETE.</p>\n<p>Codes : 200 OK, 301 redirection, 403 accès interdit, 404 introuvable, 500 erreur serveur.</p>",
          "questions": [
            {
              "id": "post",
              "q": "Quelle méthode HTTP sert à envoyer un formulaire de connexion ?",
              "a": [
                "post"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "404",
              "q": "Quel code signifie « page introuvable » ?",
              "a": [
                "404"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "403",
              "q": "Quel code signifie « accès interdit » ?",
              "a": [
                "403"
              ],
              "pts": 10,
              "hint": ""
            }
          ]
        },
        {
          "title": "Cookies",
          "body": "<p>Un cookie est un petit texte que le serveur demande au navigateur de garder. Il sert souvent à te reconnaître (session). Le serveur le crée avec l'en-tête <code>Set-Cookie</code>. L'attribut <code>HttpOnly</code> interdit à JavaScript de le lire.</p>",
          "questions": [
            {
              "id": "set-cookie",
              "q": "Quel en-tête de réponse crée un cookie ?",
              "a": [
                "set-cookie"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "httponly",
              "q": "Quel attribut empêche JavaScript de lire un cookie ?",
              "a": [
                "httponly"
              ],
              "pts": 15,
              "hint": ""
            }
          ]
        },
        {
          "title": "Culture cybersécurité (3)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Quelle faille permet d'envoyer vers une URL arbitraire choisie par l'attaquant (sigle) ?",
              "a": [
                "ssrf"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Quelle faille consiste à remonter dans l'arborescence des fichiers via ../ ?",
              "a": [
                "traversee de repertoire",
                "path traversal",
                "directory traversal"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Quelle faille permet d'exécuter des commandes systeme via une application web (sigle) ?",
              "a": [
                "rce",
                "execution de code a distance"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Quelle faille vient d'une vérification insuffisante des fichiers uploadés par l'utilisateur ?",
              "a": [
                "upload de fichier malveillant",
                "unrestricted file upload"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Quel en-tête HTTP force l'utilisation exclusive d'HTTPS pour un site (sigle) ?",
              "a": [
                "hsts"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Quelle méthode HTTP sert uniquement à récupérer des données, sans les modifier ?",
              "a": [
                "get"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Quelle méthode HTTP supprime une ressource côté serveur ?",
              "a": [
                "delete"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Quel code HTTP indique une redirection permanente ?",
              "a": [
                "301"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Quel code HTTP indique que l'authentification est requise ?",
              "a": [
                "401"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Quel terme désigne le vol de session via le cookie d'un autre utilisateur ?",
              "a": [
                "vol de session",
                "session hijacking"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Quelle pratique régénère l'identifiant de session après une connexion réussie, pour éviter sa fixation ?",
              "a": [
                "regeneration de session",
                "session regeneration"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Quel outil de navigateur (F12) permet de voir les requêtes réseau et les cookies ?",
              "a": [
                "outils de developpement",
                "devtools",
                "outils developpeur"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Quel format léger est aujourd'hui le plus utilisé pour échanger des données via une API web ?",
              "a": [
                "json"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Quelle pratique de développement consiste à ne jamais faire confiance aux données envoyées par le client ?",
              "a": [
                "validation cote serveur",
                "ne jamais faire confiance au client"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Quel type de 2FA est considéré comme le plus résistant au phishing (clé matérielle) ?",
              "a": [
                "cle de securite",
                "cle u2f",
                "fido"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Pourquoi le SMS est-il un facteur 2FA plus faible que les applications d'authentification ?",
              "a": [
                "sim swap",
                "interception possible",
                "vulnerable au sim swapping"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quel protocole standard est souvent utilisé pour le SSO en entreprise (sigle, 4 lettres) ?",
              "a": [
                "saml"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quel protocole d'autorisation déléguée est très utilisé pour \"se connecter avec Google/Facebook\" ?",
              "a": [
                "oauth"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quelle pratique consiste à révoquer immédiatement les accès d'un employé qui quitte l'entreprise ?",
              "a": [
                "revocation des acces",
                "desactivation du compte"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Quel type de contrôle d'accès attribue les droits selon le rôle de l'utilisateur (sigle) ?",
              "a": [
                "rbac"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Comment s'appelle l'arnaque qui cible spécifiquement un dirigeant d'entreprise ?",
              "a": [
                "whaling"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Quelle technique consiste à fouiller les poubelles pour trouver des informations sensibles ?",
              "a": [
                "dumpster diving"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Quelle technique consiste à observer discrètement l'écran ou le clavier de quelqu'un ?",
              "a": [
                "shoulder surfing"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Quel indice visuel, dans un email de phishing, trahit souvent une fausse URL ?",
              "a": [
                "domaine different",
                "faute dans le domaine",
                "domaine suspect"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Pourquoi les attaques de phishing créent-elles souvent un sentiment d'urgence ?",
              "a": [
                "pour empecher de reflechir",
                "pousser a agir vite sans verifier"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Quel type de malware se cache dans le secteur de démarrage ou le noyau, très difficile à détecter ?",
              "a": [
                "rootkit"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Quel type de malware affiche des publicités intrusives ?",
              "a": [
                "adware",
                "logiciel publicitaire"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Quelle attaque consiste à insérer un malware dans une mise à jour logicielle légitime ?",
              "a": [
                "attaque de la chaine d approvisionnement",
                "supply chain attack"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Quel terme désigne un groupe d'attaquants menant une attaque furtive et prolongée (sigle) ?",
              "a": [
                "apt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Quelle mesure technique empêche l'exécution de programmes non autorisés sur un poste ?",
              "a": [
                "liste blanche d applications",
                "application whitelisting"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Que doit-on faire après avoir isolé une machine compromise, avant de la nettoyer ?",
              "a": [
                "collecter les preuves",
                "analyser",
                "investigation"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Quel terme désigne l'empreinte numérique (hash) qui prouve qu'une preuve n'a pas été altérée ?",
              "a": [
                "empreinte d integrite",
                "hash de preuve"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Que signifie l'acronyme SIEM en sécurité ?",
              "a": [
                "gestion des informations et evenements de securite",
                "security information and event management"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Quel document résume les leçons apprises après un incident de sécurité ?",
              "a": [
                "rapport post incident",
                "retour d experience",
                "post mortem"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Quelle commande Linux affiche les derniers processus en cours d'exécution ?",
              "a": [
                "ps",
                "ps aux"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Quelle commande Linux affiche les dernières lignes d'un fichier en continu (suivi en direct) ?",
              "a": [
                "tail -f"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quel outil, souvent utilisé avec Burp, intercepte et modifie le trafic entre navigateur et serveur ?",
              "a": [
                "proxy"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Quel outil en ligne de commande teste la robustesse d'un mot de passe par force brute sur un service réseau ?",
              "a": [
                "hydra"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Quel outil permet de cartographier visuellement un réseau découvert par Nmap ?",
              "a": [
                "zenmap"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Quel outil, basé sur navigateur, liste les vulnérabilités connues d'un CMS comme WordPress ?",
              "a": [
                "wpscan"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Quel outil capture les mots de passe Wi-Fi en forçant une reconnexion (attaque de désauthentification) ?",
              "a": [
                "aircrack-ng",
                "aircrack"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Quel document définit précisément le périmètre autorisé d'un test d'intrusion (sigle anglais) ?",
              "a": [
                "scope",
                "rules of engagement",
                "roe"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Que doit faire un pentester qui découvre une faille critique en dehors du périmètre autorisé ?",
              "a": [
                "la signaler sans l exploiter",
                "informer le client sans exploiter"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Quel règlement européen protège les données personnelles (sigle) ?",
              "a": [
                "rgpd"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Quelle structure organisationnelle est responsable de la réponse aux incidents de sécurité (sigle) ?",
              "a": [
                "csirt",
                "soc"
              ],
              "pts": 8
            }
          ]
        }
      ]
    },
    "sqli": {
      "title": "Injection SQL",
      "level": "Intermédiaire",
      "min": 30,
      "icon": "💉",
      "lab": "sqli",
      "desc": "Contourne un formulaire de connexion vulnérable.",
      "tasks": [
        {
          "title": "Comprendre la faille",
          "body": "<p>Un site construit sa requête en collant ce que tu écris dans le texte SQL :</p>\n<pre>SELECT * FROM users WHERE username='<b>TON_TEXTE</b>' AND password='...'</pre>\n<p>Si tu écris une apostrophe <code>'</code>, tu fermes la chaîne et tu peux ajouter du SQL à toi.</p>",
          "questions": [
            {
              "id": "quote",
              "q": "Quel caractère ferme la chaîne de texte et permet de casser la requête ?",
              "a": [
                "'",
                "apostrophe",
                "quote"
              ],
              "pts": 10,
              "hint": ""
            }
          ]
        },
        {
          "title": "Attaque la machine",
          "body": "<p>Utilise le lab à droite : un faux portail « Mairie Connect ». Compte de test : <code>guest</code> / <code>guest</code>.</p>\n<p>Objectif : te connecter comme <b>admin</b> sans connaître son mot de passe. Le commentaire SQL <code>--</code> ignore tout ce qui suit sur la ligne. Essaie aussi <code>' OR '1'='1</code> et observe avec quel compte tu entres.</p>",
          "questions": [
            {
              "id": "comment",
              "q": "Quelle séquence met en commentaire la fin de la requête SQL ?",
              "a": [
                "--",
                "-- "
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "flag-sqli",
              "q": "Quel flag obtiens-tu en te connectant comme admin ?",
              "a": [
                "seh{sqli_login_bypass_7f3a}"
              ],
              "pts": 40,
              "hint": "Essaie admin'-- comme nom d'utilisateur."
            }
          ]
        },
        {
          "title": "Se protéger",
          "body": "<p>La parade : ne jamais assembler du SQL avec du texte utilisateur. On envoie la requête et les données séparément.</p>",
          "questions": [
            {
              "id": "prep",
              "q": "Comment s'appellent les requêtes qui séparent le code SQL des données ?",
              "a": [
                "requetes preparees",
                "requete preparee",
                "requetes parametrees",
                "requete parametree",
                "prepared statements",
                "prepared statement"
              ],
              "pts": 20,
              "hint": ""
            }
          ]
        },
        {
          "title": "Atelier pratique : automatise l'attaque en Python",
          "body": "<p>Plutôt que de remplir le formulaire à la main, un vrai attaquant écrit un script qui envoie directement la requête HTTP. Complète le script à droite pour qu'il envoie la même injection que tu as utilisée dans la tâche précédente, directement via <code>urllib.request</code>.</p>\n<p>Clique sur <b>Exécuter</b> : si le script réussit, le flag s'affiche dans la console.</p>",
          "questions": [
            {
              "id": "exo-sqli-auto",
              "q": "Quel flag ton script affiche-t-il ?",
              "a": [
                "seh{sqli_login_bypass_7f3a}"
              ],
              "pts": 35,
              "hint": "u = \"admin'--\", p = \"x\""
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Quel outil en ligne de commande teste la robustesse d'un mot de passe par force brute sur un service réseau ?",
              "a": [
                "hydra"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Quel outil permet de cartographier visuellement un réseau découvert par Nmap ?",
              "a": [
                "zenmap"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Quel outil, basé sur navigateur, liste les vulnérabilités connues d'un CMS comme WordPress ?",
              "a": [
                "wpscan"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Quel outil capture les mots de passe Wi-Fi en forçant une reconnexion (attaque de désauthentification) ?",
              "a": [
                "aircrack-ng",
                "aircrack"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Quel document définit précisément le périmètre autorisé d'un test d'intrusion (sigle anglais) ?",
              "a": [
                "scope",
                "rules of engagement",
                "roe"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Que doit faire un pentester qui découvre une faille critique en dehors du périmètre autorisé ?",
              "a": [
                "la signaler sans l exploiter",
                "informer le client sans exploiter"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Quel règlement européen protège les données personnelles (sigle) ?",
              "a": [
                "rgpd"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Quelle structure organisationnelle est responsable de la réponse aux incidents de sécurité (sigle) ?",
              "a": [
                "csirt",
                "soc"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Pourquoi la divulgation responsable d'une faille est-elle préférable à sa publication immédiate ?",
              "a": [
                "laisser le temps de corriger",
                "laisser un delai de correction"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Quel terme désigne une récompense offerte à qui trouve une faille et la signale correctement ?",
              "a": [
                "prime aux bugs",
                "bug bounty"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Quel terme désigne l'informatique hébergée chez un prestataire plutôt que sur ses propres serveurs ?",
              "a": [
                "cloud",
                "informatique en nuage"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Quel modèle de responsabilité partagée régit la sécurité dans le cloud (entre client et fournisseur) ?",
              "a": [
                "responsabilite partagee",
                "modele de responsabilite partagee"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Quelle technologie isole une application avec ses dépendances dans un environnement léger ?",
              "a": [
                "conteneur",
                "conteneurisation",
                "docker"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Quel type d'application mobile présente le plus de risques : officielle ou installée hors boutique officielle ?",
              "a": [
                "hors boutique officielle",
                "sideloading"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Quelle pratique de développement consiste à exécuter des tests de sécurité automatisés à chaque modification de code (sigle) ?",
              "a": [
                "devsecops",
                "ci cd securise"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Quel terme désigne la gestion des vulnérabilités en fonction de leur criticité réelle ?",
              "a": [
                "priorisation des vulnerabilites",
                "gestion des risques"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quelle pratique protège un réseau Wi-Fi en cachant son nom (SSID) ?",
              "a": [
                "masquer le ssid",
                "ssid cache"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Pourquoi masquer le SSID n'est-il pas une vraie mesure de sécurité ?",
              "a": [
                "facilement detectable",
                "contournable",
                "pas vraiment efficace"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Sur quel port fonctionne SSH par défaut ?",
              "a": [
                "22"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Sur quel port fonctionne HTTP par défaut ?",
              "a": [
                "80"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Sur quel port fonctionne HTTPS par défaut ?",
              "a": [
                "443"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Sur quel port fonctionne le DNS ?",
              "a": [
                "53"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Sur quel port fonctionne FTP (commandes) ?",
              "a": [
                "21"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Sur quel port fonctionne Telnet ?",
              "a": [
                "23"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Sur quel port fonctionne SMTP ?",
              "a": [
                "25"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Sur quel port fonctionne RDP (bureau à distance Windows) ?",
              "a": [
                "3389"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Quel protocole traduit un nom de domaine en adresse IP ?",
              "a": [
                "dns"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Quel protocole attribue automatiquement une adresse IP sur un réseau ?",
              "a": [
                "dhcp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Combien de couches compte le modèle OSI ?",
              "a": [
                "7",
                "sept"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Quelle couche OSI gère le routage entre réseaux (numéro) ?",
              "a": [
                "3",
                "couche 3",
                "reseau"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (8)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Quel protocole de la couche transport garantit la livraison des paquets ?",
              "a": [
                "tcp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Quel protocole de la couche transport est plus rapide mais sans garantie de livraison ?",
              "a": [
                "udp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Quel est le masque réseau correspondant à la notation /24 ?",
              "a": [
                "255.255.255.0"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Combien d'adresses utilisables y a-t-il dans un réseau /24 ?",
              "a": [
                "254"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Quelle commande Windows affiche la configuration réseau ?",
              "a": [
                "ipconfig"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Quelle commande Linux affiche la configuration réseau (moderne) ?",
              "a": [
                "ip a",
                "ip addr",
                "ifconfig"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quel outil envoie des paquets pour tester si une machine répond ?",
              "a": [
                "ping"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Quel outil scanne les ports ouverts d'une machine ?",
              "a": [
                "nmap"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Quel protocole chiffre les connexions web (sigle) ?",
              "a": [
                "tls",
                "ssl"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Quelle adresse IP désigne toujours la machine locale ?",
              "a": [
                "127.0.0.1",
                "localhost"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (9)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Combien de bits compose une adresse IPv4 ?",
              "a": [
                "32"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Combien de bits compose une adresse IPv6 ?",
              "a": [
                "128"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Quel équipement relie plusieurs réseaux différents ?",
              "a": [
                "routeur"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Quel équipement relie des machines au sein d'un même réseau local ?",
              "a": [
                "switch",
                "commutateur"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Combien de caractères hexadécimaux compose une empreinte MD5 ?",
              "a": [
                "32"
              ],
              "pts": 8
            }
          ]
        }
      ],
      "code": {
        "lang": "python",
        "starter": "# Automatise le contournement de connexion SQLi avec une vraie requête HTTP.\nimport os, urllib.request, urllib.parse, re\n\nbase = os.environ.get('SMITH_BASE', 'http://localhost:3000')\n\n# Complète les données du formulaire pour contourner la connexion (comme dans la tâche précédente)\ndonnees = urllib.parse.urlencode({'u': '', 'p': ''}).encode()\n\nreponse = urllib.request.urlopen(base + '/lab/sqli/login', data=donnees).read().decode()\nm = re.search(r'SEH\\{[^}]+\\}', reponse)\nprint('Flag trouve :', m.group(0) if m else 'aucun flag trouve')\n"
      }
    },
    "xss": {
      "title": "Cross-Site Scripting (XSS)",
      "level": "Intermédiaire",
      "min": 30,
      "icon": "📜",
      "lab": "xss",
      "desc": "Injecte du JavaScript dans une page qui reflète ta saisie.",
      "tasks": [
        {
          "title": "Le principe",
          "body": "<p>Une faille XSS apparaît quand un site affiche ce que tu écris <b>sans l'échapper</b>. Si tu écris du HTML ou du JavaScript, il est exécuté dans le navigateur de la victime.</p>\n<p>Exemple : <code>&lt;script&gt;alert(1)&lt;/script&gt;</code> dans un champ de recherche.</p>",
          "questions": [
            {
              "id": "xss-nom",
              "q": "XSS est le sigle de…",
              "a": [
                "cross site scripting",
                "cross-site scripting"
              ],
              "pts": 10,
              "hint": ""
            }
          ]
        },
        {
          "title": "Voler un cookie",
          "body": "<p>Le lab à droite est un moteur de recherche d'annonces. La page pose un cookie de session pour ce site. En XSS, <code>document.cookie</code> permet de le lire.</p>\n<p>Objectif : faire afficher le contenu du cookie à l'écran avec <code>alert</code>.</p>",
          "questions": [
            {
              "id": "flag-xss",
              "q": "Quel flag contient le cookie ?",
              "a": [
                "seh{xss_reflechi_cookie_92b1}"
              ],
              "pts": 40,
              "hint": "<script>alert(document.cookie)</script>"
            },
            {
              "id": "xss-httponly",
              "q": "Quel attribut de cookie aurait empêché ce vol ?",
              "a": [
                "httponly"
              ],
              "pts": 15,
              "hint": ""
            }
          ]
        },
        {
          "title": "Se protéger",
          "body": "<p>Il faut transformer les caractères spéciaux (<code>&lt; &gt; \" '</code>) avant de les afficher.</p>",
          "questions": [
            {
              "id": "xss-fix",
              "q": "Comment s'appelle l'opération qui neutralise les caractères spéciaux avant affichage ?",
              "a": [
                "echapper",
                "echappement",
                "escape",
                "escaping",
                "encodage"
              ],
              "pts": 15,
              "hint": ""
            }
          ]
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Quel outil scanne les ports ouverts d'une machine ?",
              "a": [
                "nmap"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Quel protocole chiffre les connexions web (sigle) ?",
              "a": [
                "tls",
                "ssl"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Quelle adresse IP désigne toujours la machine locale ?",
              "a": [
                "127.0.0.1",
                "localhost"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Combien de bits compose une adresse IPv4 ?",
              "a": [
                "32"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Combien de bits compose une adresse IPv6 ?",
              "a": [
                "128"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Quel équipement relie plusieurs réseaux différents ?",
              "a": [
                "routeur"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Quel équipement relie des machines au sein d'un même réseau local ?",
              "a": [
                "switch",
                "commutateur"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Combien de caractères hexadécimaux compose une empreinte MD5 ?",
              "a": [
                "32"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Combien de caractères hexadécimaux compose une empreinte SHA-256 ?",
              "a": [
                "64"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Comment s'appelle la valeur aléatoire ajoutée avant de hacher un mot de passe ?",
              "a": [
                "sel",
                "salt"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Quel algorithme de chiffrement asymétrique très répandu commence par R ?",
              "a": [
                "rsa"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Quel algorithme de chiffrement symétrique est aujourd'hui le standard (sigle) ?",
              "a": [
                "aes"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Le chiffrement symétrique utilise combien de clés différentes ?",
              "a": [
                "1",
                "une"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Le chiffrement asymétrique utilise combien de clés différentes ?",
              "a": [
                "2",
                "deux"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Quel encodage transforme des données en texte lisible mais n'est pas un chiffrement ?",
              "a": [
                "base64"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Dans un chiffre de César avec un décalage de 13, comment s'appelle ce cas particulier ?",
              "a": [
                "rot13"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quelle opération binaire, appliquée deux fois avec la même clé, redonne le texte original ?",
              "a": [
                "xor"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quel protocole garantit l'authenticité et l'intégrité d'un site web via un certificat ?",
              "a": [
                "tls",
                "ssl",
                "https"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Qui délivre les certificats utilisés en HTTPS (sigle) ?",
              "a": [
                "ac",
                "autorite de certification",
                "ca"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Peut-on « déchiffrer » une empreinte de hachage pour retrouver le mot de passe original ?",
              "a": [
                "non"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Quel est le nom de l'attaque qui teste tous les mots d'une liste pour casser un mot de passe ?",
              "a": [
                "attaque par dictionnaire",
                "dictionnaire"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Quel est le nom de l'attaque qui teste toutes les combinaisons possibles ?",
              "a": [
                "force brute",
                "attaque par force brute"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Quelle table précalculée accélère la cassage de hachages non salés ?",
              "a": [
                "table arc en ciel",
                "rainbow table"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Quel sigle désigne le top 10 des failles web les plus critiques, publié régulièrement ?",
              "a": [
                "owasp top 10",
                "owasp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Quelle faille permet d'injecter du code SQL dans une requête ?",
              "a": [
                "injection sql",
                "sqli"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Quelle faille permet d'injecter du JavaScript exécuté dans le navigateur d'un autre utilisateur ?",
              "a": [
                "xss"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Quel sigle désigne l'accès à un objet via son identifiant sans contrôle d'autorisation ?",
              "a": [
                "idor"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Quel sigle désigne une requête forgée qui utilise la session d'une victime à son insu ?",
              "a": [
                "csrf"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Quel en-tête HTTP de réponse crée un cookie ?",
              "a": [
                "set-cookie"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Quel attribut de cookie empêche JavaScript de le lire ?",
              "a": [
                "httponly"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Quel attribut de cookie empêche son envoi sur une connexion non chiffrée ?",
              "a": [
                "secure"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Quelle méthode HTTP sert à envoyer les données d'un formulaire ?",
              "a": [
                "post"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Quel code HTTP signifie « page introuvable » ?",
              "a": [
                "404"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Quel code HTTP signifie « accès interdit » ?",
              "a": [
                "403"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Quel code HTTP signifie « succès » ?",
              "a": [
                "200"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Quel code HTTP signifie « erreur interne du serveur » ?",
              "a": [
                "500"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quelles requêtes SQL séparent le code des données pour éviter les injections ?",
              "a": [
                "requetes preparees",
                "requete preparee",
                "requetes parametrees"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Quelle opération neutralise les caractères spéciaux avant affichage pour éviter le XSS ?",
              "a": [
                "echappement",
                "echapper",
                "escaping"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Quel fichier à la racine d'un site indique aux robots les pages à ne pas indexer ?",
              "a": [
                "robots.txt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Quel format de jeton d'authentification, en 3 parties séparées par des points, est très utilisé sur le web ?",
              "a": [
                "jwt"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (8)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Dans un JWT, quel champ de l'en-tête indique l'algorithme de signature ?",
              "a": [
                "alg"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Quelle extension de sécurité HTTP empêche l'affichage du site dans une iframe malveillante ?",
              "a": [
                "x-frame-options"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Quel en-tête HTTP aide à limiter les scripts autorisés à s'exécuter sur une page (sigle) ?",
              "a": [
                "csp",
                "content security policy"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Quel sigle désigne la double authentification ?",
              "a": [
                "2fa",
                "mfa",
                "a2f"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Que doit vérifier un serveur avant de renvoyer une ressource appartenant à un utilisateur ?",
              "a": [
                "le proprietaire",
                "proprietaire",
                "autorisation",
                "les droits"
              ],
              "pts": 8
            },
            {
              "id": "quiz-46",
              "q": "Quel principe de sécurité consiste à ne donner que les droits strictement nécessaires ?",
              "a": [
                "moindre privilege",
                "principe du moindre privilege"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Atelier pratique : automatise le vol de cookie",
          "body": "<p>Un attaquant n'ouvre pas son navigateur pour chaque victime : il écrit un script qui simule la visite et récupère directement les cookies posés par le site. Le module <code>http.cookiejar</code> de Python se comporte comme un navigateur pour les cookies.</p>\n<p>Complète la variable <code>charge</code> avec la même charge XSS que dans la tâche précédente, puis exécute.</p>",
          "questions": [
            {
              "id": "exo-xss-auto",
              "q": "Quel cookie ton script a-t-il récupéré ?",
              "a": [
                "seh{xss_reflechi_cookie_92b1}"
              ],
              "pts": 35,
              "hint": "<script>alert(document.cookie)</script>"
            }
          ]
        }
      ],
      "code": {
        "lang": "python",
        "starter": "# Automatise le vol de cookie par XSS réfléchi.\nimport os, urllib.request, urllib.parse, http.cookiejar\n\nbase = os.environ.get('SMITH_BASE', 'http://localhost:3000')\ncj = http.cookiejar.CookieJar()\nopener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))\n\n# Complète : envoie la même charge utile <script>...</script> que dans la tâche précédente\ncharge = ''\nopener.open(base + '/lab/xss?' + urllib.parse.urlencode({'q': charge}))\n\nfor c in cj:\n    if c.name == 'session_annonces':\n        print('Cookie de session vole :', c.value)\n"
      }
    },
    "idor": {
      "title": "IDOR : accès aux données des autres",
      "level": "Intermédiaire",
      "min": 25,
      "icon": "🧾",
      "lab": "idor",
      "desc": "Lis une facture qui n'est pas la tienne en changeant un numéro.",
      "tasks": [
        {
          "title": "Le principe",
          "body": "<p>IDOR (Insecure Direct Object Reference) : le site te donne accès à un objet via son numéro, mais ne vérifie pas que cet objet t'appartient. Il suffit de changer le numéro dans l'URL.</p>",
          "questions": []
        },
        {
          "title": "Attaque la machine",
          "body": "<p>Le lab à droite est un portail de factures. Il t'affiche ta facture avec l'adresse <code>/lab/idor/api/facture/NUMERO</code>. Teste d'autres numéros, surtout les petits : ils appartiennent souvent à l'administration.</p>",
          "questions": [
            {
              "id": "mon-id",
              "q": "Quel est le numéro de TA facture ?",
              "a": [
                "1042"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "flag-idor",
              "q": "Quel flag contient la facture de la Direction Générale ?",
              "a": [
                "seh{idor_facture_admin_1}"
              ],
              "pts": 40,
              "hint": ""
            },
            {
              "id": "idor-fix",
              "q": "Que doit vérifier le serveur avant de renvoyer la facture ?",
              "a": [
                "proprietaire",
                "le proprietaire",
                "autorisation",
                "les droits",
                "permissions",
                "les autorisations"
              ],
              "pts": 20,
              "hint": "Que la facture appartient bien à l'utilisateur connecté."
            }
          ]
        },
        {
          "title": "Culture cybersécurité (3)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Quelle opération neutralise les caractères spéciaux avant affichage pour éviter le XSS ?",
              "a": [
                "echappement",
                "echapper",
                "escaping"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Quel fichier à la racine d'un site indique aux robots les pages à ne pas indexer ?",
              "a": [
                "robots.txt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Quel format de jeton d'authentification, en 3 parties séparées par des points, est très utilisé sur le web ?",
              "a": [
                "jwt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Dans un JWT, quel champ de l'en-tête indique l'algorithme de signature ?",
              "a": [
                "alg"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Quelle extension de sécurité HTTP empêche l'affichage du site dans une iframe malveillante ?",
              "a": [
                "x-frame-options"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Quel en-tête HTTP aide à limiter les scripts autorisés à s'exécuter sur une page (sigle) ?",
              "a": [
                "csp",
                "content security policy"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Quel sigle désigne la double authentification ?",
              "a": [
                "2fa",
                "mfa",
                "a2f"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Que doit vérifier un serveur avant de renvoyer une ressource appartenant à un utilisateur ?",
              "a": [
                "le proprietaire",
                "proprietaire",
                "autorisation",
                "les droits"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Quel principe de sécurité consiste à ne donner que les droits strictement nécessaires ?",
              "a": [
                "moindre privilege",
                "principe du moindre privilege"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Comment s'appelle une connexion unique donnant accès à plusieurs services (sigle) ?",
              "a": [
                "sso"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Quelle pratique consiste à changer régulièrement et à ne jamais réutiliser ses mots de passe ?",
              "a": [
                "hygiene des mots de passe",
                "bonne pratique"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Quel outil permet de stocker ses mots de passe de façon chiffrée ?",
              "a": [
                "gestionnaire de mots de passe"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Quelle protection limite le nombre de tentatives de connexion échouées ?",
              "a": [
                "limitation du nombre de tentatives",
                "limitation de tentatives",
                "blocage apres plusieurs essais",
                "rate limiting",
                "verrouillage du compte"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Comment s'appelle une attaque qui imite un organisme de confiance pour voler des informations ?",
              "a": [
                "phishing",
                "hameconnage"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Comment s'appelle le phishing ciblé sur une personne précise ?",
              "a": [
                "spear phishing"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Comment s'appelle le phishing réalisé par téléphone ?",
              "a": [
                "vishing"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Comment s'appelle le phishing réalisé par SMS ?",
              "a": [
                "smishing"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quelle technique consiste à manipuler une personne plutôt qu'une machine pour obtenir un accès ?",
              "a": [
                "ingenierie sociale",
                "social engineering"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quelle technique consiste à suivre quelqu'un dans un bâtiment sécurisé sans badge ?",
              "a": [
                "tailgating"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Que faut-il éviter de faire avec un lien reçu par SMS demandant de se connecter en urgence ?",
              "a": [
                "cliquer",
                "ne pas cliquer"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Quel type de logiciel malveillant se fait passer pour un programme légitime ?",
              "a": [
                "cheval de troie",
                "trojan"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Quel type de logiciel malveillant chiffre les fichiers et demande une rançon ?",
              "a": [
                "rancongiciel",
                "ransomware"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Quel type de logiciel malveillant se propage automatiquement sans intervention humaine ?",
              "a": [
                "ver",
                "worm"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Quel type de logiciel espionne discrètement l'activité de l'utilisateur ?",
              "a": [
                "logiciel espion",
                "spyware"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Quel type de malware enregistre les frappes clavier ?",
              "a": [
                "enregistreur de frappe",
                "keylogger"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Comment s'appelle un réseau de machines infectées contrôlées à distance ?",
              "a": [
                "botnet"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Quelle attaque vise à rendre un service indisponible en le saturant de trafic (sigle) ?",
              "a": [
                "ddos",
                "dos"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Comment s'appelle une faille exploitée avant même qu'un correctif existe ?",
              "a": [
                "faille zero day",
                "zero day",
                "0day"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Quelle commande Linux compte les lignes d'un fichier ?",
              "a": [
                "wc -l"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Quelle commande Linux recherche un motif dans un fichier texte ?",
              "a": [
                "grep"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Que doit-on faire en priorité face à une machine compromise avant d'investiguer ?",
              "a": [
                "l isoler du reseau",
                "isoler la machine",
                "isolement"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Comment s'appelle le document qui retrace chaque manipulation d'une preuve numérique ?",
              "a": [
                "chaine de possession",
                "chain of custody"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Quel type de fichier garde la trace des événements d'un système ou d'une application ?",
              "a": [
                "journal",
                "log",
                "fichier de log"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Que signifie l'acronyme IOC utilisé en réponse à incident ?",
              "a": [
                "indicateur de compromission",
                "indicator of compromise"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Quel outil, en ligne de commande, scanne les ports et services réseau ?",
              "a": [
                "nmap"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Quel outil capture et analyse le trafic réseau en détail ?",
              "a": [
                "wireshark"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quel proxy est très utilisé pour intercepter et modifier les requêtes web lors d'un test d'intrusion ?",
              "a": [
                "burp suite",
                "burp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Quel outil teste automatiquement les failles d'injection SQL ?",
              "a": [
                "sqlmap"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Quelle distribution Linux est spécialisée dans les tests d'intrusion ?",
              "a": [
                "kali linux",
                "kali"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Quel outil, basé sur des exploits prêts à l'emploi, est un cadre d'exploitation très utilisé (2 mots) ?",
              "a": [
                "metasploit"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Un hacker éthique doit obtenir quoi avant de tester un système ?",
              "a": [
                "une autorisation",
                "autorisation ecrite",
                "autorisation"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Comment s'appelle un document qui autorise formellement un test d'intrusion ?",
              "a": [
                "lettre d autorisation",
                "accord ecrit",
                "contrat de pentest"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Quelle couleur de chapeau porte un hacker qui agit avec autorisation pour protéger ?",
              "a": [
                "blanc",
                "chapeau blanc",
                "white hat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Quelle couleur de chapeau porte un hacker qui attaque sans autorisation ?",
              "a": [
                "noir",
                "chapeau noir",
                "black hat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Que risque-t-on légalement à attaquer un système sans autorisation, même « pour s'entraîner » ?",
              "a": [
                "des poursuites",
                "sanctions penales",
                "risques legaux"
              ],
              "pts": 8
            },
            {
              "id": "quiz-46",
              "q": "Quel principe de sécurité repose sur confidentialité, intégrité et disponibilité (sigle) ?",
              "a": [
                "cia",
                "dic"
              ],
              "pts": 8
            },
            {
              "id": "quiz-47",
              "q": "Laquelle de ces propriétés garantit que seules les personnes autorisées accèdent à l'information ?",
              "a": [
                "confidentialite"
              ],
              "pts": 8
            }
          ]
        }
      ]
    },
    "auth": {
      "title": "Authentification cassée",
      "level": "Intermédiaire",
      "min": 25,
      "icon": "🔓",
      "lab": "auth",
      "desc": "Modifie un cookie pour devenir administrateur.",
      "tasks": [
        {
          "title": "Ne jamais faire confiance au client",
          "body": "<p>Tout ce que le navigateur envoie (cookies, champs cachés, en-têtes) peut être modifié par l'utilisateur. Un site qui y stocke « je suis admin » peut donc être trompé.</p>\n<p>Encodage ne veut pas dire chiffrement : une chaîne qui finit par <code>=</code> est souvent du Base64.</p>",
          "questions": []
        },
        {
          "title": "Attaque la machine",
          "body": "<p>Dans le lab à droite, connecte-toi avec <code>guest</code> / <code>guest</code>. Ouvre les outils du navigateur (F12 puis Application ou Stockage, Cookies), repère le cookie <code>role</code>, décode-le, puis modifie-le et accède à <code>/lab/auth/admin</code>.</p>",
          "questions": [
            {
              "id": "decode",
              "q": "Que contient le cookie role une fois décodé, pour guest ?",
              "a": [
                "guest"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "enc",
              "q": "Comment s'appelle l'encodage utilisé ?",
              "a": [
                "base64"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "flag-auth",
              "q": "Quel flag affiche la page d'administration ?",
              "a": [
                "seh{cookie_role_modifie_c41d}"
              ],
              "pts": 40,
              "hint": "Le Base64 de « admin » est YWRtaW4="
            }
          ]
        },
        {
          "title": "Culture cybersécurité (3)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Quel outil teste automatiquement les failles d'injection SQL ?",
              "a": [
                "sqlmap"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Quelle distribution Linux est spécialisée dans les tests d'intrusion ?",
              "a": [
                "kali linux",
                "kali"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Quel outil, basé sur des exploits prêts à l'emploi, est un cadre d'exploitation très utilisé (2 mots) ?",
              "a": [
                "metasploit"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Un hacker éthique doit obtenir quoi avant de tester un système ?",
              "a": [
                "une autorisation",
                "autorisation ecrite",
                "autorisation"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Comment s'appelle un document qui autorise formellement un test d'intrusion ?",
              "a": [
                "lettre d autorisation",
                "accord ecrit",
                "contrat de pentest"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Quelle couleur de chapeau porte un hacker qui agit avec autorisation pour protéger ?",
              "a": [
                "blanc",
                "chapeau blanc",
                "white hat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Quelle couleur de chapeau porte un hacker qui attaque sans autorisation ?",
              "a": [
                "noir",
                "chapeau noir",
                "black hat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Que risque-t-on légalement à attaquer un système sans autorisation, même « pour s'entraîner » ?",
              "a": [
                "des poursuites",
                "sanctions penales",
                "risques legaux"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Quel principe de sécurité repose sur confidentialité, intégrité et disponibilité (sigle) ?",
              "a": [
                "cia",
                "dic"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Laquelle de ces propriétés garantit que seules les personnes autorisées accèdent à l'information ?",
              "a": [
                "confidentialite"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Laquelle de ces propriétés garantit que l'information n'est pas modifiée sans autorisation ?",
              "a": [
                "integrite"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Laquelle de ces propriétés garantit l'accès au service quand on en a besoin ?",
              "a": [
                "disponibilite"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Quel protocole de sécurité Wi-Fi est aujourd'hui recommandé, succédant au WPA2 ?",
              "a": [
                "wpa3"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Quel protocole Wi-Fi ancien est aujourd'hui considéré comme non sécurisé ?",
              "a": [
                "wep"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Quel sigle désigne les objets connectés ?",
              "a": [
                "iot"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Pourquoi les objets connectés sont-ils souvent plus vulnérables ?",
              "a": [
                "mots de passe par defaut",
                "peu de mises a jour",
                "manque de mises a jour"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quelle pratique consiste à isoler des services dans un environnement cloisonné ?",
              "a": [
                "sandboxing",
                "isolation",
                "conteneurisation"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quel terme désigne la surface totale exposée aux attaques d'un système ?",
              "a": [
                "surface d attaque"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quelle action régulière corrige les failles connues d'un logiciel ?",
              "a": [
                "mise a jour",
                "mises a jour",
                "patch"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Quel terme désigne une copie de sécurité des données ?",
              "a": [
                "sauvegarde",
                "backup"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Pourquoi une sauvegarde régulière protège-t-elle contre un rançongiciel ?",
              "a": [
                "on peut restaurer les donnees",
                "restauration possible sans payer"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Sur quel port fonctionne POP3 (relève du courrier) ?",
              "a": [
                "110"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Sur quel port fonctionne IMAP ?",
              "a": [
                "143"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Sur quel port fonctionne LDAP ?",
              "a": [
                "389"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Sur quel port fonctionne SNMP ?",
              "a": [
                "161"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Quel protocole, sans connexion, est utilisé par le DNS et le streaming vidéo ?",
              "a": [
                "udp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Quelle adresse MAC est attribuée de façon unique à chaque carte réseau ?",
              "a": [
                "adresse mac",
                "mac"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Quel outil affiche le chemin (les routeurs) emprunté par un paquet jusqu'à une destination ?",
              "a": [
                "traceroute",
                "tracert"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Quel protocole de la couche 2 relie les machines d'un même réseau local filaire ?",
              "a": [
                "ethernet"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Quelle classe d'adresse IPv4 commence par 192.168. et est réservée au privé ?",
              "a": [
                "classe c",
                "reseau prive"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Quel service réseau convertit une adresse IP privée en adresse IP publique (sigle) ?",
              "a": [
                "nat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Quel protocole sécurisé remplace Telnet pour l'administration à distance ?",
              "a": [
                "ssh"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Quel outil capture le trafic réseau en ligne de commande, plus léger que Wireshark ?",
              "a": [
                "tcpdump"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Quelle topologie réseau relie toutes les machines à un point central ?",
              "a": [
                "etoile",
                "topologie en etoile"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Quel est le nom du paquet envoyé pour établir une connexion TCP (3 lettres) ?",
              "a": [
                "syn"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Combien d'échanges comporte la poignée de main TCP (3-way handshake) ?",
              "a": [
                "3",
                "trois"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quel VLAN permet de séparer logiquement un réseau physique unique ?",
              "a": [
                "vlan"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Quel protocole permet de synchroniser l'heure entre machines sur un réseau ?",
              "a": [
                "ntp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Quelle commande Linux affiche les connexions réseau actives et les ports en écoute ?",
              "a": [
                "ss",
                "netstat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Quel service réseau central gère les comptes et droits sur un réseau d'entreprise Windows ?",
              "a": [
                "active directory"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Que signifie le sigle VPN ?",
              "a": [
                "reseau prive virtuel",
                "virtual private network"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Quel est l'intérêt principal d'un VPN pour la sécurité ?",
              "a": [
                "chiffrer le trafic",
                "chiffrement du trafic",
                "confidentialite du trafic"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Combien de caractères hexadécimaux compose une empreinte SHA-1 ?",
              "a": [
                "40"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "SHA-1 est-il aujourd'hui recommandé pour la sécurité ?",
              "a": [
                "non"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Quel algorithme de hachage, lent par conception, est recommandé pour les mots de passe (pas pour l'intégrité de fichiers) ?",
              "a": [
                "bcrypt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-46",
              "q": "Quelle propriété d'une fonction de hachage garantit que deux entrées différentes ne donnent presque jamais la même empreinte ?",
              "a": [
                "resistance aux collisions"
              ],
              "pts": 8
            },
            {
              "id": "quiz-47",
              "q": "Quel protocole utilise un échange de clés pour établir un secret partagé sans le transmettre en clair (2 noms propres) ?",
              "a": [
                "diffie-hellman",
                "diffie hellman"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Atelier pratique : automatise la falsification du cookie",
          "body": "<p>Transforme en script l'attaque manuelle de la tâche précédente. Complète <code>cle_admin</code> avec <code>base64.b64encode(b'admin').decode()</code>, qui encode le mot « admin » exactement comme le ferait ton navigateur.</p>",
          "questions": [
            {
              "id": "exo-auth-auto",
              "q": "Quel flag ton script affiche-t-il ?",
              "a": [
                "seh{cookie_role_modifie_c41d}"
              ],
              "pts": 35,
              "hint": "base64.b64encode(b'admin').decode()"
            }
          ]
        }
      ],
      "code": {
        "lang": "python",
        "starter": "# Automatise la connexion puis la falsification du cookie de rôle.\nimport os, urllib.request, urllib.parse, http.cookiejar, base64, re\n\nbase = os.environ.get('SMITH_BASE', 'http://localhost:3000')\ncj = http.cookiejar.CookieJar()\nopener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))\n\n# 1) Connexion normale en tant que guest\ndonnees = urllib.parse.urlencode({'u': 'guest', 'p': 'guest'}).encode()\nopener.open(base + '/lab/auth/login', data=donnees)\n\n# 2) Complète : encode \"admin\" en base64 pour forger le cookie\ncle_admin = ''\n\nreq = urllib.request.Request(base + '/lab/auth/admin', headers={'Cookie': f'role={cle_admin}'})\nreponse = urllib.request.urlopen(req).read().decode()\nm = re.search(r'SEH\\{[^}]+\\}', reponse)\nprint('Flag obtenu :', m.group(0) if m else 'aucun flag trouve')\n"
      }
    },
    "nmap": {
      "title": "Scanner un réseau avec Nmap",
      "level": "Intermédiaire",
      "min": 25,
      "icon": "🛰️",
      "terminal": "nmap",
      "desc": "Découvre les ports ouverts et les services d'une machine cible.",
      "tasks": [
        {
          "title": "Le scan de ports",
          "body": "<p>Nmap envoie des paquets à une machine pour savoir quels <b>ports</b> sont ouverts et quels <b>services</b> y répondent. Chaque service ouvert est une porte d'entrée possible.</p>\n<p>Dans le terminal simulé, ta cible est <code>192.168.1.10</code>. Commandes : <code>nmap IP</code> (scan simple), <code>nmap -sV IP</code> (détecte les versions).</p>",
          "questions": [
            {
              "id": "ports-ouverts",
              "q": "Combien de ports sont ouverts sur la cible ?",
              "a": [
                "4"
              ],
              "pts": 15,
              "hint": ""
            },
            {
              "id": "mysql",
              "q": "Sur quel port tourne MySQL ?",
              "a": [
                "3306"
              ],
              "pts": 10,
              "hint": ""
            }
          ]
        },
        {
          "title": "Versions et bannières",
          "body": "<p>Connaître la version exacte d'un logiciel permet de chercher ses failles connues. Utilise <code>nmap -sV</code> pour la voir. Le service sur le port 8080 affiche un message curieux dans sa bannière.</p>",
          "questions": [
            {
              "id": "apache",
              "q": "Quelle version d'Apache tourne sur le port 80 ?",
              "a": [
                "2.4.49"
              ],
              "pts": 20,
              "hint": ""
            },
            {
              "id": "flag-nmap",
              "q": "Quel flag la bannière du port 8080 contient-elle ?",
              "a": [
                "seh{nmap_sv_banner_8080}"
              ],
              "pts": 30,
              "hint": ""
            }
          ]
        },
        {
          "title": "Culture cybersécurité (3)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Quel protocole permet de synchroniser l'heure entre machines sur un réseau ?",
              "a": [
                "ntp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Quelle commande Linux affiche les connexions réseau actives et les ports en écoute ?",
              "a": [
                "ss",
                "netstat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Quel service réseau central gère les comptes et droits sur un réseau d'entreprise Windows ?",
              "a": [
                "active directory"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Que signifie le sigle VPN ?",
              "a": [
                "reseau prive virtuel",
                "virtual private network"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Quel est l'intérêt principal d'un VPN pour la sécurité ?",
              "a": [
                "chiffrer le trafic",
                "chiffrement du trafic",
                "confidentialite du trafic"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Combien de caractères hexadécimaux compose une empreinte SHA-1 ?",
              "a": [
                "40"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "SHA-1 est-il aujourd'hui recommandé pour la sécurité ?",
              "a": [
                "non"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Quel algorithme de hachage, lent par conception, est recommandé pour les mots de passe (pas pour l'intégrité de fichiers) ?",
              "a": [
                "bcrypt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Quelle propriété d'une fonction de hachage garantit que deux entrées différentes ne donnent presque jamais la même empreinte ?",
              "a": [
                "resistance aux collisions"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Quel protocole utilise un échange de clés pour établir un secret partagé sans le transmettre en clair (2 noms propres) ?",
              "a": [
                "diffie-hellman",
                "diffie hellman"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Dans HTTPS, quelle clé chiffre les données envoyées au serveur (publique ou privée) ?",
              "a": [
                "publique",
                "clef publique"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Quelle taille de clé AES est aujourd'hui considérée comme très solide (en bits) ?",
              "a": [
                "256"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Quel terme désigne un texte chiffré, par opposition au texte en clair ?",
              "a": [
                "chiffre",
                "texte chiffre",
                "ciphertext"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Quelle attaque consiste à intercepter une communication entre deux parties à leur insu (sigle) ?",
              "a": [
                "mitm",
                "man in the middle",
                "homme du milieu"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Pourquoi ne faut-il jamais inventer son propre algorithme de chiffrement en production ?",
              "a": [
                "non audite",
                "risque de faille",
                "pas audite par des experts"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Quel format de fichier contient une clé privée ou un certificat, reconnaissable à son en-tête \"-----BEGIN\"?",
              "a": [
                "pem"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quelle extension de certificat SSL/TLS valide le nom de domaine du site (abrégé) ?",
              "a": [
                "dv",
                "validation de domaine"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quelle faille du top 10 OWASP concerne une mauvaise configuration du serveur ou de l'application ?",
              "a": [
                "mauvaise configuration de securite",
                "security misconfiguration"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quelle faille permet d'envoyer vers une URL arbitraire choisie par l'attaquant (sigle) ?",
              "a": [
                "ssrf"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Quelle faille consiste à remonter dans l'arborescence des fichiers via ../ ?",
              "a": [
                "traversee de repertoire",
                "path traversal",
                "directory traversal"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Quelle faille permet d'exécuter des commandes systeme via une application web (sigle) ?",
              "a": [
                "rce",
                "execution de code a distance"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Quelle faille vient d'une vérification insuffisante des fichiers uploadés par l'utilisateur ?",
              "a": [
                "upload de fichier malveillant",
                "unrestricted file upload"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Quel en-tête HTTP force l'utilisation exclusive d'HTTPS pour un site (sigle) ?",
              "a": [
                "hsts"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Quelle méthode HTTP sert uniquement à récupérer des données, sans les modifier ?",
              "a": [
                "get"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Quelle méthode HTTP supprime une ressource côté serveur ?",
              "a": [
                "delete"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Quel code HTTP indique une redirection permanente ?",
              "a": [
                "301"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Quel code HTTP indique que l'authentification est requise ?",
              "a": [
                "401"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Quel terme désigne le vol de session via le cookie d'un autre utilisateur ?",
              "a": [
                "vol de session",
                "session hijacking"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Quelle pratique régénère l'identifiant de session après une connexion réussie, pour éviter sa fixation ?",
              "a": [
                "regeneration de session",
                "session regeneration"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Quel outil de navigateur (F12) permet de voir les requêtes réseau et les cookies ?",
              "a": [
                "outils de developpement",
                "devtools",
                "outils developpeur"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Quel format léger est aujourd'hui le plus utilisé pour échanger des données via une API web ?",
              "a": [
                "json"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Quelle pratique de développement consiste à ne jamais faire confiance aux données envoyées par le client ?",
              "a": [
                "validation cote serveur",
                "ne jamais faire confiance au client"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Quel type de 2FA est considéré comme le plus résistant au phishing (clé matérielle) ?",
              "a": [
                "cle de securite",
                "cle u2f",
                "fido"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Pourquoi le SMS est-il un facteur 2FA plus faible que les applications d'authentification ?",
              "a": [
                "sim swap",
                "interception possible",
                "vulnerable au sim swapping"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Quel protocole standard est souvent utilisé pour le SSO en entreprise (sigle, 4 lettres) ?",
              "a": [
                "saml"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Quel protocole d'autorisation déléguée est très utilisé pour \"se connecter avec Google/Facebook\" ?",
              "a": [
                "oauth"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quelle pratique consiste à révoquer immédiatement les accès d'un employé qui quitte l'entreprise ?",
              "a": [
                "revocation des acces",
                "desactivation du compte"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Quel type de contrôle d'accès attribue les droits selon le rôle de l'utilisateur (sigle) ?",
              "a": [
                "rbac"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Comment s'appelle l'arnaque qui cible spécifiquement un dirigeant d'entreprise ?",
              "a": [
                "whaling"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Quelle technique consiste à fouiller les poubelles pour trouver des informations sensibles ?",
              "a": [
                "dumpster diving"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Quelle technique consiste à observer discrètement l'écran ou le clavier de quelqu'un ?",
              "a": [
                "shoulder surfing"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Quel indice visuel, dans un email de phishing, trahit souvent une fausse URL ?",
              "a": [
                "domaine different",
                "faute dans le domaine",
                "domaine suspect"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Pourquoi les attaques de phishing créent-elles souvent un sentiment d'urgence ?",
              "a": [
                "pour empecher de reflechir",
                "pousser a agir vite sans verifier"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Quel type de malware se cache dans le secteur de démarrage ou le noyau, très difficile à détecter ?",
              "a": [
                "rootkit"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Quel type de malware affiche des publicités intrusives ?",
              "a": [
                "adware",
                "logiciel publicitaire"
              ],
              "pts": 8
            },
            {
              "id": "quiz-46",
              "q": "Quelle attaque consiste à insérer un malware dans une mise à jour logicielle légitime ?",
              "a": [
                "attaque de la chaine d approvisionnement",
                "supply chain attack"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Atelier pratique : code ton propre scanner de ports",
          "body": "<p>Nmap fait exactement ça en coulisses : il essaie d'ouvrir une connexion TCP sur chaque port et regarde si ça répond. <code>socket.connect_ex((ip, port))</code> renvoie <code>0</code> si la connexion réussit (port ouvert).</p>\n<p>Complète la boucle pour afficher l'état de chaque port, puis exécute. Le vrai serveur de cette plateforme écoute sur l'un de ces ports : lequel ton scan détecte-t-il comme ouvert ?</p>",
          "questions": [
            {
              "id": "exo-nmap-auto",
              "q": "Quel port ton scanner trouve-t-il ouvert sur 127.0.0.1 ?",
              "a": [
                "3000"
              ],
              "pts": 30,
              "hint": "resultat = s.connect_ex((cible, port)) ; 0 signifie ouvert"
            }
          ]
        }
      ],
      "code": {
        "lang": "python",
        "starter": "# Écris ton propre scanner de ports, comme une version simplifiée de Nmap.\nimport socket\n\ncible = '127.0.0.1'\nports = [21, 22, 80, 3000, 3306, 8080]\n\nfor port in ports:\n    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    s.settimeout(0.5)\n    # Complète : utilise s.connect_ex((cible, port)) pour tester le port\n    # 0 = port ouvert, autre valeur = fermé\n    s.close()\n"
      }
    },
    "phishing": {
      "title": "Phishing et ingénierie sociale",
      "level": "Débutant",
      "min": 15,
      "icon": "🎣",
      "desc": "Reconnaître les faux messages, notamment Mobile Money.",
      "tasks": [
        {
          "title": "Reconnaître un faux message",
          "body": "<p>Le <b>phishing</b> (hameçonnage) imite un organisme de confiance pour te faire cliquer ou donner tes codes. Exemple de SMS :</p>\n<pre>[ORANGE MONEY] Votre compte sera suspendu.\nVérifiez-le ici : https://orange-money.cm.verif-compte.xyz/login</pre>\n<p>Pour lire une URL, repère le <b>domaine principal</b> : c'est la partie juste avant l'extension finale (.com, .cm, .xyz), en lisant de droite à gauche.</p>",
          "questions": [
            {
              "id": "phishing-nom",
              "q": "Comment s'appelle une attaque par faux message imitant une banque ou un opérateur ?",
              "a": [
                "phishing",
                "hameconnage"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "vrai-domaine",
              "q": "Dans l'URL du SMS ci-dessus, quel est le vrai domaine principal ?",
              "a": [
                "verif-compte.xyz"
              ],
              "pts": 20,
              "hint": ""
            }
          ]
        },
        {
          "title": "Se protéger",
          "body": "<p>Ne clique jamais sur un lien reçu par SMS pour te connecter. Active une double authentification : même si on vole ton mot de passe, il manque le second facteur.</p>\n<p>Flag de fin de room : <code>SEH{phishing_vigilance_5e8b}</code></p>",
          "questions": [
            {
              "id": "mfa",
              "q": "Quel sigle désigne la protection par un second facteur (code SMS, application) ?",
              "a": [
                "2fa",
                "mfa",
                "a2f"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "flag-phish",
              "q": "Recopie le flag de fin.",
              "a": [
                "seh{phishing_vigilance_5e8b}"
              ],
              "pts": 20,
              "hint": ""
            }
          ]
        },
        {
          "title": "Culture cybersécurité (3)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Quel type de contrôle d'accès attribue les droits selon le rôle de l'utilisateur (sigle) ?",
              "a": [
                "rbac"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Comment s'appelle l'arnaque qui cible spécifiquement un dirigeant d'entreprise ?",
              "a": [
                "whaling"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Quelle technique consiste à fouiller les poubelles pour trouver des informations sensibles ?",
              "a": [
                "dumpster diving"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Quelle technique consiste à observer discrètement l'écran ou le clavier de quelqu'un ?",
              "a": [
                "shoulder surfing"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Quel indice visuel, dans un email de phishing, trahit souvent une fausse URL ?",
              "a": [
                "domaine different",
                "faute dans le domaine",
                "domaine suspect"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Pourquoi les attaques de phishing créent-elles souvent un sentiment d'urgence ?",
              "a": [
                "pour empecher de reflechir",
                "pousser a agir vite sans verifier"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Quel type de malware se cache dans le secteur de démarrage ou le noyau, très difficile à détecter ?",
              "a": [
                "rootkit"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Quel type de malware affiche des publicités intrusives ?",
              "a": [
                "adware",
                "logiciel publicitaire"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Quelle attaque consiste à insérer un malware dans une mise à jour logicielle légitime ?",
              "a": [
                "attaque de la chaine d approvisionnement",
                "supply chain attack"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Quel terme désigne un groupe d'attaquants menant une attaque furtive et prolongée (sigle) ?",
              "a": [
                "apt"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Quelle mesure technique empêche l'exécution de programmes non autorisés sur un poste ?",
              "a": [
                "liste blanche d applications",
                "application whitelisting"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Que doit-on faire après avoir isolé une machine compromise, avant de la nettoyer ?",
              "a": [
                "collecter les preuves",
                "analyser",
                "investigation"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Quel terme désigne l'empreinte numérique (hash) qui prouve qu'une preuve n'a pas été altérée ?",
              "a": [
                "empreinte d integrite",
                "hash de preuve"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Que signifie l'acronyme SIEM en sécurité ?",
              "a": [
                "gestion des informations et evenements de securite",
                "security information and event management"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Quel document résume les leçons apprises après un incident de sécurité ?",
              "a": [
                "rapport post incident",
                "retour d experience",
                "post mortem"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Quelle commande Linux affiche les derniers processus en cours d'exécution ?",
              "a": [
                "ps",
                "ps aux"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quelle commande Linux affiche les dernières lignes d'un fichier en continu (suivi en direct) ?",
              "a": [
                "tail -f"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quel outil, souvent utilisé avec Burp, intercepte et modifie le trafic entre navigateur et serveur ?",
              "a": [
                "proxy"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quel outil en ligne de commande teste la robustesse d'un mot de passe par force brute sur un service réseau ?",
              "a": [
                "hydra"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Quel outil permet de cartographier visuellement un réseau découvert par Nmap ?",
              "a": [
                "zenmap"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Quel outil, basé sur navigateur, liste les vulnérabilités connues d'un CMS comme WordPress ?",
              "a": [
                "wpscan"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Quel outil capture les mots de passe Wi-Fi en forçant une reconnexion (attaque de désauthentification) ?",
              "a": [
                "aircrack-ng",
                "aircrack"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Quel document définit précisément le périmètre autorisé d'un test d'intrusion (sigle anglais) ?",
              "a": [
                "scope",
                "rules of engagement",
                "roe"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Que doit faire un pentester qui découvre une faille critique en dehors du périmètre autorisé ?",
              "a": [
                "la signaler sans l exploiter",
                "informer le client sans exploiter"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Quel règlement européen protège les données personnelles (sigle) ?",
              "a": [
                "rgpd"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Quelle structure organisationnelle est responsable de la réponse aux incidents de sécurité (sigle) ?",
              "a": [
                "csirt",
                "soc"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Pourquoi la divulgation responsable d'une faille est-elle préférable à sa publication immédiate ?",
              "a": [
                "laisser le temps de corriger",
                "laisser un delai de correction"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Quel terme désigne une récompense offerte à qui trouve une faille et la signale correctement ?",
              "a": [
                "prime aux bugs",
                "bug bounty"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Quel terme désigne l'informatique hébergée chez un prestataire plutôt que sur ses propres serveurs ?",
              "a": [
                "cloud",
                "informatique en nuage"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Quel modèle de responsabilité partagée régit la sécurité dans le cloud (entre client et fournisseur) ?",
              "a": [
                "responsabilite partagee",
                "modele de responsabilite partagee"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Quelle technologie isole une application avec ses dépendances dans un environnement léger ?",
              "a": [
                "conteneur",
                "conteneurisation",
                "docker"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Quel type d'application mobile présente le plus de risques : officielle ou installée hors boutique officielle ?",
              "a": [
                "hors boutique officielle",
                "sideloading"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Quelle pratique de développement consiste à exécuter des tests de sécurité automatisés à chaque modification de code (sigle) ?",
              "a": [
                "devsecops",
                "ci cd securise"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Quel terme désigne la gestion des vulnérabilités en fonction de leur criticité réelle ?",
              "a": [
                "priorisation des vulnerabilites",
                "gestion des risques"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Quelle pratique protège un réseau Wi-Fi en cachant son nom (SSID) ?",
              "a": [
                "masquer le ssid",
                "ssid cache"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Pourquoi masquer le SSID n'est-il pas une vraie mesure de sécurité ?",
              "a": [
                "facilement detectable",
                "contournable",
                "pas vraiment efficace"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Sur quel port fonctionne SSH par défaut ?",
              "a": [
                "22"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Sur quel port fonctionne HTTP par défaut ?",
              "a": [
                "80"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Sur quel port fonctionne HTTPS par défaut ?",
              "a": [
                "443"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Sur quel port fonctionne le DNS ?",
              "a": [
                "53"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Sur quel port fonctionne FTP (commandes) ?",
              "a": [
                "21"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Sur quel port fonctionne Telnet ?",
              "a": [
                "23"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Sur quel port fonctionne SMTP ?",
              "a": [
                "25"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Sur quel port fonctionne RDP (bureau à distance Windows) ?",
              "a": [
                "3389"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Quel protocole traduit un nom de domaine en adresse IP ?",
              "a": [
                "dns"
              ],
              "pts": 8
            },
            {
              "id": "quiz-46",
              "q": "Quel protocole attribue automatiquement une adresse IP sur un réseau ?",
              "a": [
                "dhcp"
              ],
              "pts": 8
            }
          ]
        }
      ]
    },
    "crypto": {
      "title": "Cryptographie de base",
      "level": "Débutant",
      "min": 20,
      "icon": "🔐",
      "desc": "César, Base64, chiffrement symétrique et asymétrique.",
      "tasks": [
        {
          "title": "Encoder ou chiffrer ?",
          "body": "<p>Le <b>chiffre de César</b> décale chaque lettre d'un nombre fixe : avec un décalage de 1, A devient B. Le <b>Base64</b> est un simple encodage pour transporter des octets en texte, sans aucun secret.</p>\n<p>Exercice : décale « Khoor » de 3 lettres vers l'arrière pour le lire.</p>",
          "questions": [
            {
              "id": "cesar-dec",
              "q": "Que donne « Khoor » en reculant de 3 lettres ?",
              "a": [
                "hello"
              ],
              "pts": 15,
              "hint": ""
            },
            {
              "id": "b64-dec",
              "q": "Décode ce Base64 : U21pdGg=",
              "a": [
                "smith"
              ],
              "pts": 15,
              "hint": ""
            }
          ]
        },
        {
          "title": "Symétrique ou asymétrique",
          "body": "<p>Chiffrement <b>symétrique</b> : la même clé chiffre et déchiffre (AES). Rapide, mais il faut partager la clé en secret.</p>\n<p>Chiffrement <b>asymétrique</b> : une clé publique chiffre, une clé privée déchiffre (RSA). C'est la base de HTTPS.</p>",
          "questions": [
            {
              "id": "sym",
              "q": "Quel type de chiffrement utilise la même clé pour chiffrer et déchiffrer ?",
              "a": [
                "symetrique"
              ],
              "pts": 10,
              "hint": ""
            },
            {
              "id": "rsa",
              "q": "Quel algorithme asymétrique très répandu commence par R ?",
              "a": [
                "rsa"
              ],
              "pts": 10,
              "hint": ""
            }
          ]
        },
        {
          "title": "Culture cybersécurité (3)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Sur quel port fonctionne HTTP par défaut ?",
              "a": [
                "80"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Sur quel port fonctionne HTTPS par défaut ?",
              "a": [
                "443"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Sur quel port fonctionne le DNS ?",
              "a": [
                "53"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Sur quel port fonctionne FTP (commandes) ?",
              "a": [
                "21"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Sur quel port fonctionne Telnet ?",
              "a": [
                "23"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Sur quel port fonctionne SMTP ?",
              "a": [
                "25"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Sur quel port fonctionne RDP (bureau à distance Windows) ?",
              "a": [
                "3389"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Quel protocole traduit un nom de domaine en adresse IP ?",
              "a": [
                "dns"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Quel protocole attribue automatiquement une adresse IP sur un réseau ?",
              "a": [
                "dhcp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Combien de couches compte le modèle OSI ?",
              "a": [
                "7",
                "sept"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Quelle couche OSI gère le routage entre réseaux (numéro) ?",
              "a": [
                "3",
                "couche 3",
                "reseau"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Quel protocole de la couche transport garantit la livraison des paquets ?",
              "a": [
                "tcp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Quel protocole de la couche transport est plus rapide mais sans garantie de livraison ?",
              "a": [
                "udp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Quel est le masque réseau correspondant à la notation /24 ?",
              "a": [
                "255.255.255.0"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Combien d'adresses utilisables y a-t-il dans un réseau /24 ?",
              "a": [
                "254"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Quelle commande Windows affiche la configuration réseau ?",
              "a": [
                "ipconfig"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quelle commande Linux affiche la configuration réseau (moderne) ?",
              "a": [
                "ip a",
                "ip addr",
                "ifconfig"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quel outil envoie des paquets pour tester si une machine répond ?",
              "a": [
                "ping"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quel outil scanne les ports ouverts d'une machine ?",
              "a": [
                "nmap"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Quel protocole chiffre les connexions web (sigle) ?",
              "a": [
                "tls",
                "ssl"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Quelle adresse IP désigne toujours la machine locale ?",
              "a": [
                "127.0.0.1",
                "localhost"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Combien de bits compose une adresse IPv4 ?",
              "a": [
                "32"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Combien de bits compose une adresse IPv6 ?",
              "a": [
                "128"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Quel équipement relie plusieurs réseaux différents ?",
              "a": [
                "routeur"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Quel équipement relie des machines au sein d'un même réseau local ?",
              "a": [
                "switch",
                "commutateur"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Combien de caractères hexadécimaux compose une empreinte MD5 ?",
              "a": [
                "32"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Combien de caractères hexadécimaux compose une empreinte SHA-256 ?",
              "a": [
                "64"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Comment s'appelle la valeur aléatoire ajoutée avant de hacher un mot de passe ?",
              "a": [
                "sel",
                "salt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Quel algorithme de chiffrement asymétrique très répandu commence par R ?",
              "a": [
                "rsa"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Quel algorithme de chiffrement symétrique est aujourd'hui le standard (sigle) ?",
              "a": [
                "aes"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Le chiffrement symétrique utilise combien de clés différentes ?",
              "a": [
                "1",
                "une"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Le chiffrement asymétrique utilise combien de clés différentes ?",
              "a": [
                "2",
                "deux"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Quel encodage transforme des données en texte lisible mais n'est pas un chiffrement ?",
              "a": [
                "base64"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Dans un chiffre de César avec un décalage de 13, comment s'appelle ce cas particulier ?",
              "a": [
                "rot13"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Quelle opération binaire, appliquée deux fois avec la même clé, redonne le texte original ?",
              "a": [
                "xor"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Quel protocole garantit l'authenticité et l'intégrité d'un site web via un certificat ?",
              "a": [
                "tls",
                "ssl",
                "https"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Qui délivre les certificats utilisés en HTTPS (sigle) ?",
              "a": [
                "ac",
                "autorite de certification",
                "ca"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Peut-on « déchiffrer » une empreinte de hachage pour retrouver le mot de passe original ?",
              "a": [
                "non"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Quel est le nom de l'attaque qui teste tous les mots d'une liste pour casser un mot de passe ?",
              "a": [
                "attaque par dictionnaire",
                "dictionnaire"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Quel est le nom de l'attaque qui teste toutes les combinaisons possibles ?",
              "a": [
                "force brute",
                "attaque par force brute"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Quelle table précalculée accélère la cassage de hachages non salés ?",
              "a": [
                "table arc en ciel",
                "rainbow table"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Quel sigle désigne le top 10 des failles web les plus critiques, publié régulièrement ?",
              "a": [
                "owasp top 10",
                "owasp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Quelle faille permet d'injecter du code SQL dans une requête ?",
              "a": [
                "injection sql",
                "sqli"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Quelle faille permet d'injecter du JavaScript exécuté dans le navigateur d'un autre utilisateur ?",
              "a": [
                "xss"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Quel sigle désigne l'accès à un objet via son identifiant sans contrôle d'autorisation ?",
              "a": [
                "idor"
              ],
              "pts": 8
            },
            {
              "id": "quiz-46",
              "q": "Quel sigle désigne une requête forgée qui utilise la session d'une victime à son insu ?",
              "a": [
                "csrf"
              ],
              "pts": 8
            }
          ]
        }
      ]
    },
    "sqli-union": {
      "title": "Injection SQL avancée (UNION)",
      "level": "Avancé",
      "min": 35,
      "icon": "🧬",
      "lab": "sqli-union",
      "desc": "Extrais des données d'une autre table grâce à UNION SELECT, sans aucun mot de passe.",
      "tasks": [
        {
          "title": "Compter les colonnes",
          "body": "<p>Avant d'utiliser <code>UNION SELECT</code>, la requête injectée doit renvoyer le <b>même nombre de colonnes</b> que la requête d'origine, sinon la base refuse.</p>\n<p>Technique : ajoute <code>' ORDER BY N--</code> en augmentant N jusqu'à obtenir une erreur. Le lab à droite est un catalogue de produits, recherche via <code>/lab/sqli-union?q=...</code>.</p>",
          "questions": [
            {
              "id": "nb-col",
              "q": "Combien de colonnes la requête renvoie-t-elle ?",
              "a": [
                "3"
              ],
              "pts": 20,
              "hint": "Teste ' ORDER BY 1--, puis 2, puis 3, puis 4 dans le champ de recherche."
            }
          ]
        },
        {
          "title": "Lister les tables",
          "body": "<p>Beaucoup de bases stockent la liste de leurs tables dans <code>information_schema.tables</code>. Essaie :</p>\n<pre>' UNION SELECT 1,table_name,3 FROM information_schema.tables--</pre>",
          "questions": [
            {
              "id": "table-secrete",
              "q": "Quel est le nom de la table qui ne ressemble pas à un produit ?",
              "a": [
                "utilisateurs_secrets"
              ],
              "pts": 30,
              "hint": ""
            }
          ]
        },
        {
          "title": "Extraire la donnée",
          "body": "<p>Maintenant interroge directement cette table avec <code>UNION SELECT</code> pour en lire le contenu.</p>",
          "questions": [
            {
              "id": "flag-union",
              "q": "Quel flag contient cette table ?",
              "a": [
                "seh{union_select_extraction_totale}"
              ],
              "pts": 50,
              "hint": "' UNION SELECT 1,flag,3 FROM utilisateurs_secrets--"
            }
          ]
        },
        {
          "title": "Atelier pratique : automatise l'extraction UNION",
          "body": "<p>Transforme l'attaque manuelle de la tâche précédente en script réutilisable. Complète la variable <code>q</code> avec la même charge utile <code>UNION SELECT</code> que tu as utilisée dans le formulaire, puis exécute.</p>\n<p>Un vrai attaquant automatiserait ensuite ce script pour tester plusieurs tables à la suite.</p>",
          "questions": [
            {
              "id": "exo-union-auto",
              "q": "Quel flag ton script extrait-il ?",
              "a": [
                "seh{union_select_extraction_totale}"
              ],
              "pts": 40,
              "hint": "' UNION SELECT 1,flag,3 FROM utilisateurs_secrets--"
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Peut-on « déchiffrer » une empreinte de hachage pour retrouver le mot de passe original ?",
              "a": [
                "non"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Quel est le nom de l'attaque qui teste tous les mots d'une liste pour casser un mot de passe ?",
              "a": [
                "attaque par dictionnaire",
                "dictionnaire"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Quel est le nom de l'attaque qui teste toutes les combinaisons possibles ?",
              "a": [
                "force brute",
                "attaque par force brute"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Quelle table précalculée accélère la cassage de hachages non salés ?",
              "a": [
                "table arc en ciel",
                "rainbow table"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Quel sigle désigne le top 10 des failles web les plus critiques, publié régulièrement ?",
              "a": [
                "owasp top 10",
                "owasp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Quelle faille permet d'injecter du code SQL dans une requête ?",
              "a": [
                "injection sql",
                "sqli"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Quelle faille permet d'injecter du JavaScript exécuté dans le navigateur d'un autre utilisateur ?",
              "a": [
                "xss"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Quel sigle désigne l'accès à un objet via son identifiant sans contrôle d'autorisation ?",
              "a": [
                "idor"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Quel sigle désigne une requête forgée qui utilise la session d'une victime à son insu ?",
              "a": [
                "csrf"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Quel en-tête HTTP de réponse crée un cookie ?",
              "a": [
                "set-cookie"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Quel attribut de cookie empêche JavaScript de le lire ?",
              "a": [
                "httponly"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Quel attribut de cookie empêche son envoi sur une connexion non chiffrée ?",
              "a": [
                "secure"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Quelle méthode HTTP sert à envoyer les données d'un formulaire ?",
              "a": [
                "post"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Quel code HTTP signifie « page introuvable » ?",
              "a": [
                "404"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Quel code HTTP signifie « accès interdit » ?",
              "a": [
                "403"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Quel code HTTP signifie « succès » ?",
              "a": [
                "200"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quel code HTTP signifie « erreur interne du serveur » ?",
              "a": [
                "500"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quelles requêtes SQL séparent le code des données pour éviter les injections ?",
              "a": [
                "requetes preparees",
                "requete preparee",
                "requetes parametrees"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quelle opération neutralise les caractères spéciaux avant affichage pour éviter le XSS ?",
              "a": [
                "echappement",
                "echapper",
                "escaping"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Quel fichier à la racine d'un site indique aux robots les pages à ne pas indexer ?",
              "a": [
                "robots.txt"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Quel format de jeton d'authentification, en 3 parties séparées par des points, est très utilisé sur le web ?",
              "a": [
                "jwt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Dans un JWT, quel champ de l'en-tête indique l'algorithme de signature ?",
              "a": [
                "alg"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Quelle extension de sécurité HTTP empêche l'affichage du site dans une iframe malveillante ?",
              "a": [
                "x-frame-options"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Quel en-tête HTTP aide à limiter les scripts autorisés à s'exécuter sur une page (sigle) ?",
              "a": [
                "csp",
                "content security policy"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Quel sigle désigne la double authentification ?",
              "a": [
                "2fa",
                "mfa",
                "a2f"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Que doit vérifier un serveur avant de renvoyer une ressource appartenant à un utilisateur ?",
              "a": [
                "le proprietaire",
                "proprietaire",
                "autorisation",
                "les droits"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Quel principe de sécurité consiste à ne donner que les droits strictement nécessaires ?",
              "a": [
                "moindre privilege",
                "principe du moindre privilege"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Comment s'appelle une connexion unique donnant accès à plusieurs services (sigle) ?",
              "a": [
                "sso"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Quelle pratique consiste à changer régulièrement et à ne jamais réutiliser ses mots de passe ?",
              "a": [
                "hygiene des mots de passe",
                "bonne pratique"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Quel outil permet de stocker ses mots de passe de façon chiffrée ?",
              "a": [
                "gestionnaire de mots de passe"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (8)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Quelle protection limite le nombre de tentatives de connexion échouées ?",
              "a": [
                "limitation du nombre de tentatives",
                "limitation de tentatives",
                "blocage apres plusieurs essais",
                "rate limiting",
                "verrouillage du compte"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Comment s'appelle une attaque qui imite un organisme de confiance pour voler des informations ?",
              "a": [
                "phishing",
                "hameconnage"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Comment s'appelle le phishing ciblé sur une personne précise ?",
              "a": [
                "spear phishing"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Comment s'appelle le phishing réalisé par téléphone ?",
              "a": [
                "vishing"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Comment s'appelle le phishing réalisé par SMS ?",
              "a": [
                "smishing"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Quelle technique consiste à manipuler une personne plutôt qu'une machine pour obtenir un accès ?",
              "a": [
                "ingenierie sociale",
                "social engineering"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quelle technique consiste à suivre quelqu'un dans un bâtiment sécurisé sans badge ?",
              "a": [
                "tailgating"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Que faut-il éviter de faire avec un lien reçu par SMS demandant de se connecter en urgence ?",
              "a": [
                "cliquer",
                "ne pas cliquer"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Quel type de logiciel malveillant se fait passer pour un programme légitime ?",
              "a": [
                "cheval de troie",
                "trojan"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Quel type de logiciel malveillant chiffre les fichiers et demande une rançon ?",
              "a": [
                "rancongiciel",
                "ransomware"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (9)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Quel type de logiciel malveillant se propage automatiquement sans intervention humaine ?",
              "a": [
                "ver",
                "worm"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Quel type de logiciel espionne discrètement l'activité de l'utilisateur ?",
              "a": [
                "logiciel espion",
                "spyware"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Quel type de malware enregistre les frappes clavier ?",
              "a": [
                "enregistreur de frappe",
                "keylogger"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Comment s'appelle un réseau de machines infectées contrôlées à distance ?",
              "a": [
                "botnet"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Quelle attaque vise à rendre un service indisponible en le saturant de trafic (sigle) ?",
              "a": [
                "ddos",
                "dos"
              ],
              "pts": 8
            },
            {
              "id": "quiz-46",
              "q": "Comment s'appelle une faille exploitée avant même qu'un correctif existe ?",
              "a": [
                "faille zero day",
                "zero day",
                "0day"
              ],
              "pts": 8
            }
          ]
        }
      ],
      "code": {
        "lang": "python",
        "starter": "# Automatise l'extraction de données par injection UNION.\nimport os, urllib.request, urllib.parse, re\n\nbase = os.environ.get('SMITH_BASE', 'http://localhost:3000')\n\n# Complète la charge utile UNION SELECT pour extraire le flag de la table utilisateurs_secrets\nq = \"\"\n\nurl = base + '/lab/sqli-union?' + urllib.parse.urlencode({'q': q})\nreponse = urllib.request.urlopen(url).read().decode()\nm = re.search(r'SEH\\{[^}]+\\}', reponse)\nprint('Flag extrait :', m.group(0) if m else 'aucun flag trouve')\n"
      }
    },
    "jwt": {
      "title": "Jetons JWT falsifiés",
      "level": "Avancé",
      "min": 35,
      "icon": "🪪",
      "lab": "jwt",
      "desc": "Modifie un jeton d'authentification mal vérifié pour devenir administrateur.",
      "tasks": [
        {
          "title": "Anatomie d'un JWT",
          "body": "<p>Un JWT a 3 parties séparées par des points : <code>en-tête.charge_utile.signature</code>, chacune encodée en Base64URL. La charge utile contient les informations (ex. <code>{\"role\":\"client\"}</code>) et n'est <b>pas chiffrée</b>, seulement encodée : n'importe qui peut la lire.</p>\n<p>La signature prouve que le serveur n'a pas été trompé... sauf si le serveur ne la vérifie pas vraiment.</p>",
          "questions": [
            {
              "id": "partie-lisible",
              "q": "Laquelle des 3 parties d'un JWT peut-on lire sans la clé secrète ?",
              "a": [
                "la charge utile",
                "charge utile",
                "payload",
                "la 2",
                "la deuxieme"
              ],
              "pts": 15,
              "hint": ""
            }
          ]
        },
        {
          "title": "L'algorithme « none »",
          "body": "<p>Le lab à droite accepte un JWT dont l'en-tête annonce l'algorithme <code>none</code> (aucune signature). Connecte-toi avec <code>client</code> / <code>client</code>, récupère ton jeton, puis fabrique-en un nouveau : en-tête <code>{\"alg\":\"none\",\"typ\":\"JWT\"}</code>, charge utile avec <code>\"role\":\"admin\"</code>, et une signature vide.</p>\n<p>Un script Node, Python, ou un site de décodage JWT en ligne t'aide à construire les parties encodées.</p>",
          "questions": [
            {
              "id": "flag-jwt",
              "q": "Quel flag la page /lab/jwt/admin affiche-t-elle avec ton jeton modifié ?",
              "a": [
                "seh{jwt_alg_none_accepte}"
              ],
              "pts": 50,
              "hint": ""
            }
          ]
        },
        {
          "title": "Se protéger",
          "body": "<p>Un serveur sérieux doit imposer la liste des algorithmes acceptés et ne jamais faire confiance à l'en-tête du jeton pour choisir comment le vérifier.</p>",
          "questions": []
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Que faut-il éviter de faire avec un lien reçu par SMS demandant de se connecter en urgence ?",
              "a": [
                "cliquer",
                "ne pas cliquer"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Quel type de logiciel malveillant se fait passer pour un programme légitime ?",
              "a": [
                "cheval de troie",
                "trojan"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Quel type de logiciel malveillant chiffre les fichiers et demande une rançon ?",
              "a": [
                "rancongiciel",
                "ransomware"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Quel type de logiciel malveillant se propage automatiquement sans intervention humaine ?",
              "a": [
                "ver",
                "worm"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Quel type de logiciel espionne discrètement l'activité de l'utilisateur ?",
              "a": [
                "logiciel espion",
                "spyware"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Quel type de malware enregistre les frappes clavier ?",
              "a": [
                "enregistreur de frappe",
                "keylogger"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Comment s'appelle un réseau de machines infectées contrôlées à distance ?",
              "a": [
                "botnet"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Quelle attaque vise à rendre un service indisponible en le saturant de trafic (sigle) ?",
              "a": [
                "ddos",
                "dos"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Comment s'appelle une faille exploitée avant même qu'un correctif existe ?",
              "a": [
                "faille zero day",
                "zero day",
                "0day"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Quelle commande Linux compte les lignes d'un fichier ?",
              "a": [
                "wc -l"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Quelle commande Linux recherche un motif dans un fichier texte ?",
              "a": [
                "grep"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Que doit-on faire en priorité face à une machine compromise avant d'investiguer ?",
              "a": [
                "l isoler du reseau",
                "isoler la machine",
                "isolement"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Comment s'appelle le document qui retrace chaque manipulation d'une preuve numérique ?",
              "a": [
                "chaine de possession",
                "chain of custody"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Quel type de fichier garde la trace des événements d'un système ou d'une application ?",
              "a": [
                "journal",
                "log",
                "fichier de log"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Que signifie l'acronyme IOC utilisé en réponse à incident ?",
              "a": [
                "indicateur de compromission",
                "indicator of compromise"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Quel outil, en ligne de commande, scanne les ports et services réseau ?",
              "a": [
                "nmap"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quel outil capture et analyse le trafic réseau en détail ?",
              "a": [
                "wireshark"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quel proxy est très utilisé pour intercepter et modifier les requêtes web lors d'un test d'intrusion ?",
              "a": [
                "burp suite",
                "burp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quel outil teste automatiquement les failles d'injection SQL ?",
              "a": [
                "sqlmap"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Quelle distribution Linux est spécialisée dans les tests d'intrusion ?",
              "a": [
                "kali linux",
                "kali"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Quel outil, basé sur des exploits prêts à l'emploi, est un cadre d'exploitation très utilisé (2 mots) ?",
              "a": [
                "metasploit"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Un hacker éthique doit obtenir quoi avant de tester un système ?",
              "a": [
                "une autorisation",
                "autorisation ecrite",
                "autorisation"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Comment s'appelle un document qui autorise formellement un test d'intrusion ?",
              "a": [
                "lettre d autorisation",
                "accord ecrit",
                "contrat de pentest"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Quelle couleur de chapeau porte un hacker qui agit avec autorisation pour protéger ?",
              "a": [
                "blanc",
                "chapeau blanc",
                "white hat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Quelle couleur de chapeau porte un hacker qui attaque sans autorisation ?",
              "a": [
                "noir",
                "chapeau noir",
                "black hat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Que risque-t-on légalement à attaquer un système sans autorisation, même « pour s'entraîner » ?",
              "a": [
                "des poursuites",
                "sanctions penales",
                "risques legaux"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Quel principe de sécurité repose sur confidentialité, intégrité et disponibilité (sigle) ?",
              "a": [
                "cia",
                "dic"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Laquelle de ces propriétés garantit que seules les personnes autorisées accèdent à l'information ?",
              "a": [
                "confidentialite"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Laquelle de ces propriétés garantit que l'information n'est pas modifiée sans autorisation ?",
              "a": [
                "integrite"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Laquelle de ces propriétés garantit l'accès au service quand on en a besoin ?",
              "a": [
                "disponibilite"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Quel protocole de sécurité Wi-Fi est aujourd'hui recommandé, succédant au WPA2 ?",
              "a": [
                "wpa3"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Quel protocole Wi-Fi ancien est aujourd'hui considéré comme non sécurisé ?",
              "a": [
                "wep"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Quel sigle désigne les objets connectés ?",
              "a": [
                "iot"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Pourquoi les objets connectés sont-ils souvent plus vulnérables ?",
              "a": [
                "mots de passe par defaut",
                "peu de mises a jour",
                "manque de mises a jour"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Quelle pratique consiste à isoler des services dans un environnement cloisonné ?",
              "a": [
                "sandboxing",
                "isolation",
                "conteneurisation"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Quel terme désigne la surface totale exposée aux attaques d'un système ?",
              "a": [
                "surface d attaque"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quelle action régulière corrige les failles connues d'un logiciel ?",
              "a": [
                "mise a jour",
                "mises a jour",
                "patch"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Quel terme désigne une copie de sécurité des données ?",
              "a": [
                "sauvegarde",
                "backup"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Pourquoi une sauvegarde régulière protège-t-elle contre un rançongiciel ?",
              "a": [
                "on peut restaurer les donnees",
                "restauration possible sans payer"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Sur quel port fonctionne POP3 (relève du courrier) ?",
              "a": [
                "110"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (8)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Sur quel port fonctionne IMAP ?",
              "a": [
                "143"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Sur quel port fonctionne LDAP ?",
              "a": [
                "389"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Sur quel port fonctionne SNMP ?",
              "a": [
                "161"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Quel protocole, sans connexion, est utilisé par le DNS et le streaming vidéo ?",
              "a": [
                "udp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Quelle adresse MAC est attribuée de façon unique à chaque carte réseau ?",
              "a": [
                "adresse mac",
                "mac"
              ],
              "pts": 8
            },
            {
              "id": "quiz-46",
              "q": "Quel outil affiche le chemin (les routeurs) emprunté par un paquet jusqu'à une destination ?",
              "a": [
                "traceroute",
                "tracert"
              ],
              "pts": 8
            },
            {
              "id": "quiz-47",
              "q": "Quel protocole de la couche 2 relie les machines d'un même réseau local filaire ?",
              "a": [
                "ethernet"
              ],
              "pts": 8
            },
            {
              "id": "quiz-48",
              "q": "Quelle classe d'adresse IPv4 commence par 192.168. et est réservée au privé ?",
              "a": [
                "classe c",
                "reseau prive"
              ],
              "pts": 8
            }
          ]
        }
      ]
    },
    "privesc": {
      "title": "Élévation de privilèges Linux",
      "level": "Avancé",
      "min": 35,
      "icon": "🧗",
      "terminal": "privesc",
      "desc": "Depuis un compte limité, trouve comment devenir root sur une machine mal configurée.",
      "tasks": [
        {
          "title": "Chercher les erreurs de configuration",
          "body": "<p>Sur une machine, un compte limité peut parfois devenir root si l'administrateur a mal configuré un programme. Première piste classique : les droits <code>sudo</code> accordés sans mot de passe sur certaines commandes.</p>\n<p>Dans le terminal, tape <code>sudo -l</code> pour voir ce que tu peux exécuter en administrateur.</p>",
          "questions": [
            {
              "id": "sudo-cmd",
              "q": "Quelle commande peux-tu exécuter avec sudo sans mot de passe ?",
              "a": [
                "/usr/bin/vi",
                "vi",
                "/usr/bin/vi /etc/motd"
              ],
              "pts": 20,
              "hint": ""
            }
          ]
        },
        {
          "title": "Exploiter vi en root",
          "body": "<p>Beaucoup d'éditeurs de texte (vi, vim, less, more) permettent d'ouvrir un terminal depuis l'intérieur. Si on les lance en <code>sudo</code>, ce terminal est aussi root.</p>\n<p>Dans ce terminal simulé, lance <code>sudo vi /etc/motd</code> puis tape la commande <code>:shell</code>.</p>",
          "questions": [
            {
              "id": "whoami-root",
              "q": "whoami affiche quoi une fois le shell obtenu ?",
              "a": [
                "root"
              ],
              "pts": 20,
              "hint": ""
            },
            {
              "id": "flag-privesc",
              "q": "Quel flag trouves-tu dans /root/flag.txt ?",
              "a": [
                "seh{privesc_sudo_vi_root}"
              ],
              "pts": 50,
              "hint": "cat /root/flag.txt une fois root."
            }
          ]
        },
        {
          "title": "Culture cybersécurité (3)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Quel terme désigne une copie de sécurité des données ?",
              "a": [
                "sauvegarde",
                "backup"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Pourquoi une sauvegarde régulière protège-t-elle contre un rançongiciel ?",
              "a": [
                "on peut restaurer les donnees",
                "restauration possible sans payer"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Sur quel port fonctionne POP3 (relève du courrier) ?",
              "a": [
                "110"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Sur quel port fonctionne IMAP ?",
              "a": [
                "143"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Sur quel port fonctionne LDAP ?",
              "a": [
                "389"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Sur quel port fonctionne SNMP ?",
              "a": [
                "161"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Quel protocole, sans connexion, est utilisé par le DNS et le streaming vidéo ?",
              "a": [
                "udp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Quelle adresse MAC est attribuée de façon unique à chaque carte réseau ?",
              "a": [
                "adresse mac",
                "mac"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Quel outil affiche le chemin (les routeurs) emprunté par un paquet jusqu'à une destination ?",
              "a": [
                "traceroute",
                "tracert"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Quel protocole de la couche 2 relie les machines d'un même réseau local filaire ?",
              "a": [
                "ethernet"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Quelle classe d'adresse IPv4 commence par 192.168. et est réservée au privé ?",
              "a": [
                "classe c",
                "reseau prive"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Quel service réseau convertit une adresse IP privée en adresse IP publique (sigle) ?",
              "a": [
                "nat"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Quel protocole sécurisé remplace Telnet pour l'administration à distance ?",
              "a": [
                "ssh"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Quel outil capture le trafic réseau en ligne de commande, plus léger que Wireshark ?",
              "a": [
                "tcpdump"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Quelle topologie réseau relie toutes les machines à un point central ?",
              "a": [
                "etoile",
                "topologie en etoile"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Quel est le nom du paquet envoyé pour établir une connexion TCP (3 lettres) ?",
              "a": [
                "syn"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Combien d'échanges comporte la poignée de main TCP (3-way handshake) ?",
              "a": [
                "3",
                "trois"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quel VLAN permet de séparer logiquement un réseau physique unique ?",
              "a": [
                "vlan"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quel protocole permet de synchroniser l'heure entre machines sur un réseau ?",
              "a": [
                "ntp"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Quelle commande Linux affiche les connexions réseau actives et les ports en écoute ?",
              "a": [
                "ss",
                "netstat"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Quel service réseau central gère les comptes et droits sur un réseau d'entreprise Windows ?",
              "a": [
                "active directory"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Que signifie le sigle VPN ?",
              "a": [
                "reseau prive virtuel",
                "virtual private network"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Quel est l'intérêt principal d'un VPN pour la sécurité ?",
              "a": [
                "chiffrer le trafic",
                "chiffrement du trafic",
                "confidentialite du trafic"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Combien de caractères hexadécimaux compose une empreinte SHA-1 ?",
              "a": [
                "40"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "SHA-1 est-il aujourd'hui recommandé pour la sécurité ?",
              "a": [
                "non"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Quel algorithme de hachage, lent par conception, est recommandé pour les mots de passe (pas pour l'intégrité de fichiers) ?",
              "a": [
                "bcrypt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Quelle propriété d'une fonction de hachage garantit que deux entrées différentes ne donnent presque jamais la même empreinte ?",
              "a": [
                "resistance aux collisions"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Quel protocole utilise un échange de clés pour établir un secret partagé sans le transmettre en clair (2 noms propres) ?",
              "a": [
                "diffie-hellman",
                "diffie hellman"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Dans HTTPS, quelle clé chiffre les données envoyées au serveur (publique ou privée) ?",
              "a": [
                "publique",
                "clef publique"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Quelle taille de clé AES est aujourd'hui considérée comme très solide (en bits) ?",
              "a": [
                "256"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Quel terme désigne un texte chiffré, par opposition au texte en clair ?",
              "a": [
                "chiffre",
                "texte chiffre",
                "ciphertext"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Quelle attaque consiste à intercepter une communication entre deux parties à leur insu (sigle) ?",
              "a": [
                "mitm",
                "man in the middle",
                "homme du milieu"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Pourquoi ne faut-il jamais inventer son propre algorithme de chiffrement en production ?",
              "a": [
                "non audite",
                "risque de faille",
                "pas audite par des experts"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Quel format de fichier contient une clé privée ou un certificat, reconnaissable à son en-tête \"-----BEGIN\"?",
              "a": [
                "pem"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Quelle extension de certificat SSL/TLS valide le nom de domaine du site (abrégé) ?",
              "a": [
                "dv",
                "validation de domaine"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Quelle faille du top 10 OWASP concerne une mauvaise configuration du serveur ou de l'application ?",
              "a": [
                "mauvaise configuration de securite",
                "security misconfiguration"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quelle faille permet d'envoyer vers une URL arbitraire choisie par l'attaquant (sigle) ?",
              "a": [
                "ssrf"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Quelle faille consiste à remonter dans l'arborescence des fichiers via ../ ?",
              "a": [
                "traversee de repertoire",
                "path traversal",
                "directory traversal"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Quelle faille permet d'exécuter des commandes systeme via une application web (sigle) ?",
              "a": [
                "rce",
                "execution de code a distance"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Quelle faille vient d'une vérification insuffisante des fichiers uploadés par l'utilisateur ?",
              "a": [
                "upload de fichier malveillant",
                "unrestricted file upload"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Quel en-tête HTTP force l'utilisation exclusive d'HTTPS pour un site (sigle) ?",
              "a": [
                "hsts"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Quelle méthode HTTP sert uniquement à récupérer des données, sans les modifier ?",
              "a": [
                "get"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Quelle méthode HTTP supprime une ressource côté serveur ?",
              "a": [
                "delete"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Quel code HTTP indique une redirection permanente ?",
              "a": [
                "301"
              ],
              "pts": 8
            },
            {
              "id": "quiz-45",
              "q": "Quel code HTTP indique que l'authentification est requise ?",
              "a": [
                "401"
              ],
              "pts": 8
            },
            {
              "id": "quiz-46",
              "q": "Quel terme désigne le vol de session via le cookie d'un autre utilisateur ?",
              "a": [
                "vol de session",
                "session hijacking"
              ],
              "pts": 8
            },
            {
              "id": "quiz-47",
              "q": "Quelle pratique régénère l'identifiant de session après une connexion réussie, pour éviter sa fixation ?",
              "a": [
                "regeneration de session",
                "session regeneration"
              ],
              "pts": 8
            }
          ]
        }
      ]
    },
    "forensic-logs": {
      "title": "Enquête dans des journaux",
      "level": "Avancé",
      "min": 30,
      "icon": "🕵️",
      "desc": "Analyse un extrait de journal d'accès pour retrouver un attaquant.",
      "tasks": [
        {
          "title": "Lire un journal web",
          "body": "<p>Un journal (log) d'accès web contient : adresse IP, date, requête, code de réponse. Exemple d'une ligne :</p>\n<pre>41.202.12.5 - - [12/Nov/2026:10:01:12] \"GET /login.php?user=admin HTTP/1.1\" 200</pre>\n<p>Voici un extrait suspect du journal d'un site :</p>\n<pre>102.68.14.9 - - [14/Nov/2026:08:00:01] \"GET /index.php HTTP/1.1\" 200\n102.68.14.9 - - [14/Nov/2026:08:00:04] \"GET /login.php?user=admin&pass=admin HTTP/1.1\" 401\n102.68.14.9 - - [14/Nov/2026:08:00:05] \"GET /login.php?user=admin&pass=123456 HTTP/1.1\" 401\n102.68.14.9 - - [14/Nov/2026:08:00:06] \"GET /login.php?user=admin&pass=password HTTP/1.1\" 401\n102.68.14.9 - - [14/Nov/2026:08:00:07] \"GET /login.php?user=admin&pass=azerty HTTP/1.1\" 401\n102.68.14.9 - - [14/Nov/2026:08:00:08] \"GET /login.php?user=admin&pass=admin123 HTTP/1.1\" 200\n102.68.14.9 - - [14/Nov/2026:08:00:15] \"GET /admin/export.php?table=utilisateurs HTTP/1.1\" 200</pre>",
          "questions": [
            {
              "id": "attaque-nom",
              "q": "Comment s'appelle une attaque qui essaie plein de mots de passe à la suite sur le même compte ?",
              "a": [
                "attaque par dictionnaire",
                "brute force",
                "force brute",
                "attaque brute force"
              ],
              "pts": 20,
              "hint": ""
            },
            {
              "id": "ip-attaquant",
              "q": "Quelle est l'adresse IP de l'attaquant ?",
              "a": [
                "102.68.14.9"
              ],
              "pts": 15,
              "hint": ""
            },
            {
              "id": "mdp-trouve",
              "q": "Quel mot de passe a finalement fonctionné ?",
              "a": [
                "admin123"
              ],
              "pts": 15,
              "hint": ""
            },
            {
              "id": "donnee-volee",
              "q": "Quelle table de données a été exportée après le piratage ?",
              "a": [
                "utilisateurs"
              ],
              "pts": 20,
              "hint": ""
            }
          ]
        },
        {
          "title": "Proposer une parade",
          "body": "<p>Une seule mesure simple aurait arrêté cette attaque bien avant la 6ᵉ tentative.</p>",
          "questions": [
            {
              "id": "parade",
              "q": "Quelle protection limite le nombre de tentatives de connexion échouées ?",
              "a": [
                "limitation du nombre de tentatives",
                "limitation de tentatives",
                "blocage apres plusieurs essais",
                "rate limiting",
                "verrouillage du compte"
              ],
              "pts": 25,
              "hint": ""
            }
          ]
        },
        {
          "title": "Atelier pratique : automatise l'analyse du journal",
          "body": "<p>Un analyste en sécurité ne compte pas les lignes à la main : il écrit un script. Complète celui-ci pour qu'il compte, par IP, le nombre de tentatives de connexion échouées, puis affiche l'IP la plus suspecte.</p>\n<p>Indice : <code>ligne.split('ip=')[1]</code> récupère l'IP en fin de ligne. Le module <code>collections.Counter</code> compte automatiquement les occurrences.</p>",
          "questions": [
            {
              "id": "exo-log-auto",
              "q": "Quelle IP ton script identifie-t-il comme la plus suspecte ?",
              "a": [
                "102.91.7.4"
              ],
              "pts": 30,
              "hint": "compteur[ip] += 1, puis compteur.most_common(1)"
            }
          ]
        },
        {
          "title": "Culture cybersécurité (4)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-1",
              "q": "Quelle faille consiste à remonter dans l'arborescence des fichiers via ../ ?",
              "a": [
                "traversee de repertoire",
                "path traversal",
                "directory traversal"
              ],
              "pts": 8
            },
            {
              "id": "quiz-2",
              "q": "Quelle faille permet d'exécuter des commandes systeme via une application web (sigle) ?",
              "a": [
                "rce",
                "execution de code a distance"
              ],
              "pts": 8
            },
            {
              "id": "quiz-3",
              "q": "Quelle faille vient d'une vérification insuffisante des fichiers uploadés par l'utilisateur ?",
              "a": [
                "upload de fichier malveillant",
                "unrestricted file upload"
              ],
              "pts": 8
            },
            {
              "id": "quiz-4",
              "q": "Quel en-tête HTTP force l'utilisation exclusive d'HTTPS pour un site (sigle) ?",
              "a": [
                "hsts"
              ],
              "pts": 8
            },
            {
              "id": "quiz-5",
              "q": "Quelle méthode HTTP sert uniquement à récupérer des données, sans les modifier ?",
              "a": [
                "get"
              ],
              "pts": 8
            },
            {
              "id": "quiz-6",
              "q": "Quelle méthode HTTP supprime une ressource côté serveur ?",
              "a": [
                "delete"
              ],
              "pts": 8
            },
            {
              "id": "quiz-7",
              "q": "Quel code HTTP indique une redirection permanente ?",
              "a": [
                "301"
              ],
              "pts": 8
            },
            {
              "id": "quiz-8",
              "q": "Quel code HTTP indique que l'authentification est requise ?",
              "a": [
                "401"
              ],
              "pts": 8
            },
            {
              "id": "quiz-9",
              "q": "Quel terme désigne le vol de session via le cookie d'un autre utilisateur ?",
              "a": [
                "vol de session",
                "session hijacking"
              ],
              "pts": 8
            },
            {
              "id": "quiz-10",
              "q": "Quelle pratique régénère l'identifiant de session après une connexion réussie, pour éviter sa fixation ?",
              "a": [
                "regeneration de session",
                "session regeneration"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (5)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-11",
              "q": "Quel outil de navigateur (F12) permet de voir les requêtes réseau et les cookies ?",
              "a": [
                "outils de developpement",
                "devtools",
                "outils developpeur"
              ],
              "pts": 8
            },
            {
              "id": "quiz-12",
              "q": "Quel format léger est aujourd'hui le plus utilisé pour échanger des données via une API web ?",
              "a": [
                "json"
              ],
              "pts": 8
            },
            {
              "id": "quiz-13",
              "q": "Quelle pratique de développement consiste à ne jamais faire confiance aux données envoyées par le client ?",
              "a": [
                "validation cote serveur",
                "ne jamais faire confiance au client"
              ],
              "pts": 8
            },
            {
              "id": "quiz-14",
              "q": "Quel type de 2FA est considéré comme le plus résistant au phishing (clé matérielle) ?",
              "a": [
                "cle de securite",
                "cle u2f",
                "fido"
              ],
              "pts": 8
            },
            {
              "id": "quiz-15",
              "q": "Pourquoi le SMS est-il un facteur 2FA plus faible que les applications d'authentification ?",
              "a": [
                "sim swap",
                "interception possible",
                "vulnerable au sim swapping"
              ],
              "pts": 8
            },
            {
              "id": "quiz-16",
              "q": "Quel protocole standard est souvent utilisé pour le SSO en entreprise (sigle, 4 lettres) ?",
              "a": [
                "saml"
              ],
              "pts": 8
            },
            {
              "id": "quiz-17",
              "q": "Quel protocole d'autorisation déléguée est très utilisé pour \"se connecter avec Google/Facebook\" ?",
              "a": [
                "oauth"
              ],
              "pts": 8
            },
            {
              "id": "quiz-18",
              "q": "Quelle pratique consiste à révoquer immédiatement les accès d'un employé qui quitte l'entreprise ?",
              "a": [
                "revocation des acces",
                "desactivation du compte"
              ],
              "pts": 8
            },
            {
              "id": "quiz-19",
              "q": "Quel type de contrôle d'accès attribue les droits selon le rôle de l'utilisateur (sigle) ?",
              "a": [
                "rbac"
              ],
              "pts": 8
            },
            {
              "id": "quiz-20",
              "q": "Comment s'appelle l'arnaque qui cible spécifiquement un dirigeant d'entreprise ?",
              "a": [
                "whaling"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (6)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-21",
              "q": "Quelle technique consiste à fouiller les poubelles pour trouver des informations sensibles ?",
              "a": [
                "dumpster diving"
              ],
              "pts": 8
            },
            {
              "id": "quiz-22",
              "q": "Quelle technique consiste à observer discrètement l'écran ou le clavier de quelqu'un ?",
              "a": [
                "shoulder surfing"
              ],
              "pts": 8
            },
            {
              "id": "quiz-23",
              "q": "Quel indice visuel, dans un email de phishing, trahit souvent une fausse URL ?",
              "a": [
                "domaine different",
                "faute dans le domaine",
                "domaine suspect"
              ],
              "pts": 8
            },
            {
              "id": "quiz-24",
              "q": "Pourquoi les attaques de phishing créent-elles souvent un sentiment d'urgence ?",
              "a": [
                "pour empecher de reflechir",
                "pousser a agir vite sans verifier"
              ],
              "pts": 8
            },
            {
              "id": "quiz-25",
              "q": "Quel type de malware se cache dans le secteur de démarrage ou le noyau, très difficile à détecter ?",
              "a": [
                "rootkit"
              ],
              "pts": 8
            },
            {
              "id": "quiz-26",
              "q": "Quel type de malware affiche des publicités intrusives ?",
              "a": [
                "adware",
                "logiciel publicitaire"
              ],
              "pts": 8
            },
            {
              "id": "quiz-27",
              "q": "Quelle attaque consiste à insérer un malware dans une mise à jour logicielle légitime ?",
              "a": [
                "attaque de la chaine d approvisionnement",
                "supply chain attack"
              ],
              "pts": 8
            },
            {
              "id": "quiz-28",
              "q": "Quel terme désigne un groupe d'attaquants menant une attaque furtive et prolongée (sigle) ?",
              "a": [
                "apt"
              ],
              "pts": 8
            },
            {
              "id": "quiz-29",
              "q": "Quelle mesure technique empêche l'exécution de programmes non autorisés sur un poste ?",
              "a": [
                "liste blanche d applications",
                "application whitelisting"
              ],
              "pts": 8
            },
            {
              "id": "quiz-30",
              "q": "Que doit-on faire après avoir isolé une machine compromise, avant de la nettoyer ?",
              "a": [
                "collecter les preuves",
                "analyser",
                "investigation"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (7)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-31",
              "q": "Quel terme désigne l'empreinte numérique (hash) qui prouve qu'une preuve n'a pas été altérée ?",
              "a": [
                "empreinte d integrite",
                "hash de preuve"
              ],
              "pts": 8
            },
            {
              "id": "quiz-32",
              "q": "Que signifie l'acronyme SIEM en sécurité ?",
              "a": [
                "gestion des informations et evenements de securite",
                "security information and event management"
              ],
              "pts": 8
            },
            {
              "id": "quiz-33",
              "q": "Quel document résume les leçons apprises après un incident de sécurité ?",
              "a": [
                "rapport post incident",
                "retour d experience",
                "post mortem"
              ],
              "pts": 8
            },
            {
              "id": "quiz-34",
              "q": "Quelle commande Linux affiche les derniers processus en cours d'exécution ?",
              "a": [
                "ps",
                "ps aux"
              ],
              "pts": 8
            },
            {
              "id": "quiz-35",
              "q": "Quelle commande Linux affiche les dernières lignes d'un fichier en continu (suivi en direct) ?",
              "a": [
                "tail -f"
              ],
              "pts": 8
            },
            {
              "id": "quiz-36",
              "q": "Quel outil, souvent utilisé avec Burp, intercepte et modifie le trafic entre navigateur et serveur ?",
              "a": [
                "proxy"
              ],
              "pts": 8
            },
            {
              "id": "quiz-37",
              "q": "Quel outil en ligne de commande teste la robustesse d'un mot de passe par force brute sur un service réseau ?",
              "a": [
                "hydra"
              ],
              "pts": 8
            },
            {
              "id": "quiz-38",
              "q": "Quel outil permet de cartographier visuellement un réseau découvert par Nmap ?",
              "a": [
                "zenmap"
              ],
              "pts": 8
            },
            {
              "id": "quiz-39",
              "q": "Quel outil, basé sur navigateur, liste les vulnérabilités connues d'un CMS comme WordPress ?",
              "a": [
                "wpscan"
              ],
              "pts": 8
            },
            {
              "id": "quiz-40",
              "q": "Quel outil capture les mots de passe Wi-Fi en forçant une reconnexion (attaque de désauthentification) ?",
              "a": [
                "aircrack-ng",
                "aircrack"
              ],
              "pts": 8
            }
          ]
        },
        {
          "title": "Culture cybersécurité (8)",
          "body": "<p>Une série de questions de culture générale en cybersécurité et hacking éthique, en lien avec les notions vues sur cette plateforme. Tu peux t'aider d'un moteur de recherche si besoin : c'est une pratique normale du métier.</p>",
          "questions": [
            {
              "id": "quiz-41",
              "q": "Quel document définit précisément le périmètre autorisé d'un test d'intrusion (sigle anglais) ?",
              "a": [
                "scope",
                "rules of engagement",
                "roe"
              ],
              "pts": 8
            },
            {
              "id": "quiz-42",
              "q": "Que doit faire un pentester qui découvre une faille critique en dehors du périmètre autorisé ?",
              "a": [
                "la signaler sans l exploiter",
                "informer le client sans exploiter"
              ],
              "pts": 8
            },
            {
              "id": "quiz-43",
              "q": "Quel règlement européen protège les données personnelles (sigle) ?",
              "a": [
                "rgpd"
              ],
              "pts": 8
            },
            {
              "id": "quiz-44",
              "q": "Quelle structure organisationnelle est responsable de la réponse aux incidents de sécurité (sigle) ?",
              "a": [
                "csirt",
                "soc"
              ],
              "pts": 8
            }
          ]
        }
      ],
      "code": {
        "lang": "python",
        "starter": "# Analyse automatique d'un journal de connexions pour trouver l'IP attaquante.\nfrom collections import Counter\n\nLOG = '''10:02 CONNEXION reussie user=admin ip=41.202.13.77\n10:03 CONNEXION echouee user=admin ip=102.91.7.4\n10:03 CONNEXION echouee user=admin ip=102.91.7.4\n10:04 CONNEXION echouee user=admin ip=102.91.7.4\n10:04 CONNEXION echouee user=admin ip=102.91.7.4\n10:05 CONNEXION echouee user=admin ip=102.91.7.4\n10:06 CONNEXION reussie user=stagiaire ip=192.168.1.40'''\n\ncompteur = Counter()\nfor ligne in LOG.splitlines():\n    # Complète : si la ligne contient \"echouee\", compte l'IP correspondante\n    pass\n\n# Affiche l'IP la plus fréquente parmi les échecs\n"
      }
    }
  }
};

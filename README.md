# StocKeeper+ API

Bienvenue sur la documentation de l'API **StocKeeper+**. Cette application est une API RESTful construite avec Node.js et Express, conçue pour gérer les stocks alimentaires, les listes de courses, les recettes et les informations nutritionnelles des utilisateurs.

## 🚀 Fonctionnalités Principales

* **Authentification & Utilisateurs** : Inscription, connexion (JWT), gestion de profil et rôles (Admin/User).
* **Gestion des Stocks** : Suivi des aliments possédés par l'utilisateur (quantité, date de péremption, lieu de stockage).
* **Produits & Magasins** : Base de données de produits alimentaires (code-barres, nutriscore) et association avec les magasins (prix).
* **Recettes** : Gestion des recettes avec calcul des apports caloriques et ingrédients nécessaires.
* **Tâches planifiées** : Scripts automatiques (Cron jobs) pour la maintenance ou les notifications.
* **Documentation** : Génération de documentation via Swagger.

## 🛠 Technologies Utilisées

* **Runtime** : [Node.js](https://nodejs.org/)
* **Framework** : [Express.js](https://expressjs.com/)
* **Base de données** : [PostgreSQL](https://www.postgresql.org/)
* **ORM / Query Builder** :
* [Prisma](https://www.prisma.io/) (Gestion du schéma et migrations)
* `pg` (Connexion native pour certaines requêtes spécifiques)


* **Validation** : [VineJS](https://vinejs.dev/)
* **Sécurité** :
* `argon2` (Hachage des mots de passe)
* `jsonwebtoken` (Authentification JWT)
* `cors` (Gestion des origines croisées)


* **Services Tiers** : [Firebase Admin SDK](https://firebase.google.com/) (Gestion backend Firebase)

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

* [Node.js](https://nodejs.org/) (v18 ou supérieur recommandé)
* [PostgreSQL](https://www.postgresql.org/) (Serveur local ou distant)
* Un projet [Firebase](https://firebase.google.com/) configuré.

## ⚙️ Installation

1. **Cloner le projet**
```bash
à préciser

```

## 🔧 Configuration

### 1. Variables d'environnement (.env)

Créez un fichier `.env` à la racine du projet et configurez les variables suivantes (basées sur `database.js` et `prisma/schema.prisma`) :

```env
# Configuration du Serveur
PORT=3001

# Configuration PostgreSQL (pour le pool pg dans database.js)
HOSTDB=localhost
USERDB=votre_user_postgres
PASSWORDDB=votre_mot_de_passe
DBNAME=stockeeper_db

# Configuration Prisma
DATABASE_URL="postgresql://votre_user_postgres:votre_mot_de_passe@localhost:5432/stockeeper_db?schema=public"

# Secrets JWT
JWT_SECRET=votre_secret_tres_long_et_securise

```


## 💾 Base de Données

Pour initialiser la base de données avec les tables et les données de départ, utilisez la commande suivante (définie dans `package.json`) :

```bash
npm run initDB

```

*Cette commande exécute le script `API/scripts/JS/initDB.js`.*

## ▶️ Démarrage

### Mode Développement

Utilise `nodemon` pour recharger le serveur automatiquement à chaque modification.

```bash
npm run dev

```

Le serveur sera accessible sur `http://localhost:3001`.

## 📚 Documentation API

L'API utilise Swagger pour la documentation. Pour générer la documentation à jour :

```bash
npm run genDoc

```

Le fichier de spécification sera généré dans `swagger/spec.json`.

## 📂 Structure du Projet

```text
StocKeeperPlus-Developpement/
├── API/
│   ├── controller/      # Logique métier et interactions BDD (ORM maison)
│   ├── database/        # Connexion PostgreSQL
│   ├── middleware/      # Validateurs (VineJS) et Auth (JWT/Admin)
│   ├── route/           # Définitions des routes (v1)
│   ├── scripts/         # Scripts d'initialisation (JS & SQL)
│   ├── utils/           # Utilitaires (Cron, Hash, JWT, ErrorHandling)
│   └── server.js        # Point d'entrée de l'application
├── generated/           # Artefacts générés par Prisma
├── prisma/              # Schéma Prisma et migrations
├── swagger/             # Configuration Swagger
├── uploads/             # Dossier de stockage des images
├── package.json         # Dépendances et scripts
└── README.md            # Ce fichier

```

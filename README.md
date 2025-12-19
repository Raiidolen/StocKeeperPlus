# StocKeeper+ API

Bienvenue sur la documentation de l'API **StocKeeper+**. Cette application est une API RESTful construite avec Node.js et Express, conçue pour gérer les stocks alimentaires, les listes de courses, les recettes et les informations nutritionnelles des utilisateurs.

## Fonctionnalités Principales

* **Authentification & Utilisateurs** : Inscription, connexion (JWT), gestion de profil et rôles (Admin/User).
* **Gestion des Stocks** : Suivi des aliments possédés par l'utilisateur (quantité, date de péremption, lieu de stockage).
* **Produits & Magasins** : Base de données de produits alimentaires (code-barres, nutriscore) et association avec les magasins (prix).
* **Recettes** : Gestion des recettes
* **Tâches planifiées** : Scripts automatiques (Cron jobs) pour les notifications.
* **Documentation** : Génération de documentation via Swagger.

## Technologies Utilisées

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

## Prérequis

Pour lancer ce projet, vous avez uniquement besoin de :

* **Docker Desktop** (ou Docker Engine + Docker Compose) installé et lancé sur votre machine.

*Aucune installation de Node.js ou PostgreSQL n'est nécessaire sur votre machine hôte, tout est géré par les conteneurs.*

## Structure du Projet

Le projet est organisé comme suit :

* `api/` : Code source du Backend (Node.js/Express).
* `website/` : Code source du Frontend (React/Vite).
* `compose.yml` : Fichier d'orchestration Docker.
* `serviceAccountKey.json` : Clé de sécurité pour Firebase (nécessaire au démarrage).
* `.env` : Variables d'environnement pour l'API (dans le dossier api).

## Installation & Démarrage

### 1. Préparation

Assurez-vous que le fichier `serviceAccountKey.json` est bien présent à la racine de ce dossier (au même niveau que ce README).

### 2. Lancement

Ouvrez un terminal à la racine du dossier StocKeeperPlusProject et exécutez l'unique commande suivante :

```bash
docker compose up --build

```

*La première fois, cette étape peut prendre quelques minutes le temps que Docker télécharge les images et installe les dépendances.*

### 3. Vérification

Une fois que les logs se stabilisent :

* **Frontend (Site Web)** : Accessible à l'adresse [http://localhost:5173]
* **Backend (API)** : Accessible à l'adresse [http://localhost:3001]
* **Base de données** : Initialisée automatiquement sur le port `5432`.

## Connexion

Les identifiants de test Administrateur sont fournis dans le fichier **`login.txt`** joint à ce projet.

## Arrêt du projet

Pour arrêter proprement les conteneurs, faites `Ctrl + C` dans le terminal ou ouvrez un nouveau terminal et lancez :

```bash
docker compose down

```

## Dépannage

* **Erreur de base de données / Utilisateur inconnu** :
Si vous rencontrez des erreurs de connexion à la base de données (ex: rôle "john" n'existe pas ou tables manquantes), c'est souvent dû à un ancien volume Docker persistant.
**Solution :**
```bash
docker compose down
docker volume rm monprojetstockeeper_db_data  # (ou le nom exact du volume)
docker compose up --build

```


* **Ports déjà utilisés** :
Assurez-vous qu'aucun autre service n'utilise les ports `3001`, `5173` ou `5432` sur votre machine avant de lancer la commande.
## Documentation API

L'API utilise Swagger pour la documentation. Pour générer la documentation à jour :

```bash
npm run genDoc

```

Le fichier de spécification sera généré dans `swagger/spec.json`.


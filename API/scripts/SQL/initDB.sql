-- ===============================
-- Script de création de la base StocKeeper+
-- Relançable sans erreur
-- ===============================

-- Suppression des tables existantes (ordre inverse des dépendances)
DROP TABLE IF EXISTS FoodStore CASCADE;
DROP TABLE IF EXISTS IngredientAmount CASCADE;
DROP TABLE IF EXISTS Recipe CASCADE;
DROP TABLE IF EXISTS Food CASCADE;
DROP TABLE IF EXISTS Store CASCADE;
DROP TABLE IF EXISTS "User" CASCADE;

-- ===============================
-- Création des tables
-- ===============================

-- TABLE: User
CREATE TABLE "User" (
    mail VARCHAR(255) PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN NOT NULL
);

-- TABLE: Store
CREATE TABLE Store (
    id SERIAL PRIMARY KEY,
    label VARCHAR(255) NOT NULL,
    longitude DECIMAL(9,6) NOT NULL,
    latitude DECIMAL(9,6) NOT NULL
);

-- TABLE: Food
CREATE TABLE Food (
    id SERIAL PRIMARY KEY,
    label VARCHAR(255) NOT NULL,
    expirationDate DATE,
    quantity INTEGER DEFAULT 0 CHECK (quantity >= 0),
    storageType VARCHAR(100),
    diet VARCHAR(100),
    nutriScore CHAR(1),
    user_mail VARCHAR(255),
    CONSTRAINT fk_food_user
        FOREIGN KEY (user_mail)
        REFERENCES "User"(mail)
        ON DELETE CASCADE
);

-- TABLE: Recipe
CREATE TABLE Recipe (
    id SERIAL PRIMARY KEY,
    label VARCHAR(255) NOT NULL,
    description TEXT,
    caloricIntake INTEGER,
    timeToMake INTEGER
);

-- TABLE: IngredientAmount (association Recipe - Food)
CREATE TABLE IngredientAmount (
    recipe_id INTEGER NOT NULL,
    food_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    PRIMARY KEY (recipe_id, food_id),
    CONSTRAINT fk_ing_recipe
        FOREIGN KEY (recipe_id)
        REFERENCES Recipe(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_ing_food
        FOREIGN KEY (food_id)
        REFERENCES Food(id)
        ON DELETE CASCADE
);

-- TABLE: FoodStore (association Food - Store)
CREATE TABLE FoodStore (
    food_id INTEGER NOT NULL,
    store_id INTEGER NOT NULL,
    price DECIMAL(10,2) CHECK (price >= 0),
    PRIMARY KEY (food_id, store_id),
    CONSTRAINT fk_foodstore_food
        FOREIGN KEY (food_id)
        REFERENCES Food(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_foodstore_store
        FOREIGN KEY (store_id)
        REFERENCES Store(id)
        ON DELETE CASCADE
);
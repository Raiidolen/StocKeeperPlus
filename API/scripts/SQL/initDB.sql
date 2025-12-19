DROP TABLE IF EXISTS FoodStore CASCADE;
DROP TABLE IF EXISTS IngredientAmount CASCADE;
DROP TABLE IF EXISTS Recipe CASCADE;
DROP TABLE IF EXISTS Food CASCADE;
DROP TABLE IF EXISTS Store CASCADE;
DROP TABLE IF EXISTS "User" CASCADE;
DROP TABLE IF EXISTS FoodUser CASCADE;

CREATE TABLE "User" (
    mail VARCHAR(255) PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    isadmin BOOLEAN NOT NULL
);

CREATE TABLE Store (
    id SERIAL PRIMARY KEY,
    label VARCHAR(255) NOT NULL,
    longitude DECIMAL(9,6) NOT NULL,
    latitude DECIMAL(9,6) NOT NULL
);

CREATE TABLE Food (
    id SERIAL PRIMARY KEY,
    label VARCHAR(255) NOT NULL,
    diet VARCHAR(100),
    nutriScore CHAR(1),
    measuringUnit VARCHAR(255) NOT NULL,
    barcode VARCHAR(50) NOT NULL UNIQUE,
    imagepath VARCHAR(200)
);

CREATE TABLE Recipe (
    id SERIAL PRIMARY KEY,
    label VARCHAR(255) NOT NULL,
    description TEXT,
    caloricIntake INTEGER,
    nbEaters INTEGER,
    timeToMake INTEGER
);

CREATE TABLE IngredientAmount (
    recipe INTEGER NOT NULL,
    food INTEGER NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    PRIMARY KEY (recipe, food),
    CONSTRAINT fk_ing_recipe
        FOREIGN KEY (recipe)
        REFERENCES Recipe(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_ing_food
        FOREIGN KEY (food)
        REFERENCES Food(id)
        ON DELETE CASCADE
);

CREATE TABLE FoodStore (
    food INTEGER NOT NULL,
    store INTEGER NOT NULL,
    quantity INTEGER DEFAULT 0 CHECK (quantity >= 0),
    price DECIMAL(10,2) CHECK (price >= 0),
    PRIMARY KEY (food, store),
    CONSTRAINT fk_foodstore_food
        FOREIGN KEY (food)
        REFERENCES Food(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_foodstore_store
        FOREIGN KEY (store)
        REFERENCES Store(id)
        ON DELETE CASCADE
);

CREATE TABLE FoodUser (
    food INTEGER NOT NULL,
    user_mail VARCHAR(255) NOT NULL,
    quantity INTEGER DEFAULT 0 CHECK (quantity >= 0),
    storageType VARCHAR(100),
    expirationDate DATE,
    PRIMARY KEY (food, user_mail),
    CONSTRAINT fk_fooduser_food
        FOREIGN KEY (food)
        REFERENCES Food(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_fooduser_user
        FOREIGN KEY (user_mail)
        REFERENCES "User"(mail)
        ON DELETE CASCADE
);

INSERT INTO "User" (mail, username, password, isadmin)
VALUES ('admin@test.com', 'ADMIN', '$argon2id$v=19$m=65536,t=3,p=4$cLOZUs/hOdfwZVRoi69Dfw$8UlTS5+Ebg9lQtwArBoilwfwV5K6PZon0bVsquCL+0k', true);

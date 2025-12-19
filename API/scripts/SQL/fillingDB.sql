INSERT INTO Store (label, longitude, latitude) VALUES
('Carrefour Supermarché', 4.34254, 50.84845),
('Delhaize Bruxelles', 4.36045, 50.83710),
('Colruyt Molenbeek', 4.32411, 50.84500);

INSERT INTO Food (label, diet, nutriScore, measuringUnit, barcode, imagepath) VALUES
('Nutella', NULL, 'D', 'gram', '3017620422003', '/images/default.jpg'),
('Twix', NULL, 'E', 'centiliter', '5000159484695', '/images/default.jpg'),
('Pâtes Barilla', 'vegetarian', 'B', 'gram', '8076800105056', '/images/default.jpg');

INSERT INTO Recipe (label, description, caloricIntake, nbEaters, timeToMake) VALUES
('Petit Déjeuner rapide', 'Nutella sur pain avec un Twix', 850, 1, 5),
('Soupe instantanée', 'Nouilles Maggi avec eau chaude', 300, 1, 7);

INSERT INTO IngredientAmount (recipe, food, quantity) VALUES
(1, (SELECT id FROM Food WHERE barcode='3017620422003'), 50),
(1, (SELECT id FROM Food WHERE barcode='5000159484695'), 330),
(2, (SELECT id FROM Food WHERE barcode='8076800105056'), 70);

INSERT INTO FoodStore (food, store, quantity, price) VALUES
((SELECT id FROM Food WHERE barcode='3017620422003'), 1, 10, 6.49),
((SELECT id FROM Food WHERE barcode='5000159484695'), 2, 25, 1.79),
((SELECT id FROM Food WHERE barcode='8076800105056'), 3, 40, 0.99);

INSERT INTO FoodUser (food, user_mail, quantity, storageType, expirationDate) VALUES
((SELECT id FROM Food WHERE barcode='3017620422003'), 'admin@test.com', 2, 'Placard', '2026-06-01'),
((SELECT id FROM Food WHERE barcode='5000159484695'), 'admin@test.com', 6, 'Frigo', '2025-12-31');

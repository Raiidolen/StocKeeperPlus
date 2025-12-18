import { Router } from "express";
import prisma from "../../database/databaseORM.js";

const router = Router();
const allowedModels = [
  "Food",
  "FoodUser",
  "User",
  "IngredientAmount",
  "Recipe",
  "Store",
  "FoodStore"
];


router.get("/metadata", async (req, res) => {
  try {
    const result = [];

    for (const model of allowedModels) {
      const tableName = model === "User" ? "User" : model.toLowerCase();

      // Colonnes
      const columns = await prisma.$queryRawUnsafe(`
        SELECT column_name
        FROM information_schema.columns
        WHERE table_catalog = current_database()
        AND table_name = '${tableName}'
        ORDER BY ordinal_position;
      `);

      // Primary Keys
      const primaryKeys = await prisma.$queryRawUnsafe(`
        SELECT kcu.column_name
        FROM information_schema.table_constraints tc
        JOIN information_schema.key_column_usage kcu
          ON tc.constraint_name = kcu.constraint_name
        WHERE tc.table_catalog = current_database()
          AND tc.table_name = '${tableName}'
          AND tc.constraint_type = 'PRIMARY KEY'
        ORDER BY kcu.ordinal_position;
      `);

      // Foreign Keys
      const foreignKeys = await prisma.$queryRawUnsafe(`
        SELECT
          kcu.column_name AS fk_column,
          ccu.table_name AS referenced_table,
          ccu.column_name AS referenced_column
        FROM information_schema.table_constraints tc
        JOIN information_schema.key_column_usage kcu
          ON tc.constraint_name = kcu.constraint_name
        JOIN information_schema.constraint_column_usage ccu
          ON ccu.constraint_name = tc.constraint_name
        WHERE tc.constraint_type = 'FOREIGN KEY'
          AND tc.table_catalog = current_database()
          AND tc.table_name = '${tableName}';
      `);

      result.push({
        name: model,
        columns: columns.map(c => c.column_name),
        primaryKeys: primaryKeys.map(p => p.column_name),
        foreignKeys: foreignKeys.map(fk => ({
          column: fk.fk_column,
          references: {
            table: fk.referenced_table,
            column: fk.referenced_column
          }
        }))
      });
    }

    res.json(result);

  } catch (error) {
    console.error("Erreur récupération metadata :", error);
    res.status(500).json({ error: error.message });
  }
});


export default router;

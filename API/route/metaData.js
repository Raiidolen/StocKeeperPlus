import { Router } from "express";
import prisma from "../database/databaseORM.js";

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

      const columns = await prisma.$queryRawUnsafe(`
        SELECT column_name
        FROM information_schema.columns
        WHERE table_catalog = current_database()
        AND table_name = '${tableName}'
        ORDER BY ordinal_position;
      `);

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

      result.push({
        name: model,
        columns: columns.map(c => c.column_name),
        primaryKeys: primaryKeys.map(p => p.column_name)
      });
    }

    res.json(result);

  } catch (error) {
    console.error("Erreur récupération metadata :", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;

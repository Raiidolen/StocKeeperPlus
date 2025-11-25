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

router.get("/:table/columns", async (req, res) => {
  const table = req.params.table;

  if (!allowedModels.includes(table)) {
    return res.status(400).json({ error: "Invalid table" });
  }

  try {
    const tableName = table === "User" ? "User" : table.toLowerCase();

    const rows = await prisma.$queryRawUnsafe(`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_catalog = current_database()
        AND table_name = '${tableName}';
    `);

    const columns = rows.map(r => r.column_name);
    res.json(columns);

  } catch (error) {
    console.error("Erreur récupération colonnes :", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;

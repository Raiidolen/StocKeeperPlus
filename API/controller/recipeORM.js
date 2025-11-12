import prisma from '../database/databaseORM.js';

export const getRecipe = async (req, res) => {
    try {
        const recipe = await prisma.recipe.findUnique({
            where: {
                id: parseInt(req.val.id)
            }
        });
        if(recipe){
            res.send(recipe);
        } else {
            res.sendStatus(404);
        }
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

export const addRecipe = async (req, res) => {
  try {
    const { label, description, caloricintake, nbeaters, timetomake, ingredients } = req.val;

    // 1️⃣ Création de la recette
    const recipe = await prisma.recipe.create({
      data: { label, description, caloricintake, nbeaters, timetomake },
      select: { id: true },
    });

    // 2️⃣ Création des ingredientsAmount
    await Promise.all(
      ingredients.map(async (ing) => {
        let food = await prisma.food.findFirst({
          where: { label: ing.label },
          select: { id: true },
        });

        if (!food) {
          food = await prisma.food.create({
            data: {
              label: ing.label,
              diet: ing.diet,
              nutriscore: ing.nutriscore,
            },
            select: { id: true },
          });
        }

        await prisma.ingredientamount.create({
          data: {
            quantity: ing.quantity,
            recipe_ingredientamount_recipeTorecipe: {
              connect: { id: recipe.id },
            },
            food_ingredientamount_foodTofood: {
              connect: { id: food.id },
            },
          },
        });
      })
    );

    res.status(201).json({ id: recipe.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de la création de la recette" });
  }
};
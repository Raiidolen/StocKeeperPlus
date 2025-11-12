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
    const { label, description, caloricIntake, timeToMake, ingredients } = req.val;
    // ingredients = [{ label, diet, nutriScore, quantity }]

    // 1️⃣ Création de la recette (on ne sélectionne que l'id)
    const recipe = await prisma.recipe.create({
      data: { label, description, caloricIntake, timeToMake },
      select: { id: true },
    });

    await Promise.all(
      ingredients.map(async (ing) => {
        let food = await prisma.food.findFirst({
          where: { label: ing.label },
        });

        if (!food) {
          food = await prisma.food.create({
            data: {
              label: ing.label,
              diet: ing.diet,
              nutriScore: ing.nutriScore,
            },
            select: { id: true },
          });
        }

        await prisma.ingredientamount.create({
          data: {
            recipeId: recipe.id,
            foodId: food.id,
            quantity: ing.quantity,
          },
        });
      })
    );
    res.status(201).json({ id: recipe.id });
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}
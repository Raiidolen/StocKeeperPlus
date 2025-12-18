import prisma from '../database/databaseORM.js';

export const getRecipe = async (req, res) => {
  try {
    const recipe = await prisma.recipe.findUnique({
      where: {
        id: parseInt(req.val.id),
      },
      include: {
        ingredientamount_ingredientamount_recipeTorecipe: {
          include: {
            food_ingredientamount_foodTofood: true,
          },
        },
      },
    });

    if (recipe) {
      return res.send(recipe);
    } else {
      return res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const getAllRecipe = async (_req, res) => {
  try {
    const recipes = await prisma.recipe.findMany({
      orderBy: {
        id: 'asc',
      }
    });
    if(recipes){
      res.send(recipes);
    } else {
      res.sendStatus(404);
    }
  }
  catch(err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export const addRecipe = async (req, res) => {
  try {
    const { label, description, caloricintake, nbeaters, timetomake, ingredients } = req.val;

    const missingFoods = [];
    const foodIds = new Map();

    for (const ing of ingredients) {
      const food = await prisma.food.findFirst({
        where: { label: ing.label },
        select: { id: true },
      });

      if (!food) {
        missingFoods.push(ing.label);
      } else {
        foodIds.set(ing.label, food.id);
      }
    }

    if (missingFoods.length > 0) {
      return res.status(400).json({ 
        error: "Certains ingrédients n'existent pas dans la base de données",
        missingFoods: missingFoods
      });
    }

    const createdRecipe = await prisma.$transaction(async (tx) => {
      const recipe = await tx.recipe.create({
        data: { label, description, caloricintake, nbeaters, timetomake },
        select: { id: true },
      });

      for (const ing of ingredients) {
        await tx.ingredientamount.create({
          data: {
            recipe: recipe.id,
            food: foodIds.get(ing.label),
            quantity: ing.quantity,
          },
        });
      }

      return recipe;
    });

    res.status(201).json({ id: createdRecipe.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de la création de la recette" });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const {
      id,
      label,
      description,
      caloricintake,
      nbeaters,
      timetomake,
      ingredientsToAddOrUpdate,
      ingredientsToRemove
    } = req.val;

    const missingFoods = [];
    const foodIds = new Map();

    if (ingredientsToAddOrUpdate && ingredientsToAddOrUpdate.length > 0) {
      for (const ing of ingredientsToAddOrUpdate) {
        const food = await prisma.food.findFirst({
          where: { label: ing.label },
          select: { id: true },
        });

        if (!food) {
          missingFoods.push(ing.label);
        } else {
          foodIds.set(ing.label, food.id);
        }
      }
    }

    if (missingFoods.length > 0) {
      return res.status(400).json({ 
        error: "Certains ingrédients n'existent pas dans la base de données",
        missingFoods: missingFoods
      });
    }

    await prisma.$transaction(async (tx) => {
      const updateData = {};
      if (label !== undefined) updateData.label = label;
      if (description !== undefined) updateData.description = description;
      if (caloricintake !== undefined) updateData.caloricintake = caloricintake;
      if (nbeaters !== undefined) updateData.nbeaters = nbeaters;
      if (timetomake !== undefined) updateData.timetomake = timetomake;

      if (Object.keys(updateData).length > 0) {
        await tx.recipe.update({
          where: { id },
          data: updateData,
        });
      }

      if (ingredientsToRemove && ingredientsToRemove.length > 0) {
        await Promise.all(
          ingredientsToRemove.map(async (ing) => {
            await tx.ingredientamount.delete({
              where: {
                recipe_food: {
                  recipe: id,
                  food: ing.foodId
                }
              }
            }).catch(() => { });
          })
        );
      }

      if (ingredientsToAddOrUpdate && ingredientsToAddOrUpdate.length > 0) {
        await Promise.all(
          ingredientsToAddOrUpdate.map(async (ing) => {
            const foodId = foodIds.get(ing.label);

            await tx.ingredientamount.upsert({
              where: {
                recipe_food: { recipe: id, food: foodId },
              },
              update: {
                quantity: ing.quantity,
              },
              create: {
                quantity: ing.quantity,
                recipe_ingredientamount_recipeTorecipe: {
                  connect: { id },
                },
                food_ingredientamount_foodTofood: {
                  connect: { id: foodId },
                },
              },
            });
          })
        );
      }
    });

    res.status(200).json({ message: "Recette mise à jour avec succès" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de la mise à jour de la recette" });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.val;
    await prisma.recipe.delete({
      where: { id },
    });

    res.status(200).json({ message: "Recette supprimée avec succès" });
  } catch (err) {
    if (err.code === 'P2025') {
      return res.status(404).json({ error: "Recette introuvable" });
    }
    console.error(err);
    res.status(500).json({ error: "Erreur lors de la suppression de la recette" });
  }
};
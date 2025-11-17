import prisma from '../database/databaseORM.js';

export const getIngredientAmount = async (req, res) => {
    try {
        const ingredientamount = await prisma.ingredientamount.findUnique({
            where: {
                recipe_food: {
                    recipe: parseInt(req.val.recipe_id),
                    food: parseInt(req.val.food_id)
                }
            }
        });
        if(ingredientamount){
            res.send(ingredientamount);
        } else {
            res.sendStatus(404);
        }
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
};
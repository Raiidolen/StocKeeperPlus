import prisma from '../database/databaseORM.js';

export const getIngredientAmount = async (req, res) => {
    try {
        const ingredientamount = await prisma.ingredientamount.findUnique({
            where: {
                recipe_food: {
                    recipe: parseInt(req.val.recipe),
                    food: parseInt(req.val.food)
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

export const getAllIngredientAmount = async (_req, res) => {
    try {
        const ingredients = await prisma.ingredientamount.findMany({
            orderBy: [{
                recipe: 'asc',
            },
            {
                food: 'asc'
            }
            ]
        });
        if(ingredients){
            res.send(ingredients);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const addIngredientAmount = async (req, res) => {
    try {
        const {recipe, food, quantity} = req.val;
        const ingredientamount = await prisma.ingredientamount.create({
            data: {
                recipe: recipe,
                food: food,
                quantity: quantity
            }
        });
        res.status(201).send({ingredientamount});
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

export const updateIngredientAmount = async (req, res) => {
    try {
        const {recipe, food, quantity} = req.val;
        await prisma.ingredientamount.update({
            data: {
                recipe: recipe,
                food: food,
                quantity
            },
            where: {
                recipe_food: {
                    recipe: recipe,
                    food: food
                }
            }
        });
        res.sendStatus(204);
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

export const deleteIngredientAmount = async (req, res) => {
    try {
        const {recipe, food} = req.val;
        await prisma.ingredientamount.delete({
            where: {
                recipe_food: {
                    recipe: recipe,
                    food: food
                }
            }
        });
        res.sendStatus(204);
    }
    catch(e){
        console.error(e);
        res.sendStatus(500);
    }
}
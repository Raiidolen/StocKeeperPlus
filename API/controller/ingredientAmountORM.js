import prisma from '../database/databaseORM.js';
import { errorHandeling } from '../utils/errorHandeling.js';

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
            return errorHandeling(res, { code: 'P2025' });
        }
    }
    catch (err) {
        return errorHandeling(res, err);
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
        res.send(ingredients);
    } catch (err) {
        return errorHandeling(res, err);
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
            },
            select: {
                recipe: true,
                food: true
            }
        });
        res.status(201).send({ingredientamount});
    }
    catch (err) {
        return errorHandeling(res, err);
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
    catch (err) {
        return errorHandeling(res, err);
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
    catch (err) {
        return errorHandeling(res, err);
    }
}
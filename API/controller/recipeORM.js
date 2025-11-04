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
        const {label, description, caloricintake, timetomake, ingredientamount} = req.val;
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}
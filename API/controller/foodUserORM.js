import prisma from '../database/databaseORM.js';

export const getFoodUser = async (req, res)=> {
    try {
        const foodUser = await prisma.foodUser.findUnique({
            where: {
                food_id: req.val.food_id,
                user_mail: req.val.user_mail
            }
        });
        if(foodUser){
            res.send(foodUser);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

export const getAllFoodUser = async (_req, res)=> {
    try {
        const foodsUser = await prisma.foodUser.findMany();
        if(foodsUser){
            res.send(foodsUser);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const addFoodUser = async (req, res) => {
    try {
        const {food_id, user_mail, quantity, storagetype, expirationdate} = req.val;
        const foodUser = await prisma.foodUser.create({
            data: {
                food_id,
                user_mail,
                quantity,
                storagetype,
                expirationdate,
            }
        });
        res.status(201).send({foodUser});
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

export const updateFoodUser= async (req, res) => {
    try {
        const {food_id, user_mail, quantity, storagetype, expirationdate} = req.val;
        await prisma.foodUser.update({
            data: {
                food_id,
                user_mail,
                quantity,
                storagetype,
                expirationdate,
            },
            where: {
                food_id,
                user_mail
            }
        });
        res.sendStatus(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const deleteFoodUser = async (req, res) => {
    try {
        const {food_id, user_mail} = req.val;
        await prisma.foodUser.delete({
            where: {
                food_id,
                user_mail
            }
        });
        res.sendStatus(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};
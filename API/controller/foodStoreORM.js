import prisma from '../database/databaseORM.js';

export const getFoodStore = async (req, res)=> {
    try {
        const foodStore = await prisma.foodStore.findUnique({
            where: {
                food_id: req.val.food_id,
                store_id: req.val.store_id
            }
        });
        if(foodStore){
            res.send(foodStore);
        } else {
            res.sendStatus(404);
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const getAllFoodStore = async (_req, res)=> {
    try {
        const foodStores = await prisma.foodStore.findMany();
        if(foodStores){
            res.send(foodStores);
        } else {
            res.sendStatus(404);
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const addFoodStore = async (req, res) => {
    try {
        const {food_id, store_id, price} = req.val;
        const foodStore = await prisma.foodStore.create({
            data: {
                food_id,
                store_id,
                price
            }
        });
        res.status(201).send({foodStore});
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const updateFoodStore= async (req, res) => {
    try {
        const {food_id, store_id, price} = req.val;
        await prisma.foodStore.update({
            data: {
                price
            },
            where: {
                food_id,
                store_id
            }
        });
        res.sendStatus(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const deleteFoodStore = async (req, res) => {
    try {
        const {food_id, store_id} = req.val;
        await prisma.foodStore.delete({
            where: {
                food_id,
                store_id
            }
        });
        res.sendStatus(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

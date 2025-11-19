import prisma from '../database/databaseORM.js';

export const getFoodStore = async (req, res)=> {
    try {
        const {food_id, store_id} = req.body;
        const foodStore =  await prisma.foodstore.findUnique({
            where: {
                food_store: {
                    food: food_id,
                    store: store_id
                }
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

export const getAllFoodStores = async (_req, res)=> {
    try {
        const foodStores = await prisma.foodstore.findMany();
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
        const {food_id, store_id, price} = req.body;
        const foodStore = await prisma.foodstore.create({
            data: {
                food: food_id,
                store: store_id,
                price
            }
        });
        res.status(201).send({foodStore});
    } catch (e) {
        console.error(e);
        res.sendStatus(500).send({ error: e.message });
    }
};

export const updateFoodStore= async (req, res) => {
    try {
        const {food_id, store_id, price} = req.body;
        await prisma.foodstore.update({
            data: {
                price
            },
            where: {
                food_store: {
                    food: food_id,
                    store: store_id
                }
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
        const {food_id, store_id} = req.body;
        await prisma.foodstore.delete({
            where: {
                food_store: {
                    food: food_id,
                    store: store_id
                }
            }
        });
        res.sendStatus(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

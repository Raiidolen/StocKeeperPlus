import prisma from '../database/databaseORM.js';

export const getFoodStore = async (req, res)=> {
    try {
        const {food, store} = req.val;
        const foodStore =  await prisma.foodstore.findUnique({
            where: {
                food_store: {
                    food: food,
                    store: store
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
        const foodStores = await prisma.foodstore.findMany({
            orderBy: [{
                store: 'asc',
            },
            {
                food: 'asc'
            }
            ]
        });
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
        const {food, store, quantity, price} = req.val;
        const foodStore = await prisma.foodstore.create({
            data: {
                food,
                store,
                quantity,
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
        const {food, store, quantity, price} = req.val;
        await prisma.foodstore.update({
            data: {
                food,
                store,
                quantity,
                price
            },
            where: {
                food_store: {
                    food: food,
                    store: store
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
        const {food, store} = req.val;
        await prisma.foodstore.delete({
            where: {
                food_store: {
                    food,
                    store
                }
            }
        });
        res.sendStatus(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

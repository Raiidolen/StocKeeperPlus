import prisma from '../database/databaseORM.js';
import { errorHandeling } from '../utils/errorHandeling.js';

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
            return errorHandeling(res, { code: 'P2025' });
        }
    } catch (err) {
        return errorHandeling(res, err);
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
        res.send(foodStores);
    } catch (err) {
        return errorHandeling(res, err);
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
            },
            select: {
                food: true,
                store: true
            }
        });
        res.status(201).send({foodStore});
    } catch (err) {
        return errorHandeling(res, err);
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
    } catch (err) {
        return errorHandeling(res, err);
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
    } catch (err) {
        return errorHandeling(res, err);
    }
};

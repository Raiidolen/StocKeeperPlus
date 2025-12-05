import prisma from '../database/databaseORM.js';

export const getFood = async (req, res)=> {
    try {
        const food = await prisma.food.findUnique({
            where: {
                id: req.val.id
            }
        });
        if(food){
            res.send(food);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

export const getAllFood = async (_req, res)=> {
    try {
        const foods = await prisma.food.findMany({
            orderBy: {
                id: 'asc',
            }
        });
        if(foods){
            res.send(foods);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const addFood = async (req, res) => {
    try {
        const {label, diet, nutriscore} = req.val;
        const {id} = await prisma.food.create({
            data: {
                label,
                diet,
                nutriscore
            },
            select: {
                id: true
            }
        });
        res.status(201).send({id});
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

export const updateFood = async (req, res) => {
    try {
        const {id, label, diet, nutriscore} = req.val;
        await prisma.food.update({
            data: {
                label,
                diet,
                nutriscore
            },
            where: {
                id
            }
        });
        res.sendStatus(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const deleteFood = async (req, res) => {
    try {
        const {id} = req.val;
        await prisma.food.delete({
            where: {
                id
            }
        });
        res.sendStatus(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};
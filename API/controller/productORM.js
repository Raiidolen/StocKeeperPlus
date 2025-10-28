import prisma from '../database/databaseORM.js';

export const getProduct = async (req, res)=> {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: req.val.id
            }
        });
        if(product){
            res.send(product);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

export const getAllProduct = async (_req, res)=> {
    try {
        const products = await prisma.product.findMany();
        if(products){
            res.send(products);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const addProduct = async (req, res) => {
    try {
        const {label, expirationDate, quantity, nutriScore, storageType, diet} = req.val;
        const {id} = await prisma.product.create({
            data: {
                label,
                expirationDate,
                quantity,
                nutriScore,
                storageType,
                diet
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

export const updateProduct = async (req, res) => {
    try {
        const {label, expirationDate, quantity, nutriScore, storageType, diet} = req.val;
        await prisma.product.update({
            data: {
                label,
                expirationDate,
                quantity,
                nutriScore,
                storageType,
                diet
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

export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.val;
        await prisma.product.delete({
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
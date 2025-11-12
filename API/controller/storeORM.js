import prisma from '../database/databaseORM.js';

export const getStore = async (req, res)=> {
    try {
        const store = await prisma.store.findUnique({
            where: {
                id: req.val.id
            }
        });
        if (store) {
            res.send(store);
        }else {
            return res.sendStatus(404);
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const getAllStores = async (_req, res)=> {
    try {
        const stores = await prisma.store.findMany();
        if(stores){
            res.send(stores);
        }else {
            res.sendStatus(404);
        }
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const getStoresWithInRange = async (req, res) => {/*TODO*/}

export const addStore = async (req, res) => {
    try {
        const {name, latitude, longitude, address} = req.val;
        const {id} =  await prisma.store.create({
            data: {
                name,
                latitude,
                longitude,
                address
            },
            select: { id: true }
        });
        res.status(201).send({ id });
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const updateStore = async (req, res) => {
    try {
        const {name, latitude, longitude, address} = req.val;
        await prisma.store.update({
            data: {
                name,
                latitude,
                longitude,
                address
            },
            where: {
                id: req.val.id
            }
        });
        res.sendStatus(200);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const deleteStore = async (req, res) => {
    try {
        const {id} = req.val;
        await prisma.store.delete({
            where: {
                id
            }
        });
        res.sendStatus(200);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

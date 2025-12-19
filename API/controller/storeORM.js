import prisma from '../database/databaseORM.js';
import { errorHandeling } from '../utils/errorHandeling.js';

const EARTH_RADIUS_KM = 6371;

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
    } catch (err) {
        return errorHandeling(res, err);
    }
};

export const getAllStores = async (_req, res)=> {
    try {
        const stores = await prisma.store.findMany();
        res.send(stores);
    } catch (err) {
        return errorHandeling(res, err);
    }
};

export const getStoresWithInRange = async (req, res) => {
    try {
        const {latitude, longitude, range} = req.val;
        const stores = await prisma.$queryRaw`
            SELECT * FROM (
                SELECT *,
                (${EARTH_RADIUS_KM} * acos(
                    cos(radians(${latitude})) *
                    cos(radians(latitude)) *
                    cos(radians(longitude) - radians(${longitude})) +
                    sin(radians(${latitude})) *
                    sin(radians(latitude))
                )) AS distance
                FROM store
            ) AS stores_with_distance
            WHERE distance < ${range};
        `;
        res.send(stores);
    } catch (err) {
        return errorHandeling(res, err);
    }
};


export const addStore = async (req, res) => {
    try {
        const {label, latitude, longitude} = req.val;
        const {id} =  await prisma.store.create({
            data: {
                label,
                latitude,
                longitude
            },
            select: { id: true }
        });
        res.status(201).send({ id });
    } catch (err) {
        return errorHandeling(res, err);
    }
};

export const updateStore = async (req, res) => {
    try {
        const {label, latitude, longitude} = req.val;
        await prisma.store.update({
            data: {
                label,
                latitude,
                longitude
            },
            where: {
                id: req.val.id
            }
        });
        res.sendStatus(204);
    } catch (err) {
        return errorHandeling(res, err);
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
        res.sendStatus(204);
    } catch (err) {
        return errorHandeling(res, err);
    }
};

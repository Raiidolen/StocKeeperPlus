import prisma from '../database/databaseORM.js';
import { hashing } from '../utils/hashUtils.js';

export const userPublicFields = {
    mail: true,
    username: true,
    isadmin: true
};

export const getUser = async (req, res)=> {
    try {
        const user = await prisma.user.findUnique({
            where: {
                mail: req.val.mail
            },
            select: userPublicFields
        });
        if(user){
            res.send(user);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

export const getAllUser = async (_req, res)=> {
    try {
        const users = await prisma.user.findMany({ select: userPublicFields });
        if(users){
            res.send(users);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const addUser = async (req, res) => {
    try {
        const {mail, username, password, isadmin} = req.val;
        const hashedPassword = await hashing(password);
        const {idMail} = await prisma.user.create({
            data: {
                mail,
                username,
                password: hashedPassword,
                isadmin
            },
            select: {
                mail: true
            }
        });
        res.status(201).send({idMail});
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

export const updateUser = async (req, res) => {
    try {
        const { mail, username, password, isadmin } = req.val;

        const dataToUpdate = {
            username,
            isadmin
        };

        if (password) {
            dataToUpdate.password = await hashing(password);
        }

        await prisma.user.update({
            where: { mail },
            data: dataToUpdate
        });

        res.sendStatus(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const {mail} = req.val;
        await prisma.user.delete({
            where: {
                mail
            }
        });
        res.sendStatus(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

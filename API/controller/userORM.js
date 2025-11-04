import prisma from '../database/databaseORM.js';


export const getUser = async (req, res)=> {
    try {
        const user = await prisma.user.findUnique({
            where: {
                mail: req.body.mail
            }
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
        const users = await prisma.user.findMany();
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
        const {mail, username, password, isadmin} = req.body;
        const {idMail} = await prisma.user.create({
            data: {
                mail,
                username,
                password,
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
        const {mail, username, password, isAdmin} = req.body;
        await prisma.user.update({
            data: {
                mail,
                username,
                password,
                isAdmin
            },
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

export const deleteUser = async (req, res) => {
    try {
        const {mail} = req.body;
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

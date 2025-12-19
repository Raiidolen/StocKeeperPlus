/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              mail:
 *                  type: string
 *                  format: email
 *                  example: username@gmail.com
 *              username:
 *                  type: string
 *                  example: username
 *              password:
 *                  type: string
 *                  minLength: 5
 *                  example: password
 *              isadmin:
 *                  type: boolean
 *                  example: false
 */
/**
 * @swagger
 * components:
 *  responses:
 *      getUser:
 *          description: the user
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 */
/**
 * @swagger
 * components:
 *  responses:
 *      getAllUser:
 *          description: list of users
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/User'
 */
/**
 * @swagger
 * components:
 *  responses:
 *      addUser:
 *          description: user created
 */
/**
 * @swagger
 * components:
 *  responses:
 *      updateUser:
 *          description: user updated
 */
/**
 * @swagger
 * components:
 *  responses:
 *      deleteUser:
 *          description: user deleted
 */

import prisma from '../database/databaseORM.js';
import { errorHandeling } from '../utils/errorHandeling.js';
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
            return errorHandeling(res, { code: 'P2025' });
        }
    } catch (err) {
        return errorHandeling(res, err);
    }
};

export const getAllUser = async (_req, res)=> {
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                mail: 'asc',
            },
            select: userPublicFields
        });

        res.send(users);
    } catch (err) {
        return errorHandeling(res, err);
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
        return errorHandeling(res, err);
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
    } catch (err) {
        return errorHandeling(res, err);
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
    } catch (err) {
        return errorHandeling(res, err);
    }
};

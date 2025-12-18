 /**
 * @swagger
 * components:
 *  schemas:
 *      userIDSchema:
 *          type: object
 *          properties:
 *              mail:
 *                  type: string
 *          required:
 *              - mail
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      userToAddSchema:
 *          type: object
 *          properties:
 *              mail:
 *                  type: string
 *                  format: email
 *              username:
 *                  type: string
 *              password:
 *                  type: string
 *                  minLength: 5
 *              isadmin:
 *                  type: boolean
 *          required:
 *              - mail
 *              - username
 *              - password
 *              - isadmin
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      userToUpdateSchema:
 *          type: object
 *          properties:
 *              mail:
 *                  type: string
 *                  format: email
 *              username:
 *                  type: string
 *              password:
 *                  type: string
 *                  minLength: 5
 *              isadmin:
 *                  type: boolean
 *          required:
 *              - mail
 */

import vine from '@vinejs/vine';

const userIDSchema = vine.object({
    mail: vine.string().trim().email()
});

const userToAddSchema = vine.object({
    mail: vine.string().trim().email(),
    username: vine.string().trim(),
    password: vine.string().trim().minLength(5) ,
    isadmin: vine.boolean()
});

const userToUpdateSchema = vine.object({
    mail: vine.string().trim().email(),
    username: vine.string().trim().optional(),
    password: vine.string().trim().optional(),
    isadmin: vine.boolean().optional()
});


export const
    searchedUser = vine.compile(userIDSchema),
    userToAdd = vine.compile(userToAddSchema),
    userToUpdate = vine.compile(userToUpdateSchema),
    userToDelete = vine.compile(userIDSchema);

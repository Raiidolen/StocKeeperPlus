 /**
 * @swagger
 * components:
 *  schemas:
 *      UserIDSchema:
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
 *      UserToAddSchema:
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
 *      RegisterSchema:
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
 *          required:
 *              - mail
 *              - username
 *              - password
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      UserToUpdateSchema:
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
/**
 * @swagger
 * components:
 *  schemas:
 *      UpdateMeSchema:
 *          type: object
 *          properties:
 *              username:
 *                  type: string
 *              password:
 *                  type: string
 *                  minLength: 5
 */

import vine from '@vinejs/vine';

const userIDSchema = vine.object({
    mail: vine.string().trim().email()
});

const userToAddSchema = vine.object({
    mail: vine.string().trim().email(),
    username: vine.string().trim(),
    password: vine.string().trim().minLength(5),
    isadmin: vine.boolean()
});

export const registerSchema = vine.object({
    mail: vine.string().trim().email(),
    username: vine.string().trim(),
    password: vine.string().trim().minLength(5)
    
});

const userToUpdateSchema = vine.object({
    mail: vine.string().trim().email(),
    username: vine.string().trim().optional(),
    password: vine.string().trim().minLength(5).optional(),
    isadmin: vine.boolean().optional()
});

export const updateMeSchema = vine.object({
    username: vine.string().trim().optional(),
    password: vine.string().trim().minLength(5).optional()
});




export const
    searchedUser = vine.compile(userIDSchema),
    userToAdd = vine.compile(userToAddSchema),
    userToAddNoAdmin = vine.compile(registerSchema),
    userToUpdate = vine.compile(userToUpdateSchema),
    userToDelete = vine.compile(userIDSchema),
    userToUpdateMe = vine.compile(updateMeSchema);

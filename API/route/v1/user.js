/**
 * @swagger
 * /user:
 *  post:
 *      tags:
 *          - User
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/userToAddSchema'
 *      responses:
 *          204:
 *              description: user created
 *          400:
 *              description: validation errors
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Opération échouée :"
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          message:
 *                                              type: string
 *                                              example: "The username field must be defined"
 *                                          rule:
 *                                              type: string
 *                                              example: "required"
 *                                          field:
 *                                              type: string
 *                                              example: "username"
 *          401:
 *              $ref: '#/components/responses/UnauthorizedError'
 *          500:
 *              description: Error server
 */
/**
 * @swagger
 * /user:
 *  patch:
 *      tags:
 *          - User
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/userToUpdateSchema'
 *      responses:
 *          204:
 *              description: user updated
 *          400:
 *              description: validation errors
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Opération échouée :"
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          message:
 *                                              type: string
 *                                              example: "The mail field must be defined"
 *                                          rule:
 *                                              type: string
 *                                              example: "required"
 *                                          field:
 *                                              type: string
 *                                              example: "mail"
 *          401:
 *              $ref: '#/components/responses/UnauthorizedError'
 *          500:
 *              description: Error server
 */
/**
 * @swagger
 * /user/get/{mail}:
 *  get:
 *      tags:
 *          - User
 *      parameters:
 *         - in: path
 *           name: mail
 *           schema:
 *             $ref: '#/components/schemas/userIDSchema'
 *           required: true
 *           description: String ID of the user to get
 *      responses:
 *          200:
 *              description: user found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              mail:
 *                                  type: string
 *                                  format: email
 *                                  example: username@gmail.com
 *                              username:
 *                                  type: string
 *                                  example: username
 *                              isadmin:
 *                                  type: boolean
 *                                  example: false
 *          400:
 *              description: validation errors
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Opération échouée :"
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          message:
 *                                              type: string
 *                                              example: "The mail field must be defined"
 *                                          rule:
 *                                              type: string
 *                                              example: "email"
 *                                          field:
 *                                              type: string
 *                                              example: "mail"
 *          404:
 *              description: user not found
 *          500:
 *              description: Error server
 */
/**
 * @swagger
 * /user/all:
 *  get:
 *      tags:
 *          - User
 *      responses:
 *          200:
 *              description: list of users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  mail:
 *                                      type: string
 *                                      format: email
 *                                      example: username@gmail.com
 *                                  username:
 *                                      type: string
 *                                      example: username
 *                                  isadmin:
 *                                      type: boolean
 *                                      example: false
 *          500:
 *              description: Error server
 */
/**
 * @swagger
 * /user:
 *  delete:
 *      tags:
 *          - User
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/userIDSchema'
 *      responses:
 *          204:
 *              description: user deleted
 *          400:
 *              description: validation errors
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Opération échouée :"
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          message:
 *                                              type: string
 *                                              example: "The mail field must be defined"
 *                                          rule:
 *                                              type: string
 *                                              example: "required"
 *                                          field:
 *                                              type: string
 *                                              example: "mail"
 *          404:
 *              description: user not found
 *          500:
 *              description: Error server
 */

import Router from 'express';

import {
    addUser,
    updateUser,
    getUser,
    getAllUser,
    deleteUser
}  from  '../../controller/userORM.js'
import {userValidatorMiddleware as PVM} from '../../middleware/userValidation.js';

const router = Router();

router.post('/', PVM.userToAdd, addUser);
router.patch('/', PVM.userToUpdate, updateUser);
router.get('/get/:mail', PVM.searchedUser, getUser);
router.get('/all', getAllUser);
router.delete('/', PVM.userToDelete, deleteUser);

export default router;
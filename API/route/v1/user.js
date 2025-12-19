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
 *                      $ref: '#/components/schemas/UserToAddSchema'
 *      responses:
 *          201:
 *              description: user created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UserIDSchema'
 *          400:
 *              description: validation errors
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Une erreur est survenue"
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
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Une erreur est survenue"
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
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
 *                      $ref: '#/components/schemas/UserToUpdateSchema'
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
 *                                  example: "Une erreur est survenue"
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
 *              description: validation errors
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "L'élément demandé n'a pas été trouvé."
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *          401:
 *              $ref: '#/components/responses/UnauthorizedError'
 *          500:
 *              description: Error server
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Une erreur est survenue"
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
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
 *             $ref: '#/components/schemas/UserIDSchema'
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
 *                                  example: "Une erreur est survenue"
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          message:
 *                                              type: string
 *                                              example: "The mail field must be a valid email address"
 *                                          rule:
 *                                              type: string
 *                                              example: "email"
 *                                          field:
 *                                              type: string
 *                                              example: "mail"
 *          404:
 *              description: validation errors
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "L'élément demandé n'a pas été trouvé."
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *          500:
 *              description: Error server
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Une erreur est survenue"
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
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
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Une erreur est survenue"
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
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
 *                      $ref: '#/components/schemas/UserIDSchema'
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
 *                                  example: "Une erreur est survenue"
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          message:
 *                                              type: string
 *                                              example: "The mail field must be a valid email address"
 *                                          rule:
 *                                              type: string
 *                                              example: "required"
 *                                          field:
 *                                              type: string
 *                                              example: "mail"
 *          404:
 *              description: validation errors
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "L'élément demandé n'a pas été trouvé."
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *          500:
 *              description: Error server
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Une erreur est survenue"
 *                              details:
 *                                  type: array
 *                                  items:
 *                                      type: object
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
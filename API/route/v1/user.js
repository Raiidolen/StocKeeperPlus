/**
 * @swagger
 * /user/register:
 *  post:
 *      security:
 *          - cookieAuth: []
 *      tags:
 *          - User
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/RegisterSchema'
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
 * /user/me:
 *  get:
 *      security:
 *          - cookieAuth: []
 *      tags:
 *          - User
 *      responses:
 *          200:
 *              description: user retrieved
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
 *          401:
 *              $ref: '#/components/responses/UnauthorizedError'
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
 * /user/me:
 *  patch:
 *      security:
 *          - cookieAuth: []
 *      tags:
 *          - User
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateMeSchema'
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
 *          401:
 *              $ref: '#/components/responses/UnauthorizedError'
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
 * /user/me:
 *  delete:
 *      security:
 *          - cookieAuth: []
 *      tags:
 *          - User
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
 *          401:
 *              $ref: '#/components/responses/UnauthorizedError'
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
 * /user:
 *  post:
 *      security:
 *          - cookieAuth: []
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
 *          403:
 *              $ref: '#/components/responses/ForbiddenError'
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
 *      security:
 *          - cookieAuth: []
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
 *          401:
 *              $ref: '#/components/responses/UnauthorizedError'
 *          403:
 *              $ref: '#/components/responses/ForbiddenError'
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
 * /user/get/{mail}:
 *  get:
 *      security:
 *          - cookieAuth: []
 *      tags:
 *          - User
 *      parameters:
 *         - in: path
 *           name: mail
 *           schema:
 *             type: string
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
 *          401:
 *              $ref: '#/components/responses/UnauthorizedError'
 *          403:
 *              $ref: '#/components/responses/ForbiddenError'
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
 *      security:
 *          - cookieAuth: []
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
 *          401:
 *              $ref: '#/components/responses/UnauthorizedError'
 *          403:
 *              $ref: '#/components/responses/ForbiddenError'
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
 *      security:
 *          - cookieAuth: []
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
 *          401:
 *              $ref: '#/components/responses/UnauthorizedError'
 *          403:
 *              $ref: '#/components/responses/ForbiddenError'
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
    deleteUser,
    addUserNoAdmin,
    getMyUser,
    updateMyUser,
    deleteMyUser
}  from  '../../controller/userORM.js'
import {userValidatorMiddleware as PVM} from '../../middleware/userValidation.js';
import { checkAdmin } from '../../middleware/identification/checkAdmin.js';

const router = Router();


router.post('/register', PVM.userToAddNoAdmin, addUserNoAdmin); 

router.get('/me', getMyUser); 
router.patch('/me', PVM.userToUpdateMe, updateMyUser); 
router.delete('/me', deleteMyUser);

router.get('/all', checkAdmin, getAllUser); 
router.get('/get/:mail', checkAdmin, PVM.searchedUser, getUser); 
router.post('/', checkAdmin, PVM.userToAdd, addUser); 
router.delete('/', checkAdmin, deleteUser); 
router.patch('/', checkAdmin, PVM.userToUpdate, updateUser); 

export default router;
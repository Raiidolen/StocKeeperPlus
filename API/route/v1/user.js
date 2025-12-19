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
    updateMyUser
}  from  '../../controller/userORM.js'
import {userValidatorMiddleware as PVM} from '../../middleware/userValidation.js';
import { checkAdmin } from '../../middleware/identification/checkAdmin.js';

const router = Router();

// --- ROUTES PUBLIQUES ---
router.post('/register', PVM.userToAddNoAdmin, addUserNoAdmin); 

// --- ROUTES UTILISATEUR CONNECTÉ (Lui-même) ---
router.get('/me', getMyUser); // Voir son propre profil
router.patch('/me', PVM.userToUpdateMe, updateMyUser); // Modifier son profil
//router.delete('/me', verifyToken, deleteMyUser); // Supprimer son propre compte

// --- ROUTES ADMIN ---
router.get('/all', checkAdmin, getAllUser); // Voir tout le monde
router.get('/get/:mail', PVM.searchedUser, getUser); // get par le mail on s'en sert ????
router.post('/admin/create', checkAdmin, PVM.userToAdd, addUser); // Créer n'importe quel rôle
router.delete('/:id', checkAdmin, deleteUser); // Supprimer n'importe qui 
router.patch('/', PVM.userToUpdate, updateUser); // modifier n'importe qui (on pourrait ajouter une protect mais c'est overkill pour nous)

export default router;
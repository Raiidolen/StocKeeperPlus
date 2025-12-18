/**
 * @swagger
 * components:
 *  schemas:
 *      Food:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  example: 1
 *              label:
 *                  type: string
 *                  example: "Pâtes complètes"
 *              diet:
 *                  type: string
 *                  nullable: true
 *                  example: "vegetarien"
 *              nutriscore:
 *                  type: string
 *                  nullable: true
 *                  maxLength: 1
 *                  example: "A"
 *              measuringunit:
 *                  type: string
 *                  example: "gram"
 *              barcode:
 *                  type: string
 *                  example: "1234567890123"
 *              imagepath:
 *                  type: string
 *                  nullable: true
 *                  example: "/images/default.jpg"
 */
/**
 * @swagger
 * /food:
 *  post:
 *      tags:
 *          - Food
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FoodToAddSchema'
 *      responses:
 *          201:
 *              description: food created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *          400:
 *              description: the error(s) described
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type: string
 *          401:
 *              $ref: '#/components/responses/UnauthorizedError'
 *          500:
 *              description: Error server
 */
/**
 * @swagger
 * /food:
 *  patch:
 *      tags:
 *          - Food
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FoodToUpdateSchema'
 *      responses:
 *          204:
 *              description: food updated
 *          400:
 *              description: the error(s) described
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type: string
 *          401:
 *              $ref: '#/components/responses/UnauthorizedError'
 *          500:
 *              description: Error server
 */
/**
 * @swagger
 * /food/get/{id}:
 *  get:
 *      tags:
 *          - Food
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             $ref: '#/components/schemas/FoodIDSchema'
 *           required: true
 *           description: Numeric ID of the food to get
 *      responses:
 *          200:
 *              description: food found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Food'
 *          400:
 *              description: the error(s) described
 *          404:
 *              description: food not found
 *          500:
 *              description: Error server
 */
/**
 * @swagger
 * /food/barcode/{barcode}:
 *  get:
 *      tags:
 *          - Food
 *      parameters:
 *         - in: path
 *           name: barcode
 *           schema:
 *             $ref: '#/components/schemas/FoodBarcodeSchema'
 *           required: true
 *           description: Barcode of the food
 *      responses:
 *          200:
 *              description: food found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Food'
 *          400:
 *              description: the error(s) described
 *          404:
 *              description: food not found
 *          500:
 *              description: Error server
 */
/**
 * @swagger
 * /food/all:
 *  get:
 *      tags:
 *          - Food
 *      responses:
 *          200:
 *              description: list of foods
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Food'
 *          500:
 *              description: Error server
 */

/**
 * @swagger
 * /food:
 *  delete:
 *      tags:
 *          - Food
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/FoodIDSchema'
 *      responses:
 *          204:
 *              description: food deleted
 *          400:
 *              description: the error(s) described
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type: string
 *          404:
 *              description: food not found
 *          500:
 *              description: Error server
 */

import Router from 'express';

import {
    addFood,
    updateFood,
    getFood,
    getFoodByBarcode,
    getAllFood,
    deleteFood
}  from  '../controller/foodORM.js'
import {foodValidatorMiddleware as PVM} from '../middleware/foodValidation.js';

const router = Router();

router.post('/', PVM.foodToAdd, addFood);
router.patch('/', PVM.foodToUpdate, updateFood);
router.get('/get/:id', PVM.searchedFood, getFood);
router.get('/barcode/:barcode', PVM.searchedFoodByBarcode, getFoodByBarcode);
router.get('/all', getAllFood);
router.delete('/', PVM.foodToDelete, deleteFood);

export default router;
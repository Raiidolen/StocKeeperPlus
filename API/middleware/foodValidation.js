/**
 * @swagger
 * components:
 *  schemas:
 *      FoodIDSchema:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *          required:
 *              - id
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      FoodToAddSchema:
 *          type: object
 *          properties:
 *              label:
 *                  type: string
 *              diet:
 *                  type: string
 *              nutriscore:
 *                  type: string
 *                  maxLength: 1
 *                  pattern: "^[A-Ea-e]$"
 *              measuringunit:
 *                  type: string
 *              barcode:
 *                  type: string
 *                  pattern: "^(?:\\d{8}|\\d{13})$"
 *          required:
 *              - label
 *              - measuringunit
 *              - barcode
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      FoodToUpdateSchema:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *              label:
 *                  type: string
 *              diet:
 *                  type: string
 *              nutriscore:
 *                  type: string
 *                  maxLength: 1
 *                  pattern: "^[A-Ea-e]$"
 *              measuringunit:
 *                  type: string
 *              barcode:
 *                  type: string
 *                  pattern: "^(?:\\d{8}|\\d{13})$"
 *              imagepath:
 *                  type: string
 *          required:
 *              - id
 *              - barcode
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      FoodBarcodeSchema:
 *          type: object
 *          properties:
 *              barcode:
 *                  type: string
 *                  pattern: "^(?:\\d{8}|\\d{13})$"
 *          required:
 *              - barcode
 */


import { errorHandeling } from '../utils/errorHandeling.js';
import * as foodValidator from './validator/food.js';

export const foodValidatorMiddleware = {
    searchedFood: async (req, res, next) => {
        try {
            req.val  = await foodValidator.searchedFood.validate(req.params);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    searchedFoodByBarcode: async(req, res, next) => {
        try {
            req.val  = await foodValidator.searchedFoodByBarcode.validate(req.params);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    foodToAdd: async(req, res, next) => {
        try {
            req.val  = await foodValidator.foodToAdd.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    foodToUpdate: async(req, res, next) => {
        try {
            req.val  = await foodValidator.foodToUpdate.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    foodToDelete: async(req, res, next) => {
        try {
            req.val  = await foodValidator.foodToDelete.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    }
};

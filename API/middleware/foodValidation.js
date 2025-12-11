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

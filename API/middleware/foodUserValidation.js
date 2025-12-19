import { errorHandeling } from '../utils/errorHandeling.js';
import * as foodUserValidator from './validator/foodUser.js';

export const foodUserValidatorMiddleware = {
    searchedFoodUser: async (req, res, next) => {
        try {
            req.val  = await foodUserValidator.searchedFoodUser.validate(req.params);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    foodUserToAdd: async(req, res, next) => {
        try {
            req.val  = await foodUserValidator.foodUserToAdd.validate(req.body);
            req.val.food_id = req.val.food;
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    foodUserToUpdate: async(req, res, next) => {
        try {
            req.val  = await foodUserValidator.foodUserToUpdate.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    foodUserToDelete: async(req, res, next) => {
        try {
            req.val  = await foodUserValidator.foodUserToDelete.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    foodUserToAddMe: async(req, res, next) => {
        try {
            
            req.val = await foodUserValidator.foodUserToAddMe.validate(req.body);
            
            req.val.food_id = req.val.food; 
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },

    foodUserToUpdateMe: async(req, res, next) => {
        try {
            
            req.val = await foodUserValidator.foodUserToUpdateMe.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },

    foodUserToDeleteMe: async(req, res, next) => {
        try {
            
            req.val = await foodUserValidator.foodUserToDeleteMe.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    }
};

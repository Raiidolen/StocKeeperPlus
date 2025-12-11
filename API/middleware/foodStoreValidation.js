import { errorHandeling } from '../utils/errorHandeling.js';
import * as foodStoreValidator from './validator/foodStore.js';

export const foodStoreValidatorMiddleware = {
    foodStoreToGet: async (req, res, next) => {
        try {
            req.val  = await foodStoreValidator.foodStoreToGet.validate(req.params);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    foodStoreToAdd: async (req, res, next) => {
        try {
            req.val  = await foodStoreValidator.foodStoreToAdd.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    foodStoreToUpdate: async (req, res, next) => {
        try {
            req.val  = await foodStoreValidator.foodStoreToUpdate.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    foodStoreToDelete: async (req, res, next) => {
        try {
            req.val  = await foodStoreValidator.foodStoreToDelete.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    }
};

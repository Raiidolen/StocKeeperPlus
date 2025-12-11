import { errorHandeling } from '../utils/errorHandeling.js';
import * as storeValidator from './validator/store.js';

export const storeValidatorMiddlewares = {
    storeToGet: async (req, res, next) => {
        try {
            req.val  = await storeValidator.storeToGet.validate(req.params);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    storeToGetAll: async (req, res, next) => {
        try {
            req.val  = await storeValidator.storeToGetAll.validate(req.params);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    storeToGetInRange: async (req, res, next) => {
        try {
            req.val  = await storeValidator.storeToGetInRange.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    storeToAdd: async(req, res, next) => {
        try {
            req.val  = await storeValidator.storeToAdd.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    storeToUpdate: async(req, res, next) => {
        try {
            req.val  = await storeValidator.storeToUpdate.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    storeToDelete: async(req, res, next) => {
        try {
            req.val  = await storeValidator.storeToDelete.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    }};

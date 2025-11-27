import * as foodStoreValidator from './validator/foodStore.js';

export const foodStoreValidatorMiddleware = {
    foodStoreToGet: async (req, res, next) => {
        try {
            req.val  = await foodStoreValidator.foodStoreToGet.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    },
    foodStoreToAdd: async (req, res, next) => {
        try {
            req.val  = await foodStoreValidator.foodStoreToAdd.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    },
    foodStoreToUpdate: async (req, res, next) => {
        try {
            req.val  = await foodStoreValidator.foodStoreToUpdate.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    },
    foodStoreToDelete: async (req, res, next) => {
        try {
            req.val  = await foodStoreValidator.foodStoreToDelete.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    }
};

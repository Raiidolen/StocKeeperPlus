import * as storeValidator from '../validators/storeValidator.js';

export const storeValidatorMiddlewares = {
    storeToGet: async (req, res, next) => {
        try {
            req.val  = await storeValidator.storeToGet.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    storeToGetAll: async (req, res, next) => {
        try {
            req.val  = await storeValidator.storeToGetAll.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    storeToGetInRange: async (req, res, next) => {
        try {
            req.val  = await storeValidator.storeToGetInRange.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    storeToAdd: async(req, res, next) => {
        try {
            req.val  = await storeValidator.storeToAdd.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    storeToUpdate: async(req, res, next) => {
        try {
            req.val  = await storeValidator.storeToUpdate.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    storeToDelete: async(req, res, next) => {
        try {
            req.val  = await storeValidator.storeToDelete.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    }};

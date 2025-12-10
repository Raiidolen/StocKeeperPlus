import * as foodValidator from './validator/food.js';

export const foodValidatorMiddleware = {
    searchedFood: async (req, res, next) => {
        try {
            req.val  = await foodValidator.searchedFood.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    searchedFoodByBarcode: async(req, res, next) => {
        try {
            req.val  = await foodValidator.searchedFoodByBarcode.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    foodToAdd: async(req, res, next) => {
        try {
            req.val  = await foodValidator.foodToAdd.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    foodToUpdate: async(req, res, next) => {
        try {
            req.val  = await foodValidator.foodToUpdate.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    foodToDelete: async(req, res, next) => {
        try {
            req.val  = await foodValidator.foodToDelete.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    }
};

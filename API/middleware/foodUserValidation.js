import * as foodUserValidator from './validator/foodUser.js';

export const foodUserValidatorMiddleware = {
    searchedFoodUser: async (req, res, next) => {
        try {
            req.val  = await foodUserValidator.searchedFoodUser.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    foodUserToAdd: async(req, res, next) => {
        try {
            req.val  = await foodUserValidator.foodUserToAdd.validate(req.body);
            req.val.food_id = req.val.food;
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    foodUserToUpdate: async(req, res, next) => {
        try {
            req.val  = await foodUserValidator.foodUserToUpdate.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    foodUserToDelete: async(req, res, next) => {
        try {
            req.val  = await foodUserValidator.foodUserToDelete.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    }
};

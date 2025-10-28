import * as productValidator from './validator/product.js';

export const productValidatorMiddlewares = {
    searchedProduct : async (req, res, next) => {
        try {
            req.val  = await productValidator.searchedProduct.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    productToAdd: async(req, res, next) => {
        try {
            req.val  = await productValidator.productToAdd.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    productToUpdate: async(req, res, next) => {
        try {
            req.val  = await productValidator.productToUpdate.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    productToDelete: async(req, res, next) => {
        try {
            req.val  = await productValidator.productToDelete.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    }
};
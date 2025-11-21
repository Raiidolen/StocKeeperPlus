import * as userValidator from './validator/user.js';

export const userValidatorMiddleware = {
    searchedUser: async (req, res, next) => {
        try {
            req.val  = await userValidator.searchedUser.validate(req.params);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    userToAdd: async(req, res, next) => {
        try {
            req.val  = await userValidator.userToAdd.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    userToUpdate: async(req, res, next) => {
        try {
            req.val  = await userValidator.userToUpdate.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    },
    userToDelete: async(req, res, next) => {
        try {
            req.val  = await userValidator.userToDelete.validate(req.body);
            next();
        } catch (e) {
            res.status(400).send(e.messages);
        }
    }
};

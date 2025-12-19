import { errorHandeling } from '../utils/errorHandeling.js';
import * as userValidator from './validator/user.js';

export const userValidatorMiddleware = {
    searchedUser: async (req, res, next) => {
        try {
            req.val  = await userValidator.searchedUser.validate(req.params);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    userToAdd: async(req, res, next) => {
        try {
            req.val  = await userValidator.userToAdd.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    userToAddNoAdmin: async(req, res, next) => {
        try {
            req.val  = await userValidator.userToAddNoAdmin.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    userToUpdate: async(req, res, next) => {
        try {
            req.val  = await userValidator.userToUpdate.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    userToUpdateMe: async(req, res, next) => {
        try {
            req.val  = await userValidator.userToUpdateMe.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    },
    userToDelete: async(req, res, next) => {
        try {
            req.val  = await userValidator.userToDelete.validate(req.body);
            next();
        } catch (e) {
            return errorHandeling(res, e);
        }
    }
};

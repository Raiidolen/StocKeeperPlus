import { errorHandeling } from '../utils/errorHandeling.js';
import * as recipeValidator from './validator/recipe.js';

export const recipeValidatorMiddleware = {
    searchedRecipe: async(req, res, next) => {
        try {
            req.val = await recipeValidator.searchedRecipe.validate(req.params);
            next();
        }
        catch(e){
            return errorHandeling(res, e);
        }
    },
    addRecipe: async(req, res, next) => {
        try {
            req.val = await recipeValidator.addRecipe.validate(req.body);
            next();
        }
        catch(e){
            return errorHandeling(res, e);
        }
    },
    updateRecipe: async(req, res, next) => {
        try {
            req.val = await recipeValidator.updateRecipe.validate(req.body);
            next();
        }
        catch(e){
            return errorHandeling(res, e);
        }
    },
    deleteRecipe: async(req, res, next) => {
        try {
            req.val = await recipeValidator.deleteRecipe.validate(req.body);
            next();
        }
        catch(e){
            return errorHandeling(res, e);
        }
    }
}
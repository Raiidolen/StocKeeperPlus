import { deleteIngredientAmount } from '../controller/ingredientAmountORM.js';
import { errorHandeling } from '../utils/errorHandeling.js';
import * as ingredientAmountValidator from './validator/ingredientAmount.js';

export const ingredientAmountValidatorMiddleware = {
    searchedIngredientAmount: async(req, res, next) => {
        try {
            req.val = await ingredientAmountValidator.searchedIngredientAmount.validate(req.params);
            next();
        }
        catch(e){
            return errorHandeling(res, e);
        }
    },
    addOrUpdateIngredientAmount: async(req, res, next) => {
        try{
            req.val = await ingredientAmountValidator.addOrUpdateIngredientAmount.validate(req.body);
            next();
        }
        catch(e){
            return errorHandeling(res, e);
        }
    },
    deleteIngredientAmount: async(req, res, next) => {
        try {
            req.val = await ingredientAmountValidator.deleteIngredientAmount.validate(req.body);
            next();
        }
        catch(e){
            return errorHandeling(res, e);
        }
    }
}
import * as ingredientAmountValidator from './validator/ingredientAmount.js';

export const ingredientAmountValidatorMiddleware = {
    searchedIngredientAmount: async(req, res, next) => {
        try {
            req.val = await ingredientAmountValidator.searchedIngredientAmount.validate(req.params);
            next();
        }
        catch(e){
            res.status(400).send(e.messages);
        }
    },
    addOrUpdateIngredientAmount: async(req, res, next) => {
        try{
            req.val = await ingredientAmountValidator.addOrUpdateIngredientAmount.validate(req.body);
            next();
        }
        catch(e){
            res.status(400).send(e.messages);
        }
    },
}
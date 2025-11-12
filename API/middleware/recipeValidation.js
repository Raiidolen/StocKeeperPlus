import * as recipeValidator from './validator/recipe.js';

export const recipeValidatorMiddleware = {
    searchedRecipe: async(req, res, next) => {
        try {
            req.val = await recipeValidator.searchedRecipe.validate(req.params);
            next();
        }
        catch(e){
            res.status(400).send(e.messages);
        }
    }
}
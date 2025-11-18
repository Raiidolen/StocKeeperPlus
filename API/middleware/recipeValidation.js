    import * as recipeValidator from './validator/recipe.js';

export const recipeValidatorMiddleware = {
    searchedRecipe: async(req, res, next) => {
        try {
            req.val = await recipeValidator.searchedRecipe.validate(req.body);
            next();
        }
        catch(e){
            res.status(400).send(e.messages);
        }
    },
    addRecipe: async(req, res, next) => {
        try {
            req.val = await recipeValidator.addRecipe.validate(req.body);
            next();
        }
        catch(e){
            res.status(400).send(e.messages);
        }
    },
    updateRecipe: async(req, res, next) => {
        try {
            req.val = await recipeValidator.updateRecipe.validate(req.body);
            next();
        }
        catch(e){
            res.status(400).send(e.messages);
        }
    },
}
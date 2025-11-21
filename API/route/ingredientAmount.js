import Router from 'express';

import { getIngredientAmount, getAllIngredientAmount, addIngredientAmount, deleteIngredientAmount, updateIngredientAmount } from '../controller/ingredientAmountORM.js';
import { ingredientAmountValidatorMiddleware as IAVM } from '../middleware/ingredientAmountValidation.js';

const router = Router();

router.get('/get/:recipe_id/:food_id', IAVM.searchedIngredientAmount, getIngredientAmount);
router.get('/all', getAllIngredientAmount);
router.post('/', IAVM.addOrUpdateIngredientAmount, addIngredientAmount);
router.patch('/', IAVM.addOrUpdateIngredientAmount, updateIngredientAmount);
router.delete('/', IAVM.searchedIngredientAmount, deleteIngredientAmount);

export default router;
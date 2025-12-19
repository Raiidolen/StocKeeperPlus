import Router from 'express';

import { getIngredientAmount, getAllIngredientAmount, addIngredientAmount, deleteIngredientAmount, updateIngredientAmount } from '../../controller/ingredientAmountORM.js';
import { ingredientAmountValidatorMiddleware as IAVM } from '../../middleware/ingredientAmountValidation.js';
import { checkAdmin } from '../../middleware/identification/checkAdmin.js';

const router = Router();

router.get('/get/:recipe_id/:food_id', IAVM.searchedIngredientAmount, getIngredientAmount);
router.get('/all', getAllIngredientAmount);
router.post('/', checkAdmin, IAVM.addOrUpdateIngredientAmount, addIngredientAmount);
router.patch('/', checkAdmin, IAVM.addOrUpdateIngredientAmount, updateIngredientAmount);
router.delete('/', checkAdmin, IAVM.deleteIngredientAmount, deleteIngredientAmount);

export default router;
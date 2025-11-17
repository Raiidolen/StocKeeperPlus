import Router from 'express';

import { getIngredientAmount } from '../controller/ingredientAmountORM.js';
import { ingredientAmountValidatorMiddleware as IAVM } from '../middleware/ingredientAmountValidation.js';

const router = Router();

router.get('/', IAVM.searchedIngredientAmount, getIngredientAmount);

export default router;
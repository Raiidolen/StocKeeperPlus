import Router from 'express';

import { getRecipe, addRecipe } from '../controller/recipeORM.js'
import {recipeValidatorMiddleware as PVM} from '../middleware/recipeValidation.js';
import { addFood } from '../controller/foodORM.js';

const router = Router();

router.get('/:id', PVM.searchedRecipe, getRecipe);
router.post('/', addRecipe);

export default router;
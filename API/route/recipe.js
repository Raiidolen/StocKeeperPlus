import Router from 'express';

import { getRecipe, addRecipe } from '../controller/recipeORM.js'
import {recipeValidatorMiddleware as PVM} from '../middleware/recipeValidation.js';

const router = Router();

router.get('/:id', PVM.searchedRecipe, getRecipe);
router.post('/', PVM.addRecipe, addRecipe);

export default router;
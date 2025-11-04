import Router from 'express';

import { getRecipe } from '../controller/recipeORM.js'
import {recipeValidatorMiddleware as PVM} from '../middleware/recipeValidation.js';

const router = Router();

router.get('/:id', PVM.searchedRecipe, getRecipe);

export default router;
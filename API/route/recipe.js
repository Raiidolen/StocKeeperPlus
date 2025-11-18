import Router from 'express';

import { getRecipe, addRecipe, updateRecipe, deleteRecipe } from '../controller/recipeORM.js'
import {recipeValidatorMiddleware as PVM} from '../middleware/recipeValidation.js';

const router = Router();

router.get('/:id', PVM.searchedRecipe, getRecipe);
router.post('/', PVM.addRecipe, addRecipe);
router.patch('/', PVM.updateRecipe, updateRecipe);
router.delete('/:id', PVM.searchedRecipe, deleteRecipe);

export default router;
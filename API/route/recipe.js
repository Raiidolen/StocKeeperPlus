import Router from 'express';

import { getRecipe, getAllRecipe, addRecipe, updateRecipe, deleteRecipe } from '../controller/recipeORM.js'
import {recipeValidatorMiddleware as PVM} from '../middleware/recipeValidation.js';

const router = Router();

router.post('/get', PVM.searchedRecipe, getRecipe);
router.get('/all', getAllRecipe);
router.post('/', PVM.addRecipe, addRecipe);
router.patch('/', PVM.updateRecipe, updateRecipe);
router.delete('/', PVM.searchedRecipe, deleteRecipe);

export default router;
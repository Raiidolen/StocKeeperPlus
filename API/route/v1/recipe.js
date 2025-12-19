import Router from 'express';

import { getRecipe, getAllRecipe, addRecipe, updateRecipe, deleteRecipe } from '../../controller/recipeORM.js'
import {recipeValidatorMiddleware as PVM} from '../../middleware/recipeValidation.js';
import { checkAdmin } from '../../middleware/identification/checkAdmin.js';

const router = Router();

router.get('/get/:id', PVM.searchedRecipe, getRecipe);
router.get('/all', getAllRecipe);
router.post('/', checkAdmin, PVM.addRecipe, addRecipe);
router.patch('/', checkAdmin, PVM.updateRecipe, updateRecipe);
router.delete('/', checkAdmin, PVM.deleteRecipe, deleteRecipe);

export default router;
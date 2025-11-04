import Router from 'express';

import {
    addFood,
    updateFood,
    getFood,
    getAllFood,
    deleteFood
}  from  '../controller/foodORM.js'
import {foodValidatorMiddleware as PVM} from '../middleware/foodValidation.js';

const router = Router();

router.post('/', PVM.foodToAdd, addFood);
router.patch('/', PVM.foodToUpdate, updateFood);
router.get('/', PVM.searchedFood, getFood);
router.get('/all', getAllFood);
router.delete('/', PVM.foodToDelete, deleteFood);

export default router;
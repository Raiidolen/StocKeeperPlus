import Router from 'express';

import {
    addFoodUser,
    updateFoodUser,
    getFoodUser,
    getAllFoodUser,
    deleteFoodUser
}  from  '../controller/foodUserORM.js'
import {foodUserValidatorMiddleware as PVM} from '../middleware/foodUserValidation.js';

const router = Router();

router.post('/', PVM.foodUserToAdd, addFoodUser);
router.patch('/', PVM.foodUserToUpdate, updateFoodUser);
router.get('/', PVM.searchedFoodUser, getFoodUser);
router.get('/all', getAllFoodUser);
router.delete('/', PVM.foodUserToDelete, deleteFoodUser);

export default router;
import Router from 'express';

import {
    addFoodUser,
    updateFoodUser,
    getFoodUser,
    getAllFoodUser,
    deleteFoodUser,
    getFoodUserByMail,
    addMyFoodUser,
    updateMyFoodUser,
    deleteMyFoodUser,
    getAllMyFoodUser,
    getMyFoodUserByMail
}  from  '../../controller/foodUserORM.js'
import {foodUserValidatorMiddleware as PVM} from '../../middleware/foodUserValidation.js';
import { checkAdmin } from '../../middleware/identification/checkAdmin.js';

const router = Router();

router.post('/me', PVM.foodUserToAddMe, addMyFoodUser);
router.patch('/me', PVM.foodUserToUpdateMe, updateMyFoodUser);
router.delete('/me', PVM.foodUserToDeleteMe, deleteMyFoodUser);
router.get('/me', getAllMyFoodUser);
router.get('/calendar/me', getMyFoodUserByMail);

router.post('/', checkAdmin, PVM.foodUserToAdd, addFoodUser);
router.patch('/', checkAdmin, PVM.foodUserToUpdate, updateFoodUser);
router.get('/get/:food/:user_mail', checkAdmin, PVM.searchedFoodUser, getFoodUser);
router.get('/all', checkAdmin, getAllFoodUser);
router.delete('/', checkAdmin, PVM.foodUserToDelete, deleteFoodUser);

router.get('/calendar/:user_mail/foods', checkAdmin, getFoodUserByMail);

export default router;
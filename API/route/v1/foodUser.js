import Router from 'express';

import {
    addFoodUser,
    updateFoodUser,
    getFoodUser,
    getAllFoodUser,
    deleteFoodUser,
    getFoodUserByMail
}  from  '../../controller/foodUserORM.js'
import {foodUserValidatorMiddleware as PVM} from '../../middleware/foodUserValidation.js';
// import { checkJWT } from '../middleware/identification/checkJWT.js'; --> pas utilisé ?
// import { checkAdmin } from '../middleware/identification/checkAdmin.js'; --> pas utilisé ?

const router = Router();

router.post('/', PVM.foodUserToAdd, addFoodUser);
router.patch('/', PVM.foodUserToUpdate, updateFoodUser);
router.get('/get/:food/:user_mail', PVM.searchedFoodUser, getFoodUser);
router.get('/all', getAllFoodUser);
router.delete('/', PVM.foodUserToDelete, deleteFoodUser);

router.get('/calendar/:user_mail/foods', getFoodUserByMail);

export default router;
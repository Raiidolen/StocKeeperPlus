import Router from 'express';

import {
    addUser,
    updateUser,
    getUser,
    getAllUser,
    deleteUser
}  from  '../controller/userORM.js'
import {userValidatorMiddleware as PVM} from '../middleware/foodValidation.js';

const router = Router();

router.post('/', PVM.UserToAdd, addUser);
router.patch('/', PVM.UserToUpdate, updateUser);
router.get('/', PVM.searchedUser, getUser);
router.get('/all/', getAllUser);
router.delete('/:id', PVM.userToDelete, deleteUser);

export default router;
import Router from 'express';

import {
    addUser,
    updateUser,
    getUser,
    getAllUser,
    deleteUser
}  from  '../controller/userORM.js'
import {userValidatorMiddleware as PVM} from '../middleware/userValidation.js';

const router = Router();

router.post('/', PVM.userToAdd, addUser);
router.patch('/', PVM.userToUpdate, updateUser);
router.post('/post', PVM.searchedUser, getUser);
router.get('/all', getAllUser);
router.delete('/', PVM.userToDelete, deleteUser);

export default router;
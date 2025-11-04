import Router from 'express';

import {
    addUser,
    updateUser,
    getUser,
    getAllUser,
    deleteUser
}  from  '../controller/userORM.js'
//import {userValidatorMiddlewares as PVM} from '../middleware/validation.js';

const router = Router();

router.post('/', addUser);
router.patch('/', updateUser);
router.get('/', getUser);
router.get('/all/', getAllUser);
router.delete('/:id', deleteUser);

export default router;
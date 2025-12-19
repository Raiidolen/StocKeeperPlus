import Router from 'express';

import {
    addFoodStore,
    updateFoodStore,
    deleteFoodStore,
    getFoodStore,
    getAllFoodStores
} from '../../controller/foodStoreORM.js';
import {foodStoreValidatorMiddleware as FSM} from '../../middleware/foodStoreValidation.js';
import { checkAdmin } from '../../middleware/identification/checkAdmin.js';

const router = Router();

router.post('/', checkAdmin, FSM.foodStoreToAdd, addFoodStore);
router.patch('/', checkAdmin, FSM.foodStoreToUpdate, updateFoodStore);
router.delete('/', checkAdmin, FSM.foodStoreToDelete, deleteFoodStore);
router.get('/get/:food/:store', FSM.foodStoreToGet, getFoodStore);
router.get('/all', getAllFoodStores);

export default router;

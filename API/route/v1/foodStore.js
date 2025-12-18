import Router from 'express';

import {
    addFoodStore,
    updateFoodStore,
    deleteFoodStore,
    getFoodStore,
    getAllFoodStores
} from '../../controller/foodStoreORM.js';
import {foodStoreValidatorMiddleware as FSM} from '../../middleware/foodStoreValidation.js';

const router = Router();

router.post('/', FSM.foodStoreToAdd, addFoodStore);
router.patch('/', FSM.foodStoreToUpdate, updateFoodStore);
router.delete('/', FSM.foodStoreToDelete, deleteFoodStore);
router.get('/get/:food/:store', FSM.foodStoreToGet, getFoodStore);
router.get('/all', getAllFoodStores);

export default router;

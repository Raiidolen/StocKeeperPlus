import Router from 'express';

import {
    addStore,
    updateStore,
    deleteStore,
    getStore,
    getAllStores, 
    getStoresWithInRange
} from '../controller/storeORM.js';
import {storeValidatorMiddlewares as SVM} from '../middleware/validation.js';

const router = Router();

router.post('/', SVM.storeToAdd, addStore);
router.put('/:id', SVM.storeToUpdate, updateStore);
router.delete('/:id', SVM.storeToDelete, deleteStore);
router.get('/:id', SVM.storeToGet, getStore);
router.get('/', SVM.storeToGetAll, getAllStores);
router.get('/range', SVM.storeToGetInRange, getStoresWithInRange);

export default router;
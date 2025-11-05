import Router from 'express';

import {
    addStore,
    updateStore,
    deleteStore,
    getStore,
    getAllStores, 
    getStoresWithInRange
} from '../controller/storeORM.js';
import {storeValidatorMiddlewares as SVM} from '../middleware/storeValidation.js';

const router = Router();

router.get('/range', SVM.storeToGetInRange, getStoresWithInRange);
router.get('/', SVM.storeToGetAll, getAllStores);
router.get('/:id', SVM.storeToGet, getStore);
router.post('/', SVM.storeToAdd, addStore);
router.put('/:id', SVM.storeToUpdate, updateStore);
router.delete('/:id', SVM.storeToDelete, deleteStore);

export default router;
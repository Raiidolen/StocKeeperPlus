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

router.get('/', SVM.storeToGetInRange, getStoresWithInRange);
router.get('/all', SVM.storeToGetAll, getAllStores);
router.get('/', SVM.storeToGet, getStore);
router.post('/', SVM.storeToAdd, addStore);
router.put('/', SVM.storeToUpdate, updateStore);
router.delete('/', SVM.storeToDelete, deleteStore);

export default router;
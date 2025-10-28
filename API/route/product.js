import Router from 'express';

import {
    addProduct,
    updateProduct,
    getProduct,
    getAllProduct,
    deleteProduct
}  from  '../controler/productORM.js'
import {productValidatorMiddlewares as PVM} from '../middleware/validation.js';

const router = Router();

router.post('/', PVM.productToAdd, addProduct);
router.patch('/', PVM.productToUpdate, updateProduct);
router.get('/:id', PVM.searchedProduct, getProduct);
router.get('/', getAllProduct);
router.delete('/:id', PVM.productToDelete, deleteProduct);

export default router;
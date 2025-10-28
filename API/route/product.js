import Router from 'express';

import {
    addProduct,
    updateProduct,
    getProduct,
    getAllProduct,
    deleteProduct
}  from  '../controler/productORM.js'

const router = Router();

router.post('/', addProduct);
router.patch('/', updateProduct);
router.get('/:id', getProduct);
router.get('/', getAllProduct);
router.delete('/:id', deleteProduct);
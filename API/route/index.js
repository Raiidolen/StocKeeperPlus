import {Router} from 'express';
import {default as productRouter} from './product.js'
const router = Router();

router.use('/product', productRouter);

export default router;
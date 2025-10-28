import {Router} from 'express';
import {default as authRouter} from './auth.js'
import {default as productRouter} from './product.js'
const router = Router();

router.use("/auth", authRouter);
router.use('/product', productRouter);

export default router;
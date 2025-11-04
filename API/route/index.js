import {Router} from 'express';
import {default as authRouter} from './auth.js'
import {default as foodRouter} from './food.js'
import 'dotenv/config';
const router = Router();

router.use("/auth", authRouter);
router.use('/food', foodRouter);


export default router;
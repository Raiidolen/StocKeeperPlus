import {Router} from 'express';
import {default as authRouter} from './auth.js'
import {default as foodRouter} from './food.js'
import {default as userRouter} from './user.js'
import {default as storeRouter} from './store.js'
import 'dotenv/config';
const router = Router();

router.use("/auth", authRouter);
router.use('/food', foodRouter);
router.use('/store', storeRouter);
router.use('/user', userRouter);

export default router;
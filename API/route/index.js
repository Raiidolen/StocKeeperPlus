import {Router} from 'express';
import {default as authRouter} from './auth.js'
import {default as userRouter} from './user.js'
import {default as foodRouter} from './food.js'
import {default as recipeRouter} from './recipe.js'
import {default as storeRouter} from './store.js'
import {default as foodUserRouter} from './foodUser.js'
import {default as foodStoreRouter} from './foodStore.js'
import {default as ingredientAmountRouter} from './ingredientAmount.js'
import {default as metaDataRouter} from './metaData.js'
import {default as notificationRouter} from './notification.js'
import 'dotenv/config';
const router = Router();

router.use("/auth", authRouter);
router.use('/user', userRouter);
router.use('/food', foodRouter);
router.use('/recipe', recipeRouter);
router.use('/store', storeRouter);
router.use('/foodUser', foodUserRouter);
router.use('/foodStore', foodStoreRouter);
router.use('/ingredientAmount', ingredientAmountRouter);
router.use('/', metaDataRouter);
router.use('/notification', notificationRouter);

export default router;
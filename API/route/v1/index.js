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

import 'dotenv/config';
import { checkJWT } from '../../middleware/identification/checkJWT.js';
const router = Router();

router.use('/auth', authRouter);
router.use('/user', checkJWT, userRouter);
router.use('/food', checkJWT, foodRouter);
router.use('/recipe', checkJWT, recipeRouter);
router.use('/store', checkJWT, storeRouter);
router.use('/foodUser', checkJWT, foodUserRouter);
router.use('/foodStore', checkJWT, foodStoreRouter);
router.use('/ingredientAmount', checkJWT, ingredientAmountRouter);
router.use('/', checkJWT, metaDataRouter);

export default router;
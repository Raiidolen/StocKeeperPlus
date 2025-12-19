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
import { checkAdmin } from '../../middleware/identification/checkAdmin.js';
const router = Router();

router.use('/auth', authRouter);
router.use('/user', checkJWT, checkAdmin, userRouter);
router.use('/food', checkJWT, checkAdmin, foodRouter);
router.use('/recipe', checkJWT, checkAdmin, recipeRouter);
router.use('/store', checkJWT, checkAdmin, storeRouter);
router.use('/foodUser', checkJWT, checkAdmin, foodUserRouter);
router.use('/foodStore', checkJWT, checkAdmin, foodStoreRouter);
router.use('/ingredientAmount', checkJWT, checkAdmin, ingredientAmountRouter);
router.use('/', checkJWT, checkAdmin, metaDataRouter);

export default router;
import {Router} from 'express';
import {default as authRouter} from './auth.js'
import {default as userRouter} from './user.js'
import {default as foodRouter} from './food.js'
<<<<<<< HEAD
import {default as storeRouter} from './store.js'
=======
import {default as recipeRouter} from './recipe.js'
>>>>>>> origin/Developpement
import {default as foodUserRouter} from './foodUser.js'
import {default as foodStoreRouter} from './foodStore.js'
import 'dotenv/config';
const router = Router();

router.use("/auth", authRouter);
router.use('/user', userRouter);
router.use('/food', foodRouter);
<<<<<<< HEAD
router.use('/store', storeRouter);
router.use('/foodUser', foodUserRouter);
router.use('/foodStore', foodStoreRouter);
=======
router.use('/recipe', recipeRouter);
router.use('/foodUser', foodUserRouter);

>>>>>>> origin/Developpement
export default router;
import {Router} from 'express';
import {default as authRouter} from './auth.js'
import {default as foodRouter} from './food.js'
import {default as recipeRouter} from './recipe.js'
import 'dotenv/config';
const router = Router();

router.use("/auth", authRouter);
router.use('/food', foodRouter);
router.use('/recipe', recipeRouter);

export default router;
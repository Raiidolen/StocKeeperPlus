import {Router} from 'express';
import {default as foodRouter} from './food.js'
const router = Router();

router.use('/food', foodRouter);

export default router;
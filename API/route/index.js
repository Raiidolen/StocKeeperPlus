import {Router} from 'express';
import {default as authRouter} from './auth.js'
const router = Router();

router.use("/auth", authRouter);

export default router;
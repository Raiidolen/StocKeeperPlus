import Router from 'express';
import { getNotifications } from '../../controller/notificationORM.js';
import { checkJWT } from '../../middleware/identification/checkJWT.js';

const router = Router();


router.get('/', getNotifications);

export default router;
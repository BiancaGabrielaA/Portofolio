import { Router } from 'express';
import isAuthorized from '../middleware/auth.middleware.ts';
import { getMyData, getAllUsers, getUserInfo } from '../controllers/user.controller.ts';
const router = Router();

router.get('/get-my-info', isAuthorized, getMyData);
router.get('/get-info/:userId', isAuthorized, getUserInfo);
router.get('/get-all', isAuthorized, getAllUsers);

export default router;
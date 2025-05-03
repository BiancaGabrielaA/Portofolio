import { Router } from 'express';
import { getQuestions, insertQuestion, getQuestion, getUserQuestions } from '../controllers/question.controller.ts'
import isAuthorized from '../middleware/auth.middleware.ts';

const router = Router();

router.get('/get-all', isAuthorized, getQuestions);
router.post('/insert', isAuthorized, insertQuestion);
router.get('/question/:questionId', isAuthorized,  getQuestion);
router.get('/questions/:userId', isAuthorized, getUserQuestions);

export default router;
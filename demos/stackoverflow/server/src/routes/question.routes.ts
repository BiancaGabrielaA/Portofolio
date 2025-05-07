import { Router } from 'express';
import { getQuestions, insertQuestion, getQuestion, getUserQuestions, deleteUserQuestion, updateQuestion, getMyQuestions } from '../controllers/question.controller.ts'
import isAuthorized from '../middleware/auth.middleware.ts';

const router = Router();

router.get('/get-all', isAuthorized, getQuestions);
router.post('/insert', isAuthorized, insertQuestion);
router.get('/get-question/:questionId', isAuthorized,  getQuestion);
router.get('/get-all/:userId', isAuthorized, getUserQuestions);
router.get('/get-my-all', isAuthorized, getMyQuestions);
router.delete('/delete-question/:questionId', isAuthorized, deleteUserQuestion);
router.patch('/update-question/:questionId', isAuthorized, updateQuestion);

export default router;
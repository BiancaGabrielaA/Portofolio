import { Router } from 'express';
import { getQuestions, insertQuestion, getQuestion, getUserQuestions } from '../controllers/question.controller.ts'

const router = Router();

router.get('/get-all', getQuestions);
router.post('/insert', insertQuestion);
router.get('/question/:questionId', getQuestion);
router.get('/questions/:userId', getUserQuestions);

export default router;
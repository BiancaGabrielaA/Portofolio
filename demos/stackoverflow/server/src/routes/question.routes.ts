import { Router } from 'express';
import { getQuestions, insertQuestion, getQuestion, getUserQuestions } from '../controllers/question.controller.ts'

const router = Router();

router.get('/questions', getQuestions);
router.post('/question', insertQuestion);
router.get('/question/:questionId', getQuestion);
router.get('/questions/:userId', getUserQuestions);
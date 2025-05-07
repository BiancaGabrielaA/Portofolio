import { Router } from 'express';
import { getAllAnswers, getMyAnswers, getQuestionAnswer, insertAnswer, deleteAnswer, updateAnswer } from '../controllers/answer.controller.ts';
import isAuthorized from '../middleware/auth.middleware.ts';

const router = Router();

router.get("/get-all", isAuthorized, getAllAnswers);
router.get("/get-my-all", isAuthorized, getMyAnswers);
router.get("/get-question-answers/:questionId", isAuthorized, getQuestionAnswer);
router.post("/insert-answer", isAuthorized, insertAnswer);
router.delete("/delete-answer/:answerId", isAuthorized, deleteAnswer);
router.patch("/update-answer/:answerId", isAuthorized, updateAnswer);

export default router;
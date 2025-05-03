import type { Request, Response } from 'express';
import Question from '../models/question.ts'

export const insertQuestion = async (req: Request, res: Response): Promise<void> => {
  const userId = (req as any).user?.userId; // typecast if needed
  const { text } = req.body;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const question = new Question({ text, userId });
    await question.save();
    res.status(201).json({ success: true, data: question });
  } catch (err) {
    console.error('Error saving question:', err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getQuestions = async (req: Request, res: Response): Promise<void> => {
  try {
    const questions = await Question.find();
    res.status(200).json({ success: true, data: questions });
  } catch (err) {
    console.error('Error fetching questions:', err);
    res.status(500).json({ message: 'Failed to retrieve questions' });
  }
};

export const getQuestion = () => {
    
}

export const getUserQuestions = () => {
    
}
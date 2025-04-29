import type { Request, Response } from 'express';
import Question from '../models/question.ts'

export const insertQuestion = async (req: Request, res: Response): Promise<void> => {
    const { text } = req.body;
    const userId = req.user; // assuming you set req.user from middleware
  
    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    
    try {
      const question = new Question({ text, userId });
      await question.save();
      res.status(201).json({ success: true, data: question });
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };


export const getQuestions = () => {
   
}

export const getQuestion = () => {
    
}

export const getUserQuestions = () => {
    
}
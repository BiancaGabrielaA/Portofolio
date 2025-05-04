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

export const getQuestion = async (req: Request, res: Response) => {
  const { questionId } = req.params;

  try {
    const question = await Question.findById(questionId);
    if (!question) {
      res.status(404).json({ message: 'Question not found' });
      return 
    }

    res.status(200).json({ success: true, data: question });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getUserQuestions = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const questions = await Question.find({ userId });
    res.status(200).json({ success: true, data: questions });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


export const deleteUserQuestion = async (req: Request, res: Response) => {
  const { questionId } = req.params;
  console.log(`Attempting to delete question with ID: ${questionId}`); // Log the incoming ID

  try {
    const deleted = await Question.findByIdAndDelete(questionId);
    if (!deleted) {
      res.status(404).json({ message: 'Question not found' });
      return;
    }

    console.log(`Question with ID: ${questionId} deleted`); // Log success
    res.status(200).json({ success: true, message: 'Question deleted' });
    return;
  } catch (error) {
    console.error('Error during deletion:', error); // Log any errors
    res.status(500).json({ message: 'Server error' });
    return;
  }
};


export const updateQuestion = async (req: Request, res: Response) => {
  const { questionId } = req.params;
  const { text } = req.body;  // Assuming you're updating the question's text

  try {
    // Find the question by ID and update it
    const updatedQuestion = await Question.findByIdAndUpdate(
      questionId,
      { text },  // You can update other fields here as needed
      { new: true }  // This ensures that the updated document is returned
    );

    if (!updatedQuestion) {
      res.status(404).json({ message: 'Question not found' });
      return;
    }

    res.status(200).json({ success: true, data: updatedQuestion });
    return;
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
    return;
  }
};

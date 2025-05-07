import { Request, Response } from "express";
import Answer from "../models/answer";


export const getAllAnswers = async (req: Request, res: Response) => {
  try {
    const answers = await Answer.find().populate("userId", "email username").populate("questionId", "text");
    res.status(200).json({ success: true, data: answers });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getMyAnswers = async (req: Request, res: Response) => {
  try {
    const user = req.user as { userId: string };
    const answers = await Answer.find({ userId: user.userId }).populate("questionId", "text");
    res.status(200).json({ success: true, data: answers });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const getQuestionAnswer = async (req: Request, res: Response) => {
  const { questionId } = req.params;

  try {
    const answers = await Answer.find({ questionId }).populate("userId", "email username");
    res.status(200).json({ success: true, data: answers });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const insertAnswer = async (req: Request, res: Response) => {
  const { text, questionId } = req.body;
  const user = req.user as { userId: string };

  try {
    const newAnswer = new Answer({
      text,
      questionId,
      userId: user.userId
    });

    const saved = await newAnswer.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteAnswer = async (req: Request, res: Response) => {
  const { answerId } = req.params;
  const user = req.user as { userId: string };

  try {
    const deleted = await Answer.findOneAndDelete({ _id: answerId, userId: user.userId });
    if (!deleted) {
      res.status(404).json({ success: false, message: "Answer not found or not authorized" });
      return;
    }
    res.status(200).json({ success: true, message: "Answer deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// UPDATE an answer
export const updateAnswer = async (req: Request, res: Response) => {
  const { answerId } = req.params;
  const { text } = req.body;
  const user = req.user as { userId: string };

  try {
    const updated = await Answer.findOneAndUpdate(
      { _id: answerId, userId: user.userId },
      { text },
      { new: true }
    );

    if (!updated) {
      res.status(404).json({ success: false, message: "Answer not found or not authorized" });
      return;
    }

    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

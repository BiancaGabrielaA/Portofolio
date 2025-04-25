import { Document, ObjectId } from "mongoose";

export interface IQuestion extends Document {
    description: string;
    user: ObjectId;
    answers: any[]; // or: Array<ObjectId> if referencing another model
    likes: number;
  }
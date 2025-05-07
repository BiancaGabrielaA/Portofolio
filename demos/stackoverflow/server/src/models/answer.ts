import { Schema, Types, model } from "mongoose";

const answerSchema = new Schema({
  text:       { type: String, required: true },
  questionId: { type: Types.ObjectId, ref: 'Question', required: true },
  userId:     { type: Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true, 
});

const Answer = model('Answer', answerSchema);

export default Answer;
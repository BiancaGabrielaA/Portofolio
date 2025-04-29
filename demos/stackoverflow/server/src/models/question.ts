import { Schema, Types, model } from "mongoose";

const questionSchema = new Schema({
  text:       { type: String, required: true },
  userId:     { type: Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true, 
});

const Question = model('Question', questionSchema);

export default Question;
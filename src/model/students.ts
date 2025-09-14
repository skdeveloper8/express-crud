import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  name: String;
  age: Number;
  rollNumber: Number;
  gender: "male" | "female" | "other";
  address?: String;
}
const studentSchema = new Schema({
  name: String,
  age: Number,
  rollNumber: Number,
  address: { type: String, default: "NA" },
  gender: { type: String, enum: ["male", "female", "other"] },
});

const student = mongoose.model<IStudent>("Student", studentSchema);
export default student;

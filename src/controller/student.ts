import StudentModel from "../model/students.js";
import type { Request, Response } from "express";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const data = req.body as {
      name: String;
      age: Number;
      rollNumber: Number;
      gender: String;
      address?: String;
    };

    const newStudent = await StudentModel.create(data);
    return res.json({ message: "Student created successfully",...newStudent.toObject() });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in creating Student", err });
  }
};

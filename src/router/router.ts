import { Router } from "express";
import {createStudent} from "../controller/student.js"

const router=Router();

// router.get();
router.post("/create-student",createStudent);
// router.patch();
// router.delete();
export default router
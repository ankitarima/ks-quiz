import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { registartion } from "../controllers/participants/registration.js";
import { participants } from "../controllers/participants/participants.js";
import { get_quiz_questions } from "../controllers/questions/questions.js";
const main_router = express.Router();

main_router.route("/questions").get(get_quiz_questions);
main_router.route("/participants").get(participants).post(registartion);
export default main_router;

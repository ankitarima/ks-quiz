import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {
  login,
  registartion,
} from "../controllers/participants/registration.js";
import { participants } from "../controllers/participants/participants.js";
import { get_quiz_questions } from "../controllers/questions/questions.js";
import { save_click } from "../controllers/participants/save_click.js";
const main_router = express.Router();

main_router.route("/questions").get(get_quiz_questions);
main_router.route("/click").post(save_click);
main_router.route("/login").post(login);
main_router.route("/participants").get(participants).post(registartion);
export default main_router;

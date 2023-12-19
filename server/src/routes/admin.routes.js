import express from "express";
import { login } from "../controllers/auth/login.js";
import { signup } from "../controllers/auth/signup.js";

const admin_router = express.Router();

admin_router.post("/signup", signup);
admin_router.post("/login", login);

export default admin_router;

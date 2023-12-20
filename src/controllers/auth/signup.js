import async_handler from "../../middlewares/async.middleware.js";
import db_connection from "../../models/index.js";
import { hashed_password } from "../../utils/auth.util.js";
import ErrorResponse from "../../utils/error.util.js";

export const signup = async_handler(async (req, res, next) => {
  const { name, email } = req.body;
  let { password } = req.body;

  if (!password) {
    return next(new ErrorResponse("Please enter valid fields", 200));
  }

  password = await hashed_password(password);
  const admin = await db_connection.admin_user_model.create({
    name,
    email,
    password,
    role: "ADMIN",
  });

  res.status(200).json({ success: true, admin });
});

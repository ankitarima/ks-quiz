import { get_signed_token, match_password } from "../../utils/auth.util.js";
import async_handler from "../../middlewares/async.middleware.js";
import db_connection from "../../models/index.js";
import ErrorResponse from "../../utils/error.util.js";

export const login = async_handler(async (req, res, next) => {
  const { type, email, password } = req.body;
  const admin = await db_connection.admin_user_model.findOne({
    where: { email },
  });

  if (!admin) {
    return next(new ErrorResponse("Invalid credentials", 200));
  }

  const is_matched = await match_password(password, admin.password);

  if (!is_matched) {
    return next(new ErrorResponse("Invalid credentials", 200));
  }

  const token = get_signed_token(admin.admin_id);

  const data = {
    name: admin.first,
    email: email,
    role: admin.role,
  };

  res.status(200).json({ success: true, data: { type, token, user: data } });
});

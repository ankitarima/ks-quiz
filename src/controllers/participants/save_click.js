import async_handler from "../../middlewares/async.middleware.js";
import db_connection from "../../models/index.js";
import ErrorResponse from "../../utils/error.util.js";

export const save_click = async_handler(async (req, res, next) => {
  const { email, product } = req.body;

  if (!email || !product) {
    return next(new ErrorResponse(`Required fields are missing`, 200));
  }

  const existing_participant = await db_connection.participant_model.findOne({
    where: { email },
  });

  const data = { product: 1 };

  if (existing_participant) {
    existing_participant[product] = 1;
    existing_participant.save();
    return res.status(200).json({ success: true, data: "Clicked" });
  }

  res.status(200).json({ success: true, data: participant });
});

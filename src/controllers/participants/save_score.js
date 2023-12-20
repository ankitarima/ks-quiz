import async_handler from "../../middlewares/async.middleware.js";
import db_connection from "../../models/index.js";
import ErrorResponse from "../../utils/error.util.js";

export const save_score = async_handler(async (req, res, next) => {
  const {
    name,
    email,
    phone_number,
    organization,
    designation,
    consent,
    score,
  } = req.body;

  if (
    !name ||
    !email ||
    !phone_number ||
    !organization ||
    !designation ||
    !consent ||
    !score
  ) {
    return next(new ErrorResponse(`Required fields are missing`, 200));
  }

  const data = {
    name,
    email,
    phone_number,
    organization,
    designation,
    consent,
    score,
  };

  const existing_participant = await db_connection.participant_model.findOne({
    where: { email },
  });

  if (existing_participant) {
    const participant = await db_connection.participant_model.update(
      { ...data },
      { where: { email } }
    );

    if (!exam_content[0]) {
      return next(new ErrorResponse("Unable to save scores right now", 200));
    }
    return res.status(200).json({ success: false, data: existing_participant });
  }

  const participant = await db_connection.participant_model.create({ ...data });

  res.status(200).json({ success: true, data: participant });
});

import async_handler from "../../middlewares/async.middleware.js";
import db_connection from "../../models/index.js";
import ErrorResponse from "../../utils/error.util.js";

export const registartion = async_handler(async (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    organization,
    designation,
    consent,
    score,
  } = req.body;

  if (
    !first_name ||
    !email ||
    !phone_number ||
    !organization ||
    !designation ||
    !consent
  ) {
    return next(new ErrorResponse(`Required fields are missing`, 200));
  }

  const existing_participant = await db_connection.participant_model.findOne({
    where: { email },
  });

  if (existing_participant && score) {
    const participant = await db_connection.participant_model.update(
      {
        first_name,
        last_name,
        email,
        phone_number,
        organization,
        designation,
        consent,
        score,
        quiz_taken: 1,
      },
      { where: { email } }
    );

    if (!participant[0]) {
      return next(new ErrorResponse("Unable to save scores right now", 200));
    }
    return res.status(200).json({ success: false, data: existing_participant });
  }

  const participant = await db_connection.participant_model.create({
    first_name,
    last_name,
    email,
    phone_number,
    organization,
    designation,
    consent,
    score: 0,
  });

  res.status(200).json({ success: true, data: participant });
});

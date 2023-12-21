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

  if (!first_name || !email || !phone_number || !organization || !designation) {
    return next(new ErrorResponse(`Required fields are missing`, 200));
  }

  const existing_participant = await db_connection.participant_model.findOne({
    where: { email },
  });

  if (existing_participant && score && existing_participant?.score === 0 && existing_participant?.quiz_taken !== 1) {
    existing_participant.score = score;
    existing_participant.quiz_taken = 1;

    existing_participant.save();
    const updated = await db_connection.participant_model.findOne({
      where: { email },
    });
    return res.status(200).json({ success: true, data: updated });
  }

  if (existing_participant) {
    return res.status(200).json({ success: true, data: existing_participant });
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

export const login = async_handler(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new ErrorResponse(`Required fields are missing`, 200));
  }

  const existing_participant = await db_connection.participant_model.findOne({
    where: { email },
  });

  if (existing_participant) {
    return res.status(200).json({ success: true, data: existing_participant });
  }

  res.status(200).json({ success: false, data: {} });
});

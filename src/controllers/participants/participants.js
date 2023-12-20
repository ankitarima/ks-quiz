import async_handler from "../../middlewares/async.middleware.js";
import db_connection from "../../models/index.js";
import ErrorResponse from "../../utils/error.util.js";

export const participants = async_handler(async (req, res, next) => {
  let sql = `SELECT *  FROM participant ORDER BY score DESC, first_name DESC `;

  const participants = await db_connection.sequelize.query(sql, {
    type: db_connection.sequelize.QueryTypes.SELECT,
  });

  if (!participants) {
    return next(new ErrorResponse(`Unable to fetch participants`, 200));
  }

  res.status(200).json({ success: true, data: participants });
});

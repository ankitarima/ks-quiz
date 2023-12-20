export default (sequelize, DataTypes) => {
  const participant = sequelize.define("participant", {
    participant_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    organization: {
      type: DataTypes.STRING,
    },
    designation: {
      type: DataTypes.STRING,
    },
    consent: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.FLOAT,
    },
    quiz_taken: {
      type: DataTypes.INTEGER,
    },
  });

  return participant;
};

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
      unique: true,
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
    xdr: { type: DataTypes.INTEGER, defaultValue: 0 },
    endpoint_security_for_business: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    edr_expert: { type: DataTypes.INTEGER, defaultValue: 0 },
    edr_optimum: { type: DataTypes.INTEGER, defaultValue: 0 },
    anti_targeted_attack_platform: { type: DataTypes.INTEGER, defaultValue: 0 },
    security_for_mail_server: { type: DataTypes.INTEGER, defaultValue: 0 },
    security_for_microsoft_office_365: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    industrial_cybersecurity: { type: DataTypes.INTEGER, defaultValue: 0 },
    hybrid_cloud_security: { type: DataTypes.INTEGER, defaultValue: 0 },
  });

  return participant;
};

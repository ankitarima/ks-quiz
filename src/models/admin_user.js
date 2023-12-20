export default (sequelize, DataTypes) => {
  const admin_user = sequelize.define(
    "admin_user",
    {
      admin_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.TEXT,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["email"],
        },
      ],
    }
  );

  return admin_user;
};

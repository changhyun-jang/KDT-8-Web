import DataTypes from "sequelize";
const UserModel = (sequelize) => {
  const User = sequelize.define(
    "user1",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      freezeTablename: true,
      timestamps: false,
    }
  );
  return User;
};

export { UserModel };

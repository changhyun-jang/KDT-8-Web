const { DataTypes } = require("sequelize");

const Model = (sequelize) => {
  return sequelize.define("user1", {
    //컬럼정의
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primarykey: true,
      autoIncrement: true,
    },
    userid: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    pw: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  });
};
module.exports = {
  Model,
};

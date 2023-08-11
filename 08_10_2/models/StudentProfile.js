const { DataTypes } = require("sequelize");
const studentProfileModel = (sequelize) => {
  const StudentPorfile = sequelize.define("StudentProfile", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    major: {
      type: DataTypes.STRING(31),
      allowNull: false,
    },
    enroll: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return StudentPorfile;
};
module.exports = studentProfileModel;

"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Student = require("./Students")(sequelize);
db.Classes = require("./Classes")(sequelize);
db.StudentProfile = require("./StudentProfile")(sequelize);

//관계형성
//1:1학생과 프로필
db.Student.hasOne(db.StudentProfile);
db.StudentProfile.belongsTo(db.Student);

//1:다 학생과 강의
//외래키 지정을안하면 시퀄라이저가 알아서 외래키 형성
//카멜케이스로 이름 생성
db.Student.hasMany(db.Classes);
db.Classes.belongsTo(db.Student);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

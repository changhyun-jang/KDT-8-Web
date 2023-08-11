import { UserModel } from "./User";
import Sequelize from "sequelize";
import config2 from "/../config/config.json";
("use strict");

const config = config2["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
//model
db.User = UserModel(sequelize);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };

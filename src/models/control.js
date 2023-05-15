import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Control = sequelize.define(
  "control", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }
}
);

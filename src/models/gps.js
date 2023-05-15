import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Viaje } from "./viaje.js";


export const Gps = sequelize.define(
  "gps", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  location: {
    type: DataTypes.JSON
  }
}
);
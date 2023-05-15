import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Gps } from "./gps.js";
import { Viaje } from "./viaje.js";


export const Interno = sequelize.define(
  "interno", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING
  }
}
);

//Relacion con vuelta
Interno.hasMany(Viaje, {
  foreinkey: "internoId",
  sourceKey: "id",
  required: true
});
Viaje.belongsTo(Interno, { foreinkey: "internoId", targetId: "id" });

//Relacion con vuelta
Interno.hasMany(Gps, {
  foreinkey: "internoId",
  sourceKey: "id",
  required: true
});
Gps.belongsTo(Interno, { foreinkey: "internoId", targetId: "id" });
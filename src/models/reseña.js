import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Reseña = sequelize.define(
    "reseña", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING,
        require: true
    },
    type: {
        type: DataTypes.SMALLINT,
        require: true
    },
    reference: {
        type: DataTypes.JSON,
        require: true
    },
}
);



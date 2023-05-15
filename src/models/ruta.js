import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js"; 

export const Ruta = sequelize.define(
    "ruta", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING,
        require: true
    },
    ida: {
        type: DataTypes.JSON,
        require: true
    },
    vuelta: {
        type: DataTypes.JSON,
        require: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        require: true,
        defaultValue: false
    }
}
);



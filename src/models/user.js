import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Control } from "./control.js";
import { Interno } from "./interno.js";
import { Reseña } from "./reseña.js";
import { Viaje } from "./viaje.js";

export const User = sequelize.define(
    "user", {
    id: { //C.I.
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    admin: {
        type: DataTypes.BOOLEAN
    }
}
);


//Relacion con interno
User.hasMany(Interno, {
    foreinkey: "userId",
    sourceKey: "id",
    required: true
});
Interno.belongsTo(User, { foreinkey: "userId", targetId: "id" });

//Relacion con Vuelta
User.hasMany(Viaje, {
    foreinkey: "userId",
    sourceKey: "id",
    required: true
});
Viaje.belongsTo(User, { foreinkey: "userId", targetId: "id" });

//Relacion con Control
User.hasMany(Control, {
    foreinkey: "userId",
    sourceKey: "id",
    required: true
});
Control.belongsTo(User, { foreinkey: "userId", targetId: "id" });

//Relacion con Reseña
User.hasMany(Reseña, {
    foreinkey: "userId",
    sourceKey: "id",
    required: true
});
Reseña.belongsTo(User, { foreinkey: "userId", targetId: "id" });

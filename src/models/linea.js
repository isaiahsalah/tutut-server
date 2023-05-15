import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Control } from "./control.js";
import { Interno } from "./interno.js";
import { Ruta } from "./ruta.js";

export const Linea = sequelize.define(
    "linea", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
    },
    direction: {
        type: DataTypes.JSON,
        require: true
    },
    color: {
        type: DataTypes.JSON,
        require: true
    },
    phone: {
        type: DataTypes.STRING
    },
},
    {
        hooks: {
            afterCreate(linea) {
                Ruta.create(
                    {
                        "name": "ruta principal",
                        "description": "Esta es una ruta por defauld",
                        "status": true,
                        "lineaId": linea.id,
                        "ida": {
                            "origin": {
                                "location": {
                                    "lat": -17.785166725952873,
                                    "lng": -63.18365899042968
                                },
                                "time": 0
                            },
                            "destination": {
                                "location": {
                                    "lat": -17.7802873,
                                    "lng": -63.17768209999999
                                },
                                "time": 5
                            },
                            "waypoints": [],
                            "polyline": "dypkB~os`KOoLIoDUgC_@eD]{Da@gEqAHqDTqH^cETaFj@",
                            "route": [
                                {
                                    "lat": -17.78595,
                                    "lng": -63.18352000000001
                                },
                                {
                                    "lat": -17.785870000000003,
                                    "lng": -63.181360000000005
                                },
                                {
                                    "lat": -17.78582,
                                    "lng": -63.18048
                                },
                                {
                                    "lat": -17.78571,
                                    "lng": -63.17980000000001
                                },
                                {
                                    "lat": -17.78555,
                                    "lng": -63.17897000000001
                                },
                                {
                                    "lat": -17.785400000000003,
                                    "lng": -63.17803000000001
                                },
                                {
                                    "lat": -17.785230000000002,
                                    "lng": -63.17703
                                },
                                {
                                    "lat": -17.78482,
                                    "lng": -63.177080000000004
                                },
                                {
                                    "lat": -17.78393,
                                    "lng": -63.17719
                                },
                                {
                                    "lat": -17.782400000000003,
                                    "lng": -63.177350000000004
                                },
                                {
                                    "lat": -17.78142,
                                    "lng": -63.17746
                                },
                                {
                                    "lat": -17.78029,
                                    "lng": -63.17768
                                }
                            ]
                        },
                        "vuelta": {
                            "origin": {
                                "location": {
                                    "lat": -17.779441149250204,
                                    "lng": -63.17773693442382
                                },
                                "time": 0
                            },
                            "destination": {
                                "location": {
                                    "lat": -17.7848948,
                                    "lng": -63.1825391
                                },
                                "time": 5
                            },
                            "waypoints": [],
                            "polyline": "xuokBnkr`Kd@dGTbHD`AnEWrKi@nEUT`FJtE",
                            "route": [
                                {
                                    "lat": -17.78029,
                                    "lng": -63.17768
                                },
                                {
                                    "lat": -17.78048,
                                    "lng": -63.178990000000006
                                },
                                {
                                    "lat": -17.78059,
                                    "lng": -63.18045000000001
                                },
                                {
                                    "lat": -17.780620000000003,
                                    "lng": -63.180780000000006
                                },
                                {
                                    "lat": -17.781660000000002,
                                    "lng": -63.18066
                                },
                                {
                                    "lat": -17.78368,
                                    "lng": -63.18045000000001
                                },
                                {
                                    "lat": -17.78472,
                                    "lng": -63.18034000000001
                                },
                                {
                                    "lat": -17.784830000000003,
                                    "lng": -63.181470000000004
                                },
                                {
                                    "lat": -17.78489,
                                    "lng": -63.18254
                                }
                            ]
                        }
                    }
                ).then(
                    console.log("si se pudo bb")
                );
            }
        }
    }
);

//Relacion con interno
Linea.hasMany(Interno, {
    foreinkey: "lineaId",
    sourceKey: "id",
    required: true
});
Interno.belongsTo(Linea, { foreinkey: "lineaId", targetId: "id" });

//Relacion con Control
Linea.hasMany(Control, {
    foreinkey: "lineaId",
    sourceKey: "id",
    required: true
});
Control.belongsTo(Linea, { foreinkey: "lineaId", targetId: "id" });

//Relacion con Ruta
Linea.hasMany(Ruta, {
    foreinkey: "lineaId",
    sourceKey: "id",
    required: true
});
Ruta.belongsTo(Linea, { foreinkey: "lineaId", targetId: "id" });



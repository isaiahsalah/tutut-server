import app from './app.js'
import dotenv from "dotenv";
import { sequelize } from "./database/database.js"

dotenv.config();

const port = 3000;

async function main() {
    await sequelize.sync({ force: false });
    console.log('--> Conexión establecida con postgresql <--')
    app.listen(port);
    console.log('--> Escuchando en el puerto: ' + port + ' <--')
}

main()
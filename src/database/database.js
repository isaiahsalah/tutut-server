import Sequelize from "sequelize"
import dotenv from "dotenv";

dotenv.config();

const database = process.env.PG_DATABASE;
const user = process.env.PG_USER;
const pass = process.env.PG_PASS;
const host = process.env.PG_IP;

export const sequelize = new Sequelize(database, user, pass, {
    host: host,
    dialect: 'postgres'
})
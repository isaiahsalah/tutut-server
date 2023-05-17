import app from './app.js';
import dotenv from 'dotenv';
import { sequelize } from './database/database.js';
import http from 'http';
import { Server } from 'socket.io';

dotenv.config();
const port = process.env.PORT || 3000;

async function main() {
    await sequelize.sync({ force: false });
    console.log('--> Conexión establecida con PostgreSQL <--');

    const server = http.createServer(app);

    const io = new Server(server, {
        cors: {
            origin: '*',
        },
    });

    io.on('connection', (socket) => {
        socket.on('conectado', () => {
            console.log('Está conectado');
        });

        socket.on('location', (gps) => {
            io.emit('gps', gps);
            //console.log(gps);
        });
    });

    server.listen(port, () => {
        console.log('--> Servidor y socket en funcionamiento en el puerto: ' + port + ' <--');
    });
}

main();
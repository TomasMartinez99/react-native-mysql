import mysql from 'mysql2/promise';
import { config } from "./config";

// Conexión a la bd
export const connect = async () => {
    return await mysql.createConnection(config);
}

connect();
import "dotenv/config"
import { Sequelize } from "sequelize";

if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASS) {
    throw new Error("Faltan variables de entorno para la conexion a la BD")
}

const DBConnection = new Sequelize({
    dialect: 'postgres',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialectOptions: {
        ssl: process.env.NODE_ENV === 'production' ? { require: true } : false
    },
    logging: false
})

async function testConnection() {
    try {
        await DBConnection.authenticate()
        console.log("Conexion establecida correctamente :D")
    } catch (error) {
        console.error("Error de conexion: ", error)
    }
}

testConnection()

export default DBConnection
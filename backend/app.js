import 'dotenv/config'
import express from "express";
import cors from "cors"
// routes:
import AuthRoutes from "./routes/auth.routes.js"
import UserRoutes from "./routes/users.routes.js"

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/', AuthRoutes)
app.use('/api/', UserRoutes)

console.log(`NODE_ENV=${process.env.NODE_ENV}`);

app.listen(process.env.PORT, process.env.SERVER_HOST, () => {
  console.log(`\n🟢 Servidor activo en http://${process.env.SERVER_HOST}:${process.env.PORT}`);
  console.log(`🔵 Entorno: ${process.env.NODE_ENV}`);
  console.log(`🔵 Base de datos: ${process.env.DB_NAME}@${process.env.DB_HOST}:${process.env.DB_PORT}`);
});

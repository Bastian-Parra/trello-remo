import 'dotenv/config'
import express from "express";
import cors from "cors"

// routes imports:
import AuthRoutes from "./routes/auth.routes.js"
import UserRoutes from "./routes/users.routes.js"
import BoardMembersRoutes from "./routes/board_members.routes.js"
import CardAssigneesRoutes from "./routes/card_assignees.routes.js";
import CardRoutes from "./routes/cards.routes.js";
import ListRoutes from "./routes/lists.routes.js";
import BoardRoutes from "./routes/boards.routes.js";
import CommentRoutes from "./routes/comments.routes.js";
import LabelRoutes from "./routes/labels.routes.js";
import AttachmentRoutes from "./routes/attachments.routes.js";

// app configuration:
const app = express();

app.use(cors())
app.use(express.json())

// use routes
app.use('/api/', AuthRoutes)
app.use('/api/', UserRoutes)
app.use('/api/', BoardMembersRoutes)
app.use('/api/', CardAssigneesRoutes);
app.use('/api/', CardRoutes);
app.use('/api/', ListRoutes);
app.use('/api/', BoardRoutes);
app.use('/api/', CommentRoutes);
app.use('/api/', LabelRoutes);
app.use('/api/', AttachmentRoutes);

console.log(`NODE_ENV=${process.env.NODE_ENV}`);

// app initialization
app.listen(process.env.PORT, process.env.SERVER_HOST, () => {
  console.log(`\n🟢 Servidor activo en http://${process.env.SERVER_HOST}:${process.env.PORT}`);
  console.log(`🔵 Entorno: ${process.env.NODE_ENV}`);
  console.log(`🔵 Base de datos: ${process.env.DB_NAME}@${process.env.DB_HOST}:${process.env.DB_PORT}`);
});

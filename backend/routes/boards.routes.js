import express from "express";
import { BoardController } from "../controllers/boards.controller.js";

const router = express.Router();

router.get('/boards/get', BoardController.getAllBoards);
router.get('/boards/get/:id', BoardController.getBoardById);
router.delete('/boards/delete/:id', BoardController.deleteBoard);
router.put('/boards/update/:id', BoardController.updateBoard);
router.post('/boards/create', BoardController.createBoard);

export default router;
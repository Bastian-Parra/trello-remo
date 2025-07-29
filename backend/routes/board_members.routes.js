import express from "express";
import { BoardMembersController } from "../controllers/board_members.controller.js";

const router = express.Router();

router.get('/board-members/board/:board_id', BoardMembersController.getMembersByBoard)
router.get('/board-members/user/:user_id', BoardMembersController.getBoardsByUser);
router.post('/board-members/add', BoardMembersController.addMemberToBoard);
router.delete('/board-members/remove', BoardMembersController.removeMemberFromBoard);

export default router
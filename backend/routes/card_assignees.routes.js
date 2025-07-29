import express from "express";
import { CardAssigneeController } from "../controllers/card_assignees.controller.js";

const router = express.Router();

router.get('/card-assignees/card/:card_id', CardAssigneeController.getAssigneesByCard);
router.get('/card-assignees/user/:user_id', CardAssigneeController.getCardsByUser);
router.post('/card-assignees/assign', CardAssigneeController.assignUserToCard);
router.delete('/card-assignees/unassign', CardAssigneeController.unassignUserFromCard);

export default router;
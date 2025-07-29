import express from "express";
import { CardController } from "../controllers/cards.controller.js";

const router = express.Router();

router.get('/cards/get', CardController.getAllCards);
router.get('/cards/get/:id', CardController.getCardById);
router.delete('/cards/delete/:id', CardController.deleteCard);
router.put('/cards/update/:id', CardController.updateCard);
router.post('/cards/create', CardController.createCard);

export default router;
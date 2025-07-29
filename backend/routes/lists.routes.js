import express from "express";
import { ListController } from "../controllers/lists.controller.js";

const router = express.Router();

router.get('/lists/get', ListController.getAllLists);
router.get('/lists/get/:id', ListController.getListById);
router.delete('/lists/delete/:id', ListController.deleteList);
router.put('/lists/update/:id', ListController.updateList);
router.post('/lists/create', ListController.createList);

export default router;
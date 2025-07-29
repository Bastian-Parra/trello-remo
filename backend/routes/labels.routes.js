import express from "express";
import { LabelController } from "../controllers/labels.controller.js";

const router = express.Router();

router.get('/labels/get', LabelController.getAllLabels);
router.get('/labels/get/:id', LabelController.getLabelById);
router.delete('/labels/delete/:id', LabelController.deleteLabel);
router.put('/labels/update/:id', LabelController.updateLabel);
router.post('/labels/create', LabelController.createLabel);

export default router;
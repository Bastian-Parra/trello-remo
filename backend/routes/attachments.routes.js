import express from "express";
import { AttachmentController } from "../controllers/attachments.controller.js";

const router = express.Router();

router.get('/attachments/get', AttachmentController.getAllAttachments);
router.get('/attachments/get/:id', AttachmentController.getAttachmentById);
router.delete('/attachments/delete/:id', AttachmentController.deleteAttachment);
router.put('/attachments/update/:id', AttachmentController.updateAttachment);
router.post('/attachments/create', AttachmentController.createAttachment);

export default router;
import express from "express";
import { CommentController } from "../controllers/comments.controller.js";

const router = express.Router();

router.get('/comments/get', CommentController.getAllComments);
router.get('/comments/get/:id', CommentController.getCommentById);
router.delete('/comments/delete/:id', CommentController.deleteComment);
router.put('/comments/update/:id', CommentController.updateComment);
router.post('/comments/create', CommentController.createComment);

export default router;
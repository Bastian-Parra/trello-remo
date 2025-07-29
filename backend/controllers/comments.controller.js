import { CommentService } from "../services/comments.services.js";

export const CommentController = {
  async getAllComments(req, res) {
    try {
      const comments = await CommentService.getAllComments();
      if (!comments) {
        return res.status(404).json({ error: "Comments not found" });
      }
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async getCommentById(req, res) {
    try {
      const comment = await CommentService.getCommentById(req.params.id);
      if (!comment) {
        return res.status(404).json({ error: "Comment not found" });
      }
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async deleteComment(req, res) {
    try {
      await CommentService.deleteComment(req.params.id);
      res.status(200).json({ message: "Comment deleted correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateComment(req, res) {
    try {
      await CommentService.updateComment(req.params.id, req.body);
      res.status(204).json({ message: "Comment updated correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createComment(req, res) {
    try {
      const newComment = await CommentService.createComment(req.body);
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

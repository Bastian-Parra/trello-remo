import { Comment } from "../models/comments.model.js";
import { instanceNotFound } from "../utils/instanceNotFound.js";

export const CommentService = {
  async getAllComments() {
    try {
      const comments = await Comment.findAll();
      instanceNotFound(comments);
      return comments;
    } catch (error) {
      throw new Error("Failed to get all comments");
    }
  },

  async getCommentById(id) {
    try {
      const comment = await Comment.findByPk(id);
      instanceNotFound(comment);
      return comment;
    } catch (error) {
      throw new Error("Failed to get this comment");
    }
  },

  async deleteComment(id) {
    try {
      const comment = await Comment.findByPk(id);
      instanceNotFound(comment);
      await Comment.destroy({ where: { id: comment.id } });
    } catch (error) {
      throw new Error("Failed to delete comment");
    }
  },

  async updateComment(id, newData) {
    try {
      const comment = await Comment.findByPk(id);
      instanceNotFound(comment);
      await Comment.update(newData, { where: { id } });
    } catch (error) {
      throw new Error("Failed to update comment");
    }
  },

  async createComment(data) {
    try {
      const newComment = await Comment.create(data);
      return newComment;
    } catch (error) {
      throw new Error("Failed to create comment");
    }
  },
};

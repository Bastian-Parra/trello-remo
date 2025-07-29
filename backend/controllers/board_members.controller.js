import { BoardMembersService } from "../services/board_members.services.js";

export const BoardMembersController = {
  async getMembersByBoard(req, res) {
    try {
      const { board_id } = req.params;

      const members = await BoardMembersService.getMembersByBoard(board_id);

      res.status(200).json(members);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getBoardsByUser(req, res) {
    try {
      const { user_id } = req.params;

      const boards = await BoardMembersService.getBoardsByUser(user_id);

      res.status(200).json(boards);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async addMemberToBoard(req, res) {
    try {
      const { board_id, user_id } = req.body;

      await BoardMembersService.addMemberToBoard(board_id, user_id);

      res.status(201).json({ message: "User removed from board" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async removeMemberFromBoard(req, res) {
    try {
      const { board_id, user_id } = req.body;

      await BoardMembersService.removeMemberFromBoard(board_id, user_id);

      res.status(200).json({ message: "User removed from board" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

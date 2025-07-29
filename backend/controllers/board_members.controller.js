import { BoardMembersService } from "../services/board_members.services.js";

export const BoardMembersController = {
  async getAllBoardMembers(req, res) {
    try {
      const members = await BoardMembersService.getAllBoardMembers();
      if (!members) {
        return res.status(404).json({ error: "Board members not found" });
      }
      res.status(200).json(members);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async getBoardMemberById(req, res) {
    try {
      const { user_id, board_id } = req.params;
      const member = await BoardMembersService.getBoardMemberById(user_id, board_id);
      if (!member) {
        return res.status(404).json({ error: "Board member not found" });
      }
      res.status(200).json(member);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async deleteBoardMember(req, res) {
    try {
      const { user_id, board_id } = req.params;
      await BoardMembersService.deleteBoardMember(user_id, board_id);
      res.status(200).json({ message: "Board member deleted correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateBoardMember(req, res) {
    try {
      const { user_id, board_id } = req.params;
      await BoardMembersService.updateBoardMember(user_id, board_id, req.body);
      res.status(204).json({ message: "Board member updated correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createBoardMember(req, res) {
    try {
      const newMember = await BoardMembersService.createBoardMember(req.body);
      res.status(201).json(newMember);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

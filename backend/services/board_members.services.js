import { BoardMembers } from "../models/board_members.model.js";

export const BoardMembersService = {
  async getMembersByBoard(board_id) {
    try {
      return await BoardMembers.findAll({ where: { board_id } });
    } catch (error) {
      throw new Error("Failed to get board members");
    }
  },

  async getBoardsByUser(user_id) {
    try {
      return await BoardMembers.findAll({ where: { user_id }})
    } catch (error) {
      throw new Error("Failed to get boards by user");
    }
  },

  async addMemberToBoard(board_id, user_id) {
    try {
      return await BoardMembers.create({ board_id, user_id });
    } catch (error) {
      throw new Error("Failed to add member to board");
    }
  },

  async removeMemberFromBoard(board_id, user_id) {
    try {
      await BoardMembers.destroy({ where: { board_id, user_id }})
    } catch (error) {
      throw new Error("Failed to remove member from board");
    }
  }
};

import { BoardMembers } from "../models/board_members.model.js";
import { instanceNotFound } from "../utils/instanceNotFound.js";

export const BoardMembersService = {
  async getAllBoardMembers() {
    try {
      const members = await BoardMembers.findAll();
      instanceNotFound(members);
      return members;
    } catch (error) {
      throw new Error("Failed to get all board members");
    }
  },

  async getBoardMemberById(user_id, board_id) {
    try {
      const member = await BoardMembers.findOne({ where: { user_id, board_id } });
      instanceNotFound(member);
      return member;
    } catch (error) {
      throw new Error("Failed to get this board member");
    }
  },

  async deleteBoardMember(user_id, board_id) {
    try {
      const member = await BoardMembers.findOne({ where: { user_id, board_id } });
      instanceNotFound(member);
      await BoardMembers.destroy({ where: { user_id, board_id } });
    } catch (error) {
      throw new Error("Failed to delete board member");
    }
  },

  async updateBoardMember(user_id, board_id, newData) {
    try {
      const member = await BoardMembers.findOne({ where: { user_id, board_id } });
      instanceNotFound(member);
      await BoardMembers.update(newData, { where: { user_id, board_id } });
    } catch (error) {
      throw new Error("Failed to update board member");
    }
  },

  async createBoardMember(data) {
    try {
      const newMember = await BoardMembers.create(data);
      return newMember;
    } catch (error) {
      throw new Error("Failed to create board member");
    }
  },
};

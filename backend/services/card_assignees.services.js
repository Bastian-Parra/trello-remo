import { CardAssignee } from "../models/card_assignees.model.js"

export const CardAssigneeService = {
  async getAssignessByCard(card_id) {
    try {
      return await CardAssignee.findAll({ where: { card_id } });
    } catch (error) {
      throw new Error("Failed to get assignees by card");
    }
  },

  async getCardsByUser(user_id) {
    try {
      return await CardAssignee.findAll({ where: { user_id } });
    } catch (error) {
      throw new Error("Failed to get cards by user");
    }
  },

  async assignUserToCard(card_id, user_id) {
    try {
      return await CardAssignee.create({ card_id, user_id });
    } catch (error) {
      throw new Error("Failed to assign user to card");
    }
  },

  async unassignUserFromCard(card_id, user_id) {
    try {
      await CardAssignee.destroy({ where: { card_id, user_id } });
    } catch (error) {
      throw new Error("Failed to unassign user from card");
    }
  },
};

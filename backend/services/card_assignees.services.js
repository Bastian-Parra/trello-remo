import { CardAssignee } from "../models/card_assignees.model.js";
import { instanceNotFound } from "../utils/instanceNotFound.js";

export const CardAssigneeService = {
  async getAllCardAssignees() {
    try {
      const assignees = await CardAssignee.findAll();
      instanceNotFound(assignees);
      return assignees;
    } catch (error) {
      throw new Error("Failed to get all card assignees");
    }
  },

  async getCardAssigneeById(card_id, user_id) {
    try {
      const assignee = await CardAssignee.findOne({ where: { card_id, user_id } });
      instanceNotFound(assignee);
      return assignee;
    } catch (error) {
      throw new Error("Failed to get this card assignee");
    }
  },

  async deleteCardAssignee(card_id, user_id) {
    try {
      const assignee = await CardAssignee.findOne({ where: { card_id, user_id } });
      instanceNotFound(assignee);
      await CardAssignee.destroy({ where: { card_id, user_id } });
    } catch (error) {
      throw new Error("Failed to delete card assignee");
    }
  },

  async updateCardAssignee(card_id, user_id, newData) {
    try {
      const assignee = await CardAssignee.findOne({ where: { card_id, user_id } });
      instanceNotFound(assignee);
      await CardAssignee.update(newData, { where: { card_id, user_id } });
    } catch (error) {
      throw new Error("Failed to update card assignee");
    }
  },

  async createCardAssignee(data) {
    try {
      const newAssignee = await CardAssignee.create(data);
      return newAssignee;
    } catch (error) {
      throw new Error("Failed to create card assignee");
    }
  },
};

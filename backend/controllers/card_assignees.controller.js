import { CardAssigneeService } from "../services/card_assignees.services.js";

export const CardAssigneeController = {
  async getAllCardAssignees(req, res) {
    try {
      const assignees = await CardAssigneeService.getAllCardAssignees();
      if (!assignees) {
        return res.status(404).json({ error: "Card assignees not found" });
      }
      res.status(200).json(assignees);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async getCardAssigneeById(req, res) {
    try {
      const { card_id, user_id } = req.params;
      const assignee = await CardAssigneeService.getCardAssigneeById(card_id, user_id);
      if (!assignee) {
        return res.status(404).json({ error: "Card assignee not found" });
      }
      res.status(200).json(assignee);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async deleteCardAssignee(req, res) {
    try {
      const { card_id, user_id } = req.params;
      await CardAssigneeService.deleteCardAssignee(card_id, user_id);
      res.status(200).json({ message: "Card assignee deleted correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateCardAssignee(req, res) {
    try {
      const { card_id, user_id } = req.params;
      await CardAssigneeService.updateCardAssignee(card_id, user_id, req.body);
      res.status(204).json({ message: "Card assignee updated correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createCardAssignee(req, res) {
    try {
      const newAssignee = await CardAssigneeService.createCardAssignee(req.body);
      res.status(201).json(newAssignee);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

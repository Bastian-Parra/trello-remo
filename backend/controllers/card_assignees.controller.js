import { CardAssigneeService } from "../services/card_assignees.services.js";

export const CardAssigneeController = {
  async getAssigneesByCard(req, res) {
    try {
      const { card_id } = req.params;
      const assignees = await CardAssigneeService.getAssignessByCard(card_id)

      res.status(200).json(assignees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getCardsByUser(req, res) {
    try {
      const { user_id } = req.params;
      const cards = await CardAssigneeService.getCardsByUser(user_id)

      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async assignUserToCard(req, res) {
    try {
      const { card_id, user_id } = req.body;
      const newAssignee = await CardAssigneeService.assignUserToCard(card_id, user_id)
      
      res.status(200).json(newAssignee);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async unassignUserFromCard(req, res) {
    try {
      const { card_id, user_id } = req.body;
      await CardAssigneeService.unassignUserFromCard(card_id, user_id)
      res.status(204).json({ message: "User unassigned from card" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

import { CardService } from "../services/cards.services.js";

export const CardController = {
  async getAllCards(req, res) {
    try {
      const cards = await CardService.getAllCards();
      if (!cards) {
        return res.status(404).json({ error: "Cards not found" });
      }
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async getCardById(req, res) {
    try {
      const card = await CardService.getCardById(req.params.id);
      if (!card) {
        return res.status(404).json({ error: "Card not found" });
      }
      res.status(200).json(card);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async deleteCard(req, res) {
    try {
      await CardService.deleteCard(req.params.id);
      res.status(200).json({ message: "Card deleted correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateCard(req, res) {
    try {
      await CardService.updateCard(req.params.id, req.body);
      res.status(204).json({ message: "Card updated correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createCard(req, res) {
    try {
      const newCard = await CardService.createCard(req.body);
      res.status(201).json(newCard);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

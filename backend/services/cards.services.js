import { Card } from "../models/cards.model.js";
import { instanceNotFound } from "../utils/instanceNotFound.js";

export const CardService = {
  async getAllCards() {
    try {
      const cards = await Card.findAll();
      instanceNotFound(cards);
      return cards;
    } catch (error) {
      throw new Error("Failed to get all cards");
    }
  },

  async getCardById(id) {
    try {
      const card = await Card.findByPk(id);
      instanceNotFound(card);
      return card;
    } catch (error) {
      throw new Error("Failed to get this card");
    }
  },

  async deleteCard(id) {
    try {
      const card = await Card.findByPk(id);
      instanceNotFound(card);
      await Card.destroy({ where: { id: card.id } });
    } catch (error) {
      throw new Error("Failed to delete card");
    }
  },

  async updateCard(id, newData) {
    try {
      const card = await Card.findByPk(id);
      instanceNotFound(card);
      await Card.update(newData, { where: { id } });
    } catch (error) {
      throw new Error("Failed to update card");
    }
  },

  async createCard(data) {
    try {
      const newCard = await Card.create(data);
      return newCard;
    } catch (error) {
      throw new Error("Failed to create card");
    }
  },
};

import { ListService } from "../services/lists.services.js";

export const ListController = {
  async getAllLists(req, res) {
    try {
      const lists = await ListService.getAlllists();
      if (!lists) {
        return res.status(404).json({ error: "Lists not found" });
      }
      res.status(200).json(lists);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async getListById(req, res) {
    try {
      const list = await ListService.getListById(req.params.id);
      if (!list) {
        return res.status(404).json({ error: "List not found" });
      }
      res.status(200).json(list);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async deleteList(req, res) {
    try {
      await ListService.deleteList(req.params.id);
      res.status(200).json({ message: "List deleted correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateList(req, res) {
    try {
      await ListService.updateList(req.params.id, req.body);
      res.status(204).json({ message: "List updated correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createList(req, res) {
    try {
      const newlist = await ListService.createList(req.body);
      res.status(201).json(newlist);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

import { LabelService } from "../services/labels.services.js";

export const LabelController = {
  async getAllLabels(req, res) {
    try {
      const labels = await LabelService.getAllLabels();
      if (!labels) {
        return res.status(404).json({ error: "Labels not found" });
      }
      res.status(200).json(labels);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async getLabelById(req, res) {
    try {
      const label = await LabelService.getLabelById(req.params.id);
      if (!label) {
        return res.status(404).json({ error: "Label not found" });
      }
      res.status(200).json(label);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async deleteLabel(req, res) {
    try {
      await LabelService.deleteLabel(req.params.id);
      res.status(200).json({ message: "Label deleted correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateLabel(req, res) {
    try {
      await LabelService.updateLabel(req.params.id, req.body);
      res.status(204).json({ message: "Label updated correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createLabel(req, res) {
    try {
      const newLabel = await LabelService.createLabel(req.body);
      res.status(201).json(newLabel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

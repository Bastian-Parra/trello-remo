import { Label } from "../models/labels.model.js";
import { instanceNotFound } from "../utils/instanceNotFound.js";

export const LabelService = {
  async getAllLabels() {
    try {
      const labels = await Label.findAll();
      instanceNotFound(labels);
      return labels;
    } catch (error) {
      throw new Error("Failed to get all labels");
    }
  },

  async getLabelById(id) {
    try {
      const label = await Label.findByPk(id);
      instanceNotFound(label);
      return label;
    } catch (error) {
      throw new Error("Failed to get this label");
    }
  },

  async deleteLabel(id) {
    try {
      const label = await Label.findByPk(id);
      instanceNotFound(label);
      await Label.destroy({ where: { id: label.id } });
    } catch (error) {
      throw new Error("Failed to delete label");
    }
  },

  async updateLabel(id, newData) {
    try {
      const label = await Label.findByPk(id);
      instanceNotFound(label);
      await Label.update(newData, { where: { id } });
    } catch (error) {
      throw new Error("Failed to update label");
    }
  },

  async createLabel(data) {
    try {
      const newLabel = await Label.create(data);
      return newLabel;
    } catch (error) {
      throw new Error("Failed to create label");
    }
  },
};

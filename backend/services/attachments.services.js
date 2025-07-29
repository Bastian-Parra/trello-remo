import { Attachment } from "../models/attachments.model.js";
import { instanceNotFound } from "../utils/instanceNotFound.js";

export const AttachmentService = {
  async getAllAttachments() {
    try {
      const attachments = await Attachment.findAll();
      instanceNotFound(attachments);
      return attachments;
    } catch (error) {
      throw new Error("Failed to get all attachments");
    }
  },

  async getAttachmentById(id) {
    try {
      const attachment = await Attachment.findByPk(id);
      instanceNotFound(attachment);
      return attachment;
    } catch (error) {
      throw new Error("Failed to get this attachment");
    }
  },

  async deleteAttachment(id) {
    try {
      const attachment = await Attachment.findByPk(id);
      instanceNotFound(attachment);
      await Attachment.destroy({ where: { id: attachment.id } });
    } catch (error) {
      throw new Error("Failed to delete attachment");
    }
  },

  async updateAttachment(id, newData) {
    try {
      const attachment = await Attachment.findByPk(id);
      instanceNotFound(attachment);
      await Attachment.update(newData, { where: { id } });
    } catch (error) {
      throw new Error("Failed to update attachment");
    }
  },

  async createAttachment(data) {
    try {
      const newAttachment = await Attachment.create(data);
      return newAttachment;
    } catch (error) {
      throw new Error("Failed to create attachment");
    }
  },
};

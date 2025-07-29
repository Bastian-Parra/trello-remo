import { AttachmentService } from "../services/attachments.services.js";

export const AttachmentController = {
  async getAllAttachments(req, res) {
    try {
      const attachments = await AttachmentService.getAllAttachments();
      if (!attachments) {
        return res.status(404).json({ error: "Attachments not found" });
      }
      res.status(200).json(attachments);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async getAttachmentById(req, res) {
    try {
      const attachment = await AttachmentService.getAttachmentById(req.params.id);
      if (!attachment) {
        return res.status(404).json({ error: "Attachment not found" });
      }
      res.status(200).json(attachment);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async deleteAttachment(req, res) {
    try {
      await AttachmentService.deleteAttachment(req.params.id);
      res.status(200).json({ message: "Attachment deleted correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateAttachment(req, res) {
    try {
      await AttachmentService.updateAttachment(req.params.id, req.body);
      res.status(204).json({ message: "Attachment updated correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createAttachment(req, res) {
    try {
      const newAttachment = await AttachmentService.createAttachment(req.body);
      res.status(201).json(newAttachment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

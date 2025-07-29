import { BoardService } from "../services/boards.services.js";

export const BoardController = {
  async getAllBoards(req, res) {
    try {
      const boards = await BoardService.getAllBoards();
      if (!boards) {
        return res.status(404).json({ error: "Boards not found" });
      }
      res.status(200).json(boards);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async getBoardById(req, res) {
    try {
      const board = await BoardService.getBoardById(req.params.id);
      if (!board) {
        return res.status(404).json({ error: "Board not found" });
      }
      res.status(200).json(board);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async deleteBoard(req, res) {
    try {
      await BoardService.deleteBoard(req.params.id);
      res.status(200).json({ message: "Board deleted correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateBoard(req, res) {
    try {
      await BoardService.updateBoard(req.params.id, req.body);
      res.status(204).json({ message: "Board updated correctly" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createBoard(req, res) {
    try {
      const newBoard = await BoardService.createBoard(req.body);
      res.status(201).json(newBoard);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

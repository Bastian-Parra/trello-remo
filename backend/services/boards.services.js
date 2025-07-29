import { Board } from "../models/boards.model.js";
import { instanceNotFound } from "../utils/instanceNotFound.js";

export const BoardService = {
  async getAllBoards() {
    try {
      const boards = await Board.findAll();
      instanceNotFound(boards);
      return boards;
    } catch (error) {
      throw new Error("Failed to get all boards");
    }
  },

  async getBoardById(id) {
    try {
      const board = await Board.findByPk(id);
      instanceNotFound(board);
      return board;
    } catch (error) {
      throw new Error("Failed to get this board");
    }
  },

  async deleteBoard(id) {
    try {
      const board = await Board.findByPk(id);
      instanceNotFound(board);
      await Board.destroy({ where: { id: board.id } });
    } catch (error) {
      throw new Error("Failed to delete board");
    }
  },

  async updateBoard(id, newData) {
    try {
      const board = await Board.findByPk(id);
      instanceNotFound(board);
      await Board.update(newData, { where: { id } });
    } catch (error) {
      throw new Error("Failed to update board");
    }
  },

  async createBoard(data) {
    try {
      const newBoard = await Board.create(data);
      return newBoard;
    } catch (error) {
      throw new Error("Failed to create board");
    }
  },
};

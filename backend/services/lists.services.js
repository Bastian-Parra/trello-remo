import { List } from "../models/lists.model.js";
import { instanceNotFound } from "../utils/instanceNotFound.js"

export const ListService = {
  async getAllLists() {
    try {
      const lists = await List.findAll();
      instanceNotFound(lists);
      return lists;
    } catch (error) {
      throw new Error("Failed to get all lists");
    }
  },

  async getListById(id) {
    try {
      const list = await List.findByPk(id);
      instanceNotFound(list);
      return list;
    } catch (error) {
      throw new Error("Failed to get this list");
    }
  },

  async deleteList(id) {
    try {
      const list = await List.findByPk(id);
      instanceNotFound(list);
      await List.destroy({ where: { id: list.id } });
    } catch (error) {
      throw new Error("Failed to delete list");
    }
  },

  async updateList(id, newData) {
    try {
      const list = await List.findByPk(id);
      instanceNotFound(list);
      await List.update(newData, { where: { id } });
    } catch (error) {
      throw new Error("Failed to update list");
    }
  },

  async createList(listData) {
    try {
      const newList = await List.create(listData);
      return newList;
    } catch (error) {
      throw new Error("Failed to create list");
    }
  },
};
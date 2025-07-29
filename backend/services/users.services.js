import { User } from "../models/users.model.js";
import { instanceNotFound } from "../utils/instanceNotFound.js";

export const UserService = {
  async getAllUsers() {
    try {
      const users = await User.findAll();

      instanceNotFound(users);

      return users;
    } catch (error) {
      throw new Error("Failed to get all users created");
    }
  },

  async getUserById(id) {
    try {
      const user = await User.findByPk(id);

      instanceNotFound(user);

      return user;
    } catch (error) {
      throw new Error("Failed to get this user");
    }
  },

  async deleteUser(id) {
    try {
      const user = await User.findByPk(id);

      instanceNotFound(user);

      await User.destroy({ where: { id: user.id } });
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  },

  async updateUser(id, newData) {
    try {
      const user = await User.findByPk(id);

      instanceNotFound(user);

      await User.update(newData, { where: { id }});
    } catch (error) {
      throw new Error("Failed to update user");
    }
  },
};

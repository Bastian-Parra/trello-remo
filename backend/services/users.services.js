import { User } from "../models/users.model.js";
import { userNotFound } from "../utils/userNotFound.js";

export const UserService = {
  async getAllUsers() {
    try {
      const users = await User.findAll();

      userNotFound(users);

      return users;
    } catch (error) {
      throw new Error("Failed to get all users created");
    }
  },

  async getUserById(id) {
    try {
      const user = await User.findByPk(id);

      userNotFound(user);

      return user;
    } catch (error) {
      throw new Error("Failed to get this user");
    }
  },

  async deleteUser(id) {
    try {
      const user = await User.findByPk(id);

      userNotFound(user);

      await User.destroy({ where: { id: user.id } });
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  },

  async updateUser(id, newData) {
    try {
      const user = await User.findByPk(id);

      userNotFound(user);

      await User.update(newData, { where: { id }});
    } catch (error) {
      throw new Error("Failed to update user");
    }
  },
};

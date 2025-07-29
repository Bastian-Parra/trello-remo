import { UserService } from "../services/users.services.js";

export const UserController = {
  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers()

      if(!users) {
        res.status(404).json({ error: "Users not found" })
      }

      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" })
    }
  },

  async getUserById(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id)
      
      if(!user) {
        res.status(404).json({ error: "User not found" })
      }
      
      res.status(200).json(user)

    } catch (error) {
      res.status(500).json({ error: "Internal Server Error"})
    }
  },

  async deleteUser(req, res) {
    try {
      await UserService.deleteUser(req.params.id)
      
      res.status(200).json({ message: "User deleted correctly"})
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  async updateUser(req, res) {
    try {
      await UserService.updateUser(req.params.id, req.body)

      res.status(204).json({ message: "User updated correctly "})
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
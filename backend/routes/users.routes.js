import express from "express";
import { UserController } from "../controllers/users.controller.js";

const router = express.Router()

router.get('/users/get', UserController.getAllUsers)
router.get('/users/get/:id', UserController.getUserById)
router.delete('/users/delete/:id', UserController.deleteUser)
router.put('/users/update/:id', UserController.updateUser)

export default router
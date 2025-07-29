import { AuthController } from "../controllers/auth.controller.js";
import express from "express"

const router = express.Router()

router.post("/auth/register", AuthController.register)
router.post("/auth/login" , AuthController.login)

export default router
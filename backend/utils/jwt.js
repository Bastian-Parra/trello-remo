import "dotenv/config"
import jwt from "jsonwebtoken"

export const generateToken = (payload) => {
  if(!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN) {
    throw new Error("Faltan variables de entorno")
  }

  return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {expiresIn: process.env.JWT_EXPIRES_IN}
  )
}

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}
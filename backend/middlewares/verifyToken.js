import "dotenv/config";
import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  const header = req.header("Authorization") || "";

  const token = header.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.username = payload.username;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token not valid" });
  }
}

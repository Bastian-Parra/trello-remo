import { AuthService } from "../services/auth.services.js";
import { generateToken, verifyToken } from "../utils/jwt.js";

export const AuthController = {
  async register(req, res) {
    try {
      const newUser = await AuthService.register(req.body);

      const token = generateToken({
        username: newUser.username,
        role: "user",
      });

      res.status(201).json({
        token,
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.username,
        },
      });
    } catch (error) {
      if (error.message === "User already exists") {
        return res.status(400).json({ error: error.message });
      }

      res.status(500).json({ error: "Internal server error" });
    }
  },

  async login(req, res) {
    const { email, password_hash } = req.body;

    if (!email || !password_hash) {
      return res.status(400).json({
        success: false,
        error: "Email and password are required",
      });
    }

    try {
      const user = await AuthService.authenticate(email, password_hash);


      const token = generateToken({ username: user.username })

      res.status(200).json({
        success: true,
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.username
        }
      })
    } catch (error) {
      switch(error.message) {
        case 'Invalid credentials':
          console.error('Login error:', error)
          res.status(401).json({
            success: false,
            error: 'Invalid credentials'
          })
          break
        default:
          console.error('Login error:', error)
          res.status(500).json({
            success: false,
            error: "Internal Server Error"
          })
      }
    }
  },
};

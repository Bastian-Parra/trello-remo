import { User } from "../models/index.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";

const userExists = async (email) => {
  const user = await User.findOne({ where: { email } });
  return !!user;
};

export const AuthService = {
  async register(userData) {
    try {
      if (await userExists(userData.email)) {
        return new Error("User already exists!");
      }

      const hashedPassword = await hashPassword(userData.password_hash);

      const newUser = await User.create({
        ...userData,
        password_hash: hashedPassword,
      });

      return newUser;
    } catch (error) {
      console.log("Auth Service Error: ", error);

      if (error.message === "User exists already!") {
        throw error;
      }

      throw new Error("Failed to register user");
    }
  },

  async authenticate(email, password) {
    try {
      if (!(await userExists(email))) {
        throw new Error("Invalid credentials");
      }

      const user = await User.findOne({ where: { email }, raw: true });

      const isValid = await comparePassword(password, user.password_hash);
      if (!isValid) {
        throw new Error("Invalid credentials");
      }

      return user;
    } catch (error) {
      console.error("Error:", error);
      throw new Error("Failed to login account");
    }
  },
};

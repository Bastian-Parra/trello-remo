import DBConnection from "../database/sequelize.config.js";
import { DataTypes } from "sequelize";

export const User = DBConnection.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },

    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    created_at: {
      type: DataTypes.NOW()
    },
  },
  {
    timestamps: false,
  }
);


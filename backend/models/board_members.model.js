import DBConnection from "../database/sequelize.config.js";
import { DataTypes } from "sequelize";

export const BoardMembers = DBConnection.define(
  "board_members",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "users",
        key: "id",
      },
    },

    board_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "boards",
        key: "id",
      },
    },

    role: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

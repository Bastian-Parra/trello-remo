import DBConnection from "../database/sequelize.config.js";
import { DataTypes } from "sequelize";

export const CardAssignee = DBConnection.define(
  "card_assignees",
  {
    card_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: "cards",
        key: "id",
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },

    assigned_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
  },
  { timestamps: false }
);

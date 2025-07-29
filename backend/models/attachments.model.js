import DBConnection from "../database/sequelize.config.js";
import { DataTypes } from "sequelize";

export const Attachment = DBConnection.define(
  "attachments",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    card_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "cards",
        key: "id",
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },

    file_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    file_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    uploaded_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "attachments",
    underscored: true,
  }
);

import DBConnection from "../database/sequelize.config.js";
import { DataTypes } from "sequelize";

export const Card = DBConnection.define(
  "cards",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "lists",
        key: "id",
      },
    },

    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 100],
      },
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    due_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "cards",
    underscored: true,
  }
);

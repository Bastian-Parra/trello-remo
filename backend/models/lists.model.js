import DBConnection from "../database/sequelize.config.js";
import { DataTypes } from "sequelize";

export const List = DBConnection.define(
  "lists",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    board_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "boards",
        key: "id",
      },
      onDelete: "CASCADE",
      validate: { isInt: true },
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 100],
      },
    },

    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },

    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "lists",
    underscored: true,
  }
);

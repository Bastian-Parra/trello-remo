import DBConnection from "../database/sequelize.config.js";
import { DataTypes } from "sequelize";

export const Label = DBConnection.define(
  "labels",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    board_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "boards",
        key: "id",
      },
      onDelete: "CASCADE",
    },

    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 50],
      },
    },

    color: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "#DDDDDD",
    },
  },
  {
    timestamps: false,
    tableName: "labels",
    underscored: true,
  }
);

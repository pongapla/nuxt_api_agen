import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const DataDics = dbInstance.define(
  "DataDics",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id: { type: DataTypes.STRING(100), allowNull: false },
    name: { type: DataTypes.STRING(255), allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_create: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    date_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "datadics",
    timestamps: false,
  }
);

export default DataDics;

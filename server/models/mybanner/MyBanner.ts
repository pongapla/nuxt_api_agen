import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const MyBanner = dbInstance.define(
  "MyBanner",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    filepic: { type: DataTypes.STRING(255), allowNull: false },
    filepicapi: { type: DataTypes.TEXT, allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    mybanner: { type: DataTypes.ENUM("Y", "N"), allowNull: true },
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
    tableName: "mybanner",
    timestamps: false,
  }
);

export default MyBanner;

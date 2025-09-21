import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const Banks = dbInstance.define(
  "Banks",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name_th: { type: DataTypes.STRING(100), allowNull: false },
    shortcode: { type: DataTypes.STRING(100), allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    name_en: { type: DataTypes.STRING(100), allowNull: false },
    filepic: { type: DataTypes.STRING(100), allowNull: false },
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
    tableName: "banks",
    timestamps: false,
  }
);

export default Banks;

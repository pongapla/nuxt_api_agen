import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const Currency = dbInstance.define(
  "Currency",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    currency_code: { type: DataTypes.STRING(50), allowNull: false },
    currency_syb: { type: DataTypes.STRING(100), allowNull: true },
    name_th: { type: DataTypes.STRING(255), allowNull: false },
    name_en: { type: DataTypes.STRING(255), allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_create: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    date_update: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "currency",
    timestamps: false,
  }
);

export default Currency;

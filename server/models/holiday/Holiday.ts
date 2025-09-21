import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const Holiday = dbInstance.define(
  "Holiday",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name_th: { type: DataTypes.STRING(255), allowNull: false },
    name_en: { type: DataTypes.STRING(255), allowNull: false },
    holiday_date: { type: DataTypes.DATEONLY, allowNull: true },
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
    tableName: "holiday",
    timestamps: false,
  }
);

export default Holiday;

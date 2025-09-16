import { DataTypes } from "sequelize";
import dbInstance from "../db";

const DetailDay = dbInstance.define(
  "detailday",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tour_code: { type: DataTypes.INTEGER, allowNull: false },
    day_order: { type: DataTypes.INTEGER, allowNull: false },
    detail_day: { type: DataTypes.TEXT, allowNull: false },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING },
    date_create: { type: DataTypes.DATE },
    date_update: { type: DataTypes.DATE },
  },
  {
    tableName: "detailday",
    timestamps: false,
  }
);
export default DetailDay;

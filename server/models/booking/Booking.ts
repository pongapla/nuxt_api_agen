import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const Booking = dbInstance.define(
  "Booking",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    detail: { type: DataTypes.TEXT, allowNull: false },
    filepic: { type: DataTypes.STRING(255), allowNull: false },
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
    tableName: "booking",
    timestamps: false,
  }
);

export default Booking;

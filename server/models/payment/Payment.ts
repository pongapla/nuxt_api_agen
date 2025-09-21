import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const Payment = dbInstance.define(
  "Payment",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    topic: { type: DataTypes.STRING(100), allowNull: false },
    datail: { type: DataTypes.TEXT, allowNull: false },
    notice: { type: DataTypes.TEXT, allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
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
    tableName: "payment",
    timestamps: false,
  }
);

export default Payment;

import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const PaymentDate = dbInstance.define(
  "PaymentDate",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    booking_code: { type: DataTypes.INTEGER, allowNull: false },
    payment_no: { type: DataTypes.INTEGER, allowNull: false },
    due_date: { type: DataTypes.DATEONLY, allowNull: false },
    amount: { type: DataTypes.DECIMAL(11, 2), allowNull: false },
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
    tableName: "paymentdate",
    timestamps: false,
  }
);

export default PaymentDate;

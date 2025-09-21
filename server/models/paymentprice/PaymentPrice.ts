import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const PaymentPrice = dbInstance.define(
  "PaymentPrice",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    invoice: { type: DataTypes.STRING(100), allowNull: false },
    booking_code: { type: DataTypes.INTEGER, allowNull: false },
    bank_code: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.DECIMAL(11, 2), allowNull: false },
    datepayment: { type: DataTypes.DATEONLY, allowNull: false },
    timepayment: { type: DataTypes.STRING(255), allowNull: false },
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
    tableName: "paymentprice",
    timestamps: false,
  }
);

export default PaymentPrice;

import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const BankAcc = dbInstance.define(
  "BankAcc",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    bank_code: { type: DataTypes.STRING(100), allowNull: false },
    accname: { type: DataTypes.STRING(100), allowNull: false },
    accbranch: { type: DataTypes.STRING(100), allowNull: false },
    accno: { type: DataTypes.STRING(100), allowNull: false },
    acctype: { type: DataTypes.STRING(100), allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_create: { type: DataTypes.DATE, allowNull: true },
    date_update: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "bankacc",
    timestamps: false,
  }
);

export default BankAcc;

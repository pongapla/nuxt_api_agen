import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const AccountBank = dbInstance.define(
  "AccountBank",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    topic_code: { type: DataTypes.INTEGER, allowNull: false },
    bank_code: { type: DataTypes.STRING(100), allowNull: false },
    name_th: { type: DataTypes.STRING(100), allowNull: false },
    branch_th: { type: DataTypes.STRING(100), allowNull: false },
    account_no: { type: DataTypes.STRING(100), allowNull: false },
    acctype_code: { type: DataTypes.STRING(100), allowNull: false },
    name_en: { type: DataTypes.STRING(100), allowNull: false },
    branch_en: { type: DataTypes.STRING(100), allowNull: false },
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
    tableName: "accountbank",
    timestamps: false,
  }
);

export default AccountBank;

import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const Messages = dbInstance.define(
  "Messages",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    emp_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    msg: { type: DataTypes.STRING(255), allowNull: false },
    module: { type: DataTypes.STRING(100), allowNull: false },
    ref_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    status: { type: DataTypes.STRING(1), allowNull: false, defaultValue: "1" },
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
    tableName: "messages",
    timestamps: false,
  }
);

export default Messages;

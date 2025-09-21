import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const Permission = dbInstance.define(
  "Permission",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id: { type: DataTypes.STRING(100), allowNull: false },
    name_th: { type: DataTypes.STRING(100), allowNull: false },
    name_en: { type: DataTypes.STRING(100), allowNull: false },
    per_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    sort: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    level_open: { type: DataTypes.STRING(255), allowNull: false },
    level: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
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
    tableName: "permissions",
    timestamps: false,
  }
);

export default Permission;

import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const PermissionsType = dbInstance.define(
  "PermissionsType",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id: { type: DataTypes.STRING(100), allowNull: false },
    name_th: { type: DataTypes.STRING(100), allowNull: false },
    name_en: { type: DataTypes.STRING(100), allowNull: false },
    icon: { type: DataTypes.STRING(100), allowNull: false },
    sort: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    level: { type: DataTypes.STRING(255), allowNull: false },
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
    tableName: "permissions_type",
    timestamps: false,
  }
);

export default PermissionsType;

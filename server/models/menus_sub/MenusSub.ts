import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const MenusSub = dbInstance.define(
  "MenusSub",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    menu_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    id: { type: DataTypes.STRING(100), allowNull: false },
    encode: { type: DataTypes.STRING(100), allowNull: false },
    name_th: { type: DataTypes.STRING(255), allowNull: false },
    shortname_th: { type: DataTypes.STRING(255), allowNull: false },
    name_en: { type: DataTypes.STRING(255), allowNull: false },
    shortname_en: { type: DataTypes.STRING(255), allowNull: false },
    icon: { type: DataTypes.STRING(100), allowNull: false },
    sort: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    level: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    level_view: { type: DataTypes.STRING(255), allowNull: false },
    level_add: { type: DataTypes.STRING(255), allowNull: false },
    level_edit: { type: DataTypes.STRING(255), allowNull: false },
    level_del: { type: DataTypes.STRING(255), allowNull: false },
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
    tableName: "menus_sub",
    timestamps: false,
  }
);

export default MenusSub;

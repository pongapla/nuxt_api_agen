import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const Configs = dbInstance.define(
  "Configs",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name_th: { type: DataTypes.STRING(255), allowNull: false },
    name_en: { type: DataTypes.STRING(255), allowNull: false },
    shortname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    comname_th: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    comname_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    hotline: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    hotlinemore: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    hotlinemores: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    titles: { type: DataTypes.STRING(255), allowNull: false, defaultValue: "" },
    descriptions: { type: DataTypes.TEXT, allowNull: false, defaultValue: "" },
    keywords: { type: DataTypes.TEXT, allowNull: false, defaultValue: "" },
    filepic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    filepic_icon: { type: DataTypes.STRING(200), allowNull: true },
    filepic_footer: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    filepic_bill: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "",
    },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: true,
      defaultValue: "Y",
    },
    visitors: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_create: { type: DataTypes.DATE, allowNull: true },
    date_update: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "configs",
    timestamps: false,
  }
);

export default Configs;

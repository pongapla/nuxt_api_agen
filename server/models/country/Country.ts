import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const Country = dbInstance.define(
  "Country",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    zone_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    country_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    shortcode: { type: DataTypes.STRING(255), allowNull: false },
    name: { type: DataTypes.STRING(150), allowNull: false },
    name_th: { type: DataTypes.STRING(200), allowNull: false },
    name_en: { type: DataTypes.STRING(200), allowNull: false },
    title: { type: DataTypes.TEXT, allowNull: true },
    keywords: { type: DataTypes.TEXT, allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: true },
    datatxt: { type: DataTypes.TEXT, allowNull: true },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    hot_status: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "N",
    },
    show_web: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "N",
    },
    onlyme: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "N",
    },
    fileflag: { type: DataTypes.STRING(255), allowNull: true },
    filesqure: { type: DataTypes.STRING(255), allowNull: true },
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
    tableName: "country",
    timestamps: false,
  }
);

export default Country;

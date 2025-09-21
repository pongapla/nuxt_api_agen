import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const Province = dbInstance.define(
  "Province",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    province_code: { type: DataTypes.STRING(255), allowNull: false },
    shortcode: { type: DataTypes.STRING(100), allowNull: false },
    name_th: { type: DataTypes.STRING(200), allowNull: false },
    name_en: { type: DataTypes.STRING(200), allowNull: false },
    name_tour: { type: DataTypes.STRING(255), allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
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
    tableName: "province",
    timestamps: false,
  }
);

export default Province;

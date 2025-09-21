import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const BannerPromote = dbInstance.define(
  "BannerPromote",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    filepic: { type: DataTypes.STRING(255), allowNull: false },
    bannertype: { type: DataTypes.TEXT, allowNull: false },
    country_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    user_create: { type: DataTypes.STRING(200), allowNull: false },
    user_update: { type: DataTypes.STRING(200), allowNull: false },
    date_create: { type: DataTypes.DATE, allowNull: true },
    date_update: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "bannerpromote",
    timestamps: false,
  }
);

export default BannerPromote;

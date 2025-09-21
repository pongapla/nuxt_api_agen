import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const BannerMore = dbInstance.define(
  "BannerMore",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    filepic: { type: DataTypes.STRING(255), allowNull: false },
    datalink: { type: DataTypes.TEXT, allowNull: false },
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
    tableName: "bannermore",
    timestamps: false,
  }
);

export default BannerMore;

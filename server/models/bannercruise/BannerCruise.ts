import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const BannerCruise = dbInstance.define(
  "BannerCruise",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sort: { type: DataTypes.STRING(100), allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    filepic: { type: DataTypes.STRING(100), allowNull: false },
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
    tableName: "bannercruise",
    timestamps: false,
  }
);

export default BannerCruise;

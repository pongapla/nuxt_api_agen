import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const BannerHome = dbInstance.define(
  "BannerHome",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sort: { type: DataTypes.STRING(100), allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    filepic: { type: DataTypes.STRING(100), allowNull: false },
    weburl: { type: DataTypes.TEXT, allowNull: false },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_create: { type: DataTypes.DATE, allowNull: true },
    date_update: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "bannerhome",
    timestamps: false,
  }
);

export default BannerHome;

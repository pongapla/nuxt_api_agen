import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const BannerPopup = dbInstance.define(
  "BannerPopup",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    pic_code: { type: DataTypes.STRING(100), allowNull: false },
    date_expire: { type: DataTypes.DATEONLY, allowNull: true },
    filepic: { type: DataTypes.STRING(255), allowNull: true },
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
    tableName: "bannerpopup",
    timestamps: false,
  }
);

export default BannerPopup;

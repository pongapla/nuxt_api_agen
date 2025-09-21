import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const Regionth = dbInstance.define(
  "Regionth",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    region_code: { type: DataTypes.INTEGER, allowNull: false },
    name_en: { type: DataTypes.STRING(255), allowNull: false },
    name_th: { type: DataTypes.STRING(255), allowNull: false },
    filepic: { type: DataTypes.STRING(255), allowNull: true },
    filepicnew: { type: DataTypes.STRING(255), allowNull: true },
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
    tableName: "regionth",
    timestamps: false,
  }
);

export default Regionth;

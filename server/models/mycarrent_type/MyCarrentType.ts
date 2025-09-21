import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const MyCarrentType = dbInstance.define(
  "MyCarrentType",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cartype_code: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    name_th: { type: DataTypes.STRING(100), allowNull: false },
    name_en: { type: DataTypes.STRING(100), allowNull: false },
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
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_create: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    date_update: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "mycarrent_type",
    timestamps: false,
  }
);

export default MyCarrentType;

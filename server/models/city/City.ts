import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const City = dbInstance.define(
  "City",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    country_code: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    city_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    name_th: { type: DataTypes.STRING(255), allowNull: false },
    name_en: { type: DataTypes.STRING(255), allowNull: false },
    datatxt: { type: DataTypes.STRING(255), allowNull: false },
    filepic: { type: DataTypes.TEXT, allowNull: true },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    date_create: { type: DataTypes.DATE, allowNull: true },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_update: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "city",
    timestamps: false,
  }
);

export default City;

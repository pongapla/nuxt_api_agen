import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const CarrentPeriod = dbInstance.define(
  "CarrentPeriod",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    car_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    cardetail_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    detail: { type: DataTypes.TEXT, allowNull: false },
    first: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    secound: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    third: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    first_plus: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    secound_plus: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    third_plus: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    open_price: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "N",
    },
    status: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_create: { type: DataTypes.DATE, allowNull: false },
    date_update: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: "carrent_period",
    timestamps: false,
  }
);

export default CarrentPeriod;

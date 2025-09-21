import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const CarrentOnline = dbInstance.define(
  "CarrentOnline",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    car_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    carcode: { type: DataTypes.STRING(255), allowNull: false },
    name: { type: DataTypes.STRING(255), allowNull: false },
    price: { type: DataTypes.STRING(255), allowNull: false },
    country_code: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    currency_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    country_name: { type: DataTypes.STRING(255), allowNull: false },
    currency_txtth: { type: DataTypes.STRING(255), allowNull: false },
    currency_txt: { type: DataTypes.STRING(255), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    keywords: { type: DataTypes.TEXT, allowNull: true },
    hot_status: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "N",
    },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    wholesale_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    wsname: { type: DataTypes.STRING(255), allowNull: false },
    view: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    model: { type: DataTypes.STRING(255), allowNull: true },
    cartype: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    cartypename: { type: DataTypes.STRING(255), allowNull: true },
    brand_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    brandname: { type: DataTypes.STRING(255), allowNull: true },
    policy: { type: DataTypes.TEXT, allowNull: true },
    filebanner: { type: DataTypes.STRING(255), allowNull: true },
    filebrand: { type: DataTypes.STRING(255), allowNull: true },
    shortcontent: { type: DataTypes.TEXT, allowNull: true },
    detailmore: { type: DataTypes.TEXT, allowNull: true },
    fuel: { type: DataTypes.STRING(255), allowNull: true },
    seat: { type: DataTypes.STRING(200), allowNull: true },
    door: { type: DataTypes.STRING(200), allowNull: true },
    bigbag: { type: DataTypes.STRING(200), allowNull: true },
    smallbag: { type: DataTypes.STRING(200), allowNull: true },
    gear: { type: DataTypes.STRING(100), allowNull: true },
    periodtime: { type: DataTypes.STRING(200), allowNull: false },
    rider: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    enable_api: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    start_date_sale: { type: DataTypes.DATEONLY, allowNull: true },
    end_date_sale: { type: DataTypes.DATEONLY, allowNull: true },
    user_create: { type: DataTypes.STRING(200), allowNull: true },
    user_update: { type: DataTypes.STRING(200), allowNull: true },
    date_create: { type: DataTypes.DATE, allowNull: true },
    date_update: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "carrent_online",
    timestamps: false,
  }
);

export default CarrentOnline;

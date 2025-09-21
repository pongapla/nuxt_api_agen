import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const MyCarrent = dbInstance.define(
  "MyCarrent",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    carcode: { type: DataTypes.STRING(255), allowNull: false },
    name: { type: DataTypes.STRING(255), allowNull: false },
    brand_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    model: { type: DataTypes.STRING(255), allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    discount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    currency_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    type_status: { type: DataTypes.STRING(100), allowNull: false },
    shortcontent: { type: DataTypes.STRING(100), allowNull: false },
    detailmore: { type: DataTypes.TEXT("long"), allowNull: false },
    country_code: { type: DataTypes.STRING(100), allowNull: false },
    wholesale_code: { type: DataTypes.STRING(100), allowNull: false },
    start_date_sale: { type: DataTypes.DATEONLY, allowNull: true },
    end_date_sale: { type: DataTypes.DATEONLY, allowNull: true },
    enable: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Y",
    },
    cartype: { type: DataTypes.STRING(100), allowNull: false },
    gear: { type: DataTypes.STRING(100), allowNull: false },
    seat: { type: DataTypes.STRING(100), allowNull: false },
    door: { type: DataTypes.STRING(100), allowNull: false },
    bigbag: { type: DataTypes.STRING(100), allowNull: false },
    smallbag: { type: DataTypes.STRING(100), allowNull: false },
    fuel: { type: DataTypes.STRING(100), allowNull: false },
    filepic: { type: DataTypes.STRING(100), allowNull: false },
    wsname: { type: DataTypes.STRING(255), allowNull: true },
    view: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    keywords: { type: DataTypes.TEXT, allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: true },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_create: { type: DataTypes.DATE, allowNull: true },
    date_update: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "mycarrent",
    timestamps: false,
  }
);

export default MyCarrent;

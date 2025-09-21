import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const MyCruise = dbInstance.define(
  "MyCruise",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cruisecode: { type: DataTypes.STRING(255), allowNull: false },
    name: { type: DataTypes.STRING(255), allowNull: false },
    cruise_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    cruisename_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    country_code: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    period: { type: DataTypes.STRING(255), allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    discount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    currency_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    shortcontent: { type: DataTypes.TEXT, allowNull: false },
    type_code: { type: DataTypes.INTEGER, allowNull: false },
    airline_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    n_airport: { type: DataTypes.STRING(255), allowNull: false },
    wsname: { type: DataTypes.STRING(255), allowNull: false },
    hot_status: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "N",
    },
    filepic: { type: DataTypes.STRING(255), allowNull: true },
    filepicitin: { type: DataTypes.STRING(255), allowNull: false },
    filedoc_th: { type: DataTypes.STRING(255), allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: true,
      defaultValue: "Y",
    },
    start_date_sale: { type: DataTypes.DATEONLY, allowNull: true },
    end_date_sale: { type: DataTypes.DATEONLY, allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: true },
    keywords: { type: DataTypes.TEXT, allowNull: true },
    view: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    date_create: { type: DataTypes.DATE, allowNull: true },
    user_update: { type: DataTypes.STRING(255), allowNull: false },
    date_update: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "mycruise",
    timestamps: false,
  }
);

export default MyCruise;

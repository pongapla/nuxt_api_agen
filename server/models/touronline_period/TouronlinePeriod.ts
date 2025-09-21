import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const TouronlinePeriod = dbInstance.define(
  "TouronlinePeriod",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tour_code: { type: DataTypes.INTEGER, allowNull: false },
    pstartdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
    },
    penddate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
    },
    adult: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    child: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    child_n: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    inf: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    single: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    joinland: { type: DataTypes.DECIMAL(11, 2), allowNull: false },
    discount_adult: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    discount_child: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    discount_childno: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    commision: { type: DataTypes.DECIMAL(11, 2), allowNull: false },
    commisionsale: { type: DataTypes.DECIMAL(11, 2), allowNull: false },
    seat: { type: DataTypes.INTEGER, allowNull: false },
    balance: { type: DataTypes.INTEGER, allowNull: false },
    warranty: { type: DataTypes.INTEGER, allowNull: false },
    booking: { type: DataTypes.INTEGER, allowNull: false },
    faimai: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "N",
    },
    pro: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "N",
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
    tableName: "touronline_period",
    timestamps: false,
  }
);

export default TouronlinePeriod;

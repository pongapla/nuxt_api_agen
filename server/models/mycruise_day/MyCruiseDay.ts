import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const MyCruiseDay = dbInstance.define(
  "MyCruiseDay",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tour_code: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    dayno: { type: DataTypes.INTEGER, allowNull: false },
    daytxt: { type: DataTypes.STRING(255), allowNull: true },
    dateday: { type: DataTypes.DATEONLY, allowNull: true },
    detailday: { type: DataTypes.STRING(255), allowNull: true },
    arrive: { type: DataTypes.STRING(255), allowNull: false },
    depart: { type: DataTypes.STRING(255), allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: true,
      defaultValue: "Y",
    },
    user_create: { type: DataTypes.STRING(255), allowNull: false },
    user_update: { type: DataTypes.STRING(255), allowNull: false },
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
    tableName: "mycruise_day",
    timestamps: false,
  }
);

export default MyCruiseDay;

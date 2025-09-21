import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const MyCruiseDetail = dbInstance.define(
  "MyCruiseDetail",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tour_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    detail_type: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    orderno: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    datatxt: { type: DataTypes.TEXT, allowNull: false },
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
    tableName: "mycruise_detail",
    timestamps: false,
  }
);

export default MyCruiseDetail;

import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const TouronlineDetailday = dbInstance.define(
  "TouronlineDetailday",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tour_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    day_order: { type: DataTypes.INTEGER, allowNull: false },
    detail_day: { type: DataTypes.TEXT, allowNull: false },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    date_create: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_update: { type: DataTypes.STRING(255), allowNull: false },
    date_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "touronline_detailday",
    timestamps: false,
  }
);

export default TouronlineDetailday;

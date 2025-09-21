import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const AirTicketPics = dbInstance.define(
  "AirTicketPics",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ref_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    tab_id: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    mark: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    id: { type: DataTypes.STRING(200), allowNull: false },
    name: { type: DataTypes.TEXT, allowNull: false },
    markp: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    date_create: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "airticket_pics",
    timestamps: false,
  }
);

export default AirTicketPics;

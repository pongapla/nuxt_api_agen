import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const AirTicket = dbInstance.define(
  "AirTicket",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    topic: { type: DataTypes.STRING(255), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    keywords: { type: DataTypes.TEXT, allowNull: false },
    shortcontent: { type: DataTypes.TEXT("long"), allowNull: false },
    title_1: { type: DataTypes.TEXT, allowNull: false },
    title_2: { type: DataTypes.TEXT, allowNull: false },
    content_1: { type: DataTypes.TEXT, allowNull: false },
    content_2: { type: DataTypes.TEXT, allowNull: false },
    filepic: { type: DataTypes.STRING(255), allowNull: false },
    view: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
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
    tableName: "airticket",
    timestamps: false,
  }
);

export default AirTicket;

import { DataTypes } from "sequelize";
import dbInstance from "../db";

const Task = dbInstance.define(
  "Task",
  {
    code: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name_th: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    name_en: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    shortname: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    user_create: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    user_update: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
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
    tableName: "task",
    timestamps: false, // ปิด timestamps เพราะตารางนี้ใช้ date_create/date_update
  }
);

export default Task;

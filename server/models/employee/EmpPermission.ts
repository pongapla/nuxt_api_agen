import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const EmpPermission = dbInstance.define(
  "EmpPermission",
  {
    code: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    emp_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    task: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    user_create: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    date_create: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "emp_permission",
    timestamps: false, // ปิด timestamps เพราะตารางนี้ใช้ date_create แทน
  }
);

export default EmpPermission;

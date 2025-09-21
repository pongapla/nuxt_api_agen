import { DataTypes } from "sequelize";
import dbInstance from "../../db"; // ใช้ db.ts ที่คุณทำไว้

const Employee = dbInstance.define(
  "Employee",
  {
    code: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    task_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    name_th: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    name_en: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    company_code: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    tatlicense: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    website: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tel: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    fax: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    user_pass: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    filepic: {
      type: DataTypes.STRING(100),
    },
    line_id: {
      type: DataTypes.STRING(255),
    },
    billpic: {
      type: DataTypes.STRING(100),
    },
    superadmin: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "N",
    },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    wholesale_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
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
    expire: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "employees",
    timestamps: false, // ปิด timestamps ให้เหมือนกับตารางอื่น
  }
);

export default Employee;

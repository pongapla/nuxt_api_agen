import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const ContactUsTel = dbInstance.define(
  "ContactUsTel",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    contact_code: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    tel: { type: DataTypes.STRING(255), allowNull: false },
    emp_name: { type: DataTypes.STRING(255), allowNull: true },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: true,
      defaultValue: "Y",
    },
    user_create: { type: DataTypes.STRING(255), allowNull: false },
    user_update: { type: DataTypes.STRING(255), allowNull: false },
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
    tableName: "contactus_tel",
    timestamps: false,
  }
);

export default ContactUsTel;

import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const AboutUs = dbInstance.define(
  "AboutUs",
  {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    companydata: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mysevice: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    filepiccompany: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    filepicttaa: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    filepiclogo: {
      type: DataTypes.STRING(255),
      allowNull: false,
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
    tableName: "aboutus",
    timestamps: false,
  }
);

export default AboutUs;

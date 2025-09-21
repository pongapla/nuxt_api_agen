import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const Airline = dbInstance.define(
  "Airline",
  {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    airline_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    iata_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    name_th: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    name_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    filepic: {
      type: DataTypes.STRING(150),
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
      allowNull: true,
    },
    date_update: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "airline",
    timestamps: false,
  }
);

export default Airline;

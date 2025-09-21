import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const CarrentSlide = dbInstance.define(
  "CarrentSlide",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    filepic: { type: DataTypes.STRING(100), allowNull: false },
    sort: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_create: { type: DataTypes.DATEONLY, allowNull: true },
    date_update: { type: DataTypes.DATEONLY, allowNull: true },
  },
  {
    tableName: "carrent_slide",
    timestamps: false,
  }
);

export default CarrentSlide;

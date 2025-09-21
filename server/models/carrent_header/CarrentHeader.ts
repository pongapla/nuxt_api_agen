import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const CarrentHeader = dbInstance.define(
  "CarrentHeader",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    car_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    txt_first: { type: DataTypes.STRING(255), allowNull: false },
    txt_secound: { type: DataTypes.STRING(255), allowNull: false },
    txt_third: { type: DataTypes.STRING(255), allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_create: { type: DataTypes.DATE, allowNull: false },
    date_update: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: "carrent_header",
    timestamps: false,
  }
);

export default CarrentHeader;

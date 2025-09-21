import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const MyCruiseCabin = dbInstance.define(
  "MyCruiseCabin",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cabin_code: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    cruise_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    cruisename_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    name: { type: DataTypes.STRING(255), allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_create: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    date_update: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "mycruise_cabin",
    timestamps: false,
  }
);

export default MyCruiseCabin;

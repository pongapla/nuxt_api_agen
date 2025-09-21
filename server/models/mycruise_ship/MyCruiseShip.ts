import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const MyCruiseShip = dbInstance.define(
  "MyCruiseShip",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cruise_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    cruisename_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    name: { type: DataTypes.STRING(50), allowNull: false },
    filepic: { type: DataTypes.STRING(150), allowNull: false },
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
    tableName: "mycruise_ship",
    timestamps: false,
  }
);

export default MyCruiseShip;

import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const Zonetour = dbInstance.define(
  "Zonetour",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    zone_code: { type: DataTypes.INTEGER, allowNull: false },
    ordernum: { type: DataTypes.INTEGER, allowNull: false },
    name_th: { type: DataTypes.STRING(255), allowNull: false },
    name_en: { type: DataTypes.STRING(255), allowNull: false },
    onlyme: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "N",
    },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_create: { type: DataTypes.DATE, allowNull: true },
    date_update: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "zonetour",
    timestamps: false,
  }
);

export default Zonetour;

import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const DataFields = dbInstance.define(
  "DataFields",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    dic_code: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    id: { type: DataTypes.STRING(100), allowNull: false },
    name: { type: DataTypes.STRING(255), allowNull: false },
    attr_type: { type: DataTypes.STRING(100), allowNull: false },
    remark: { type: DataTypes.TEXT, allowNull: false },
    pkey: { type: DataTypes.STRING(5), allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "Y",
    },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
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
    tableName: "datafields",
    timestamps: false,
  }
);

export default DataFields;

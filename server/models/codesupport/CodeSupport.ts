import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const CodeSupport = dbInstance.define(
  "CodeSupport",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    code_facebook: { type: DataTypes.TEXT, allowNull: false },
    enable_facebook: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: true,
      defaultValue: "N",
    },
    code_pixel: { type: DataTypes.TEXT, allowNull: true },
    code_google: { type: DataTypes.TEXT, allowNull: true },
    code_googlebody: { type: DataTypes.TEXT, allowNull: true },
    token_linenotify: { type: DataTypes.TEXT, allowNull: false },
    code_hitmapmcf: { type: DataTypes.TEXT, allowNull: true },
    code_clarity: { type: DataTypes.TEXT, allowNull: true },
    enable_token: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: false,
      defaultValue: "N",
    },
    user_create: { type: DataTypes.STRING(100), allowNull: false },
    user_update: { type: DataTypes.STRING(100), allowNull: false },
    date_create: { type: DataTypes.DATE, allowNull: true },
    date_update: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "codesupport",
    timestamps: false,
  }
);

export default CodeSupport;

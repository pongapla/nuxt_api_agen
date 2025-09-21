import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const ContactTeam = dbInstance.define(
  "ContactTeam",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(255), allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    facebook: { type: DataTypes.TEXT, allowNull: false },
    line: { type: DataTypes.TEXT, allowNull: false },
    filepic: { type: DataTypes.STRING(255), allowNull: false },
    enable: {
      type: DataTypes.ENUM("Y", "N"),
      allowNull: true,
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
    tableName: "contactteam",
    timestamps: false,
  }
);

export default ContactTeam;

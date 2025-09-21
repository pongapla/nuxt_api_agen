import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const TbDocumentHd = dbInstance.define(
  "TbDocumentHd",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    tour_name: { type: DataTypes.STRING(250), allowNull: false },
    doc_date: { type: DataTypes.DATEONLY, allowNull: false },
    cust_name: { type: DataTypes.STRING(200), allowNull: false },
    quotation_no: { type: DataTypes.STRING(30), allowNull: false },
    quotation_total: { type: DataTypes.STRING(30), allowNull: false },
    quotation: { type: DataTypes.TEXT, allowNull: false },
    quotation_lastupdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    quotation_date: { type: DataTypes.DATEONLY, allowNull: false },
    createby: { type: DataTypes.INTEGER, allowNull: false },
    createon: { type: DataTypes.DATE, allowNull: true },
    active: { type: DataTypes.STRING(1), allowNull: false, defaultValue: "A" },
    unactive_date: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "tb_document_hd",
    timestamps: false,
  }
);

export default TbDocumentHd;

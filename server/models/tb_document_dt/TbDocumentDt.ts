import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const TbDocumentDt = dbInstance.define(
  "TbDocumentDt",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    hd_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    invoice_no: { type: DataTypes.STRING(30), allowNull: true },
    invoice: { type: DataTypes.TEXT, allowNull: true },
    invoice_total: { type: DataTypes.STRING(20), allowNull: true },
    receipt_no: { type: DataTypes.STRING(30), allowNull: true },
    receipt: { type: DataTypes.TEXT, allowNull: true },
    receipt_type: { type: DataTypes.STRING(1), allowNull: false },
    invoice_date: { type: DataTypes.DATEONLY, allowNull: true },
    receipt_date: { type: DataTypes.DATEONLY, allowNull: true },
    invoice_lastupdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    receipt_lastupdate: { type: DataTypes.DATE, allowNull: true },
    active: { type: DataTypes.STRING(1), allowNull: false, defaultValue: "A" },
    createby: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  },
  {
    tableName: "tb_document_dt",
    timestamps: false,
  }
);

export default TbDocumentDt;

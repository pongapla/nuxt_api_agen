import { DataTypes } from "sequelize";
import dbInstance from "../../db";

const ContactUs = dbInstance.define(
  "ContactUs",
  {
    code: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    callcenter: { type: DataTypes.TEXT, allowNull: true },
    fax: { type: DataTypes.TEXT, allowNull: true },
    open: { type: DataTypes.TEXT, allowNull: true },
    open_time: { type: DataTypes.STRING(200), allowNull: false },
    openmore: { type: DataTypes.TEXT, allowNull: true },
    openmore_time: { type: DataTypes.STRING(200), allowNull: false },
    openmores: { type: DataTypes.STRING(255), allowNull: true },
    openmores_time: { type: DataTypes.STRING(200), allowNull: false },
    address: { type: DataTypes.STRING(255), allowNull: false },
    address2: { type: DataTypes.TEXT, allowNull: false },
    address3: { type: DataTypes.TEXT, allowNull: false },
    address4: { type: DataTypes.TEXT, allowNull: false },
    address_en: { type: DataTypes.TEXT, allowNull: false },
    hotline: { type: DataTypes.STRING(255), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false },
    emailmore: { type: DataTypes.STRING(255), allowNull: false },
    licence: { type: DataTypes.STRING(255), allowNull: false },
    taxid: { type: DataTypes.STRING(100), allowNull: false },
    facebook: { type: DataTypes.STRING(255), allowNull: false },
    linkfacebook: { type: DataTypes.TEXT, allowNull: false },
    facebookmore: { type: DataTypes.STRING(255), allowNull: false },
    linkfacebookmore: { type: DataTypes.TEXT, allowNull: false },
    line: { type: DataTypes.STRING(255), allowNull: false },
    linkline: { type: DataTypes.TEXT, allowNull: false },
    linkmassenger: { type: DataTypes.STRING(255), allowNull: false },
    massenger: { type: DataTypes.STRING(255), allowNull: false },
    tiktok: { type: DataTypes.STRING(255), allowNull: false },
    linktiktok: { type: DataTypes.TEXT, allowNull: false },
    igtxt: { type: DataTypes.STRING(255), allowNull: false },
    linkig: { type: DataTypes.TEXT, allowNull: false },
    twitter: { type: DataTypes.STRING(255), allowNull: true },
    twitterlink: { type: DataTypes.TEXT, allowNull: true },
    mymap: { type: DataTypes.TEXT, allowNull: false },
    filepic: { type: DataTypes.STRING(255), allowNull: true },
    linepic: { type: DataTypes.STRING(200), allowNull: false },
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
    tableName: "contactus",
    timestamps: false,
  }
);

export default ContactUs;

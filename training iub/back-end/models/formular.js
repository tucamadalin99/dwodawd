const sequelize = require("../config/db");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "formular",
    {
      nume: DataTypes.STRING,
      prenume: DataTypes.STRING,
      telefon: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      underscored: true,
      tableName: "formular",
    }
  );
};

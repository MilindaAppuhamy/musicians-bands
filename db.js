const path = require("path");
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db.sqlite",
});

module.exports = {
  sequelize,
  DataTypes,
  Model,
};

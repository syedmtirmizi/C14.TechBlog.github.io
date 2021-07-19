const Sequelize = require('sequelize');
const path = require("path");

require('dotenv').config({path: __dirname + '/.env'})

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize("techblog_db", "root", "Pakistan0412!", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;
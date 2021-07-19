const Sequelize = require('sequelize');
const path = require("path");

require('dotenv').config({path: __dirname + '/.env'})

const sequelize = "mysql://vjuk7s1mhxsbddyr:kgufseqltpxgpv7m@s465z7sj4pwhp7fn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/j86mrzdgvzqkvcuy"
  ? new Sequelize("mysql://vjuk7s1mhxsbddyr:kgufseqltpxgpv7m@s465z7sj4pwhp7fn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/j86mrzdgvzqkvcuy")
  : new Sequelize("techblog_db", "root", "Pakistan0412!", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;
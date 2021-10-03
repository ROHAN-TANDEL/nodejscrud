'use strict';
require('dotenv').config();

const mysql = require('mysql');

const dbConn = mysql.createConnection({
  host     : process.env.DATABASE_HOST,
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE_NAME
});

dbConn.connect(function(err) { if (err) throw err; console.log("Database Connected!"); });


module.exports = dbConn;
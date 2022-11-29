require("dotenv").config({
    path: __dirname + "/../.env",
    debug: process.env.DEBUG,
});

var mysql = require('mysql');
  
const {
    DB_CONNECTION,
    DB_HOST,
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    DB_PORT,
} = process.env;

var connection = mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    user: DB_USERNAME,
    password: DB_PASSWORD,
})

connection.connect(function(error) {
    if (error) {
        throw error
    } else {
        console.log('Connected to database')
    }
})

module.exports = connection;
  
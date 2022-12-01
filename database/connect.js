require("dotenv").config({
    path: __dirname + "/../.env",
    debug: process.env.DEBUG,
});

const mysql = require('mysql')
  
const {
    DB_CONNECTION,
    DB_HOST,
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    DB_PORT,
} = process.env;

const connection = mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    user: DB_USERNAME,
    password: DB_PASSWORD,
})

connection.connect(function(error, connection) {
    if (error) {
        console.log('Database connection error')
    } else {
        console.log('Connected to database')
    }
})

module.exports = connection

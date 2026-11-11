const mysql = require("mysql2")

const pool = mysql.createPool({
host : 'localhost',
user : 'root', 
password: '',
port : 3306,
database : 'interfaz'
})

module.exports = pool.promise()
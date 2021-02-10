const mysql = require('mysql');

const conneciton = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'menu',
    insecureAuth: true
})

module.exports = conneciton;
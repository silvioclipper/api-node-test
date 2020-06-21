const mysql = require('mysql');

const pool= mysql.createPool({
    "user": process.env.MYSQL_user,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host":process.env.MYSQL_HOST,
    "port": process.env.MYSQL_PORT
});

exports.pool = pool;

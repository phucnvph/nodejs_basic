var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'qlbh'
});

connection.connect();

const sql = 'SELECT 1 + 1 AS solution';
connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    connection.end();
});

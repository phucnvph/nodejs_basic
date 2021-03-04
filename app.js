const db = require('./utils/db');

db.load('SELECT * FROM products', function (rows) {
    console.log(rows);

}, function (error) {
    console.log(error.sqlMessage);
});


db.load('SELECT * FROM categories', function (rows) {
    for (const category of rows) {
        console.log(`${category.name} => mota: ${category.description}`);
    }
}, function (error) {
    console.log(error.sqlMessage);
});
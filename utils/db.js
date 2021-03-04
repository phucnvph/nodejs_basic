const mysql = require("mysql");
const config = require("../config/default.json");

const pool = mysql.createPool(config.mysql);
module.exports = {
  load: (sql) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },
};

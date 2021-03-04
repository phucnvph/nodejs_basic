const mysql = require('mysql');
const config = require('../config/default.json');

module.exports = {
    load: (sql, fn_done, fn_fail) => {
        const cn = mysql.createConnection(config.mysql);
        cn.connect();
        cn.query(sql, (error, results, fields) => {
            if (error) {
                cn.end();
                fn_fail(error);
                return;
            };
            fn_done(results);
            cn.end();
        });
    },
}

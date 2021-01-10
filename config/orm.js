const { table } = require('console');
const connection = require('./connection');

const orm = {
    selectTable(tablename) {
        connection.query(
            `SELECT * FROM ??`,
            [tablename],
            (err, res) => {
                if(err) throw err;
                console.log(res);
            }
        );
    }
};

module.exports = orm;
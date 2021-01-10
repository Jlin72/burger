const { table } = require('console');
const connection = require('./connection');

const orm = {
    //SelectAll will select all the data from one table
    selectAll(tablename) {
        connection.query(
            `SELECT * FROM ??`,
            [tablename],
            (err, res) => {
                if(err) throw err;
                console.log(res);
            }
        );
    },
    //Insert into a table
    insertOne(tablename, column, value) {
        connection.query(
            `INSERT INTO ?? (??) VALUES (?)`,
            [tablename, column, value],
            (err, result) => {
                if(err) res.status(500).end();
                console.log({id: result.insertId});
                res.json ({id: result.insertId});
            }
        )
    },

    //Update a table
    updateOne(tablename, column, boolean, id, idNumber) {
        connection.query(
            `UPDATE ?? SET ?? = ? WHERE ?? = ?`,
            [tablename, column, boolean, id, idNumber],
            (err, result) => {
                if(err) {
                    res.status(500).end();
                }
                if(result.changedRows === 0) {
                    res.status(400).end();
                }
                res.status(200).end();
            }
        );
    }
};

module.exports = orm;
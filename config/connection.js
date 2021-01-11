const mysql = require('mysql');
let connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        user: 'root',
        host: 'localhost',
        database: 'burgers_db',
        password: 'RinaPoyo349!'
    });
}

connection.connect((err) => {
    if(err) console.log(`ERROR: ${err.stack}`);
    console.log(`Connection succesful! Connected to id: ${connection.threadId}`);
});

module.exports = connection;
const mysql = require('mysql');
const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    PORT: 3306,
    database: 'burgers_db',
    password: 'RinaPoyo349!'
});

connection.connect((err) => {
    if(err) console.log(`ERROR: ${error.stack}`);
    console.log(`Connection succesful! Connected to id: ${connection.threadId}`);
});

module.exports = connection;
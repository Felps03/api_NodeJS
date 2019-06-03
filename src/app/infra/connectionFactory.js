var mysql = require('mysql');

function createDBConnection() {
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'testeapi',
        port: 3306
    });

    return connection;
}


module.exports = createDBConnection;
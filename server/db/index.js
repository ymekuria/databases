var mysql = require('mysql');

var db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
db.connect();

module.exports = db;

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var mysql = require('mysql');

module.exports = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

module.exports.connect();

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
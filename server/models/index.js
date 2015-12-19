var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (message, callback) {
      var insert = 'insert messages (user, text, room) values ("' + message.username + '","' + message.message + '","' + message.roomname + '");';
      console.log("insert on line 8 -- models", insert);
      db.query(insert, function(err, result, fields) {
        if (err) { throw 'Error in writing to db on line 8 in models'; }
        console.log('you\'ve maybe written to the messages table db', result);
        callback();
      });
      db.end(); // a function which can be used to insert a message into the database
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, callback) { 
      var insert = "insert into users (username) values ('" + username + "')";
      console.log("insert on line 19 -- models", insert);

      db.query(insert, function(err, result, fields) {
        if (err) { throw 'Error in writing to db on line 19 in models'; }
        console.log('you\'ve maybe written to the users table db', result);
        callback();
      }); 
    }
  }
};


var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (insert) {
      db.query(insert, function(err, result, fields) {
        if (err) { throw 'Error in writing to db on line 8 in models'; }
        console.log('you\'ve maybe written to the db', result);
      });// a function which can be used to insert a message into the database
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (insert) {
      db.query(insert, function(err, result, fields) {
        if (err) { throw 'Error in writing to db on line 19 in models'; }
        console.log('you\'ve maybe written to the db', result);
      });// a function which can be used to insert a message into the database
    }
  }
};


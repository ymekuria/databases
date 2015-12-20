var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (message, callback) {
      var userID, roomID;
      userID = module.exports.messages.users.post(message, function() {
        roomID = module.exports.messages.rooms.post(message, function() {
          db.query('insert messages (user, text, room) values (?,?,?)', [userID, message.message, roomID], function(err, result) {
            if (err) { throw 'Error in posting message'; }
            console.log('Yay, you did it. Posted message to db.');
            callback();
            db.end();
          });
        });
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (message, callback) { // posts and returns UserId
      db.query('select id, username from users where username = ?',[message.username], function(err, result) {
        if(err) { throw err; }
        if (result.length !== 0){
          return result[0].id;
          console.log("UserId = ", userId);
        } else {
          db.query('insert into users (username) values (?)',[message.username], function(err,result) {
            if(err) { throw err; } 
            db.query('select id from users where username = ?', [message.username], function(err, result) {
              if(err) { throw err; }
              return result[0].id;
            });
          });
        }
      });
    }
  }, 

  rooms: {
    get: function() {},
    post: function() { // posts and returns roomId
      db.query('select id from rooms where roomname = ?',[message.roomname], function(err, result) {
        console.log('Results from 23: ', result);
        if(err) { throw err; }
        if (result.length !== 0) {
          console.log("you're in the if block on line 26")
          return result[0].id;
        } else {
          db.query('insert into rooms (roomname) values (?)',[message.roomname], function(err,result) {
          console.log('result:', result);
            if(err) { throw err; } 
            db.query('select id from rooms where roomname = ?', [message.roomname], function(err, result) {
              if(err) { throw err; }
              return result[0].id;
              console.log("RoomID = ", roomId);
            });
          });  
        }
      });
    }
  }
};


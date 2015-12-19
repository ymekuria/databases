var models = require('../models');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.,
  "Content-Type": "application/json"
};

var sendResponse = function(response, code, data) {
  code = code || 200;

  response.writeHead(code, headers);
  response.end();
};

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      var data = '';
      req.on('data', function(chunk) {
        data += chunk;
        console.log("Chucks: ", chuck);
      });

      res.on('end', function() {
        console.log(data);
        var message = JSON.parse(data.toString('utf8'));
        var insert = 'insert messages values (' + message.username + ',' + message.text + ',' + message.roomname + ');';
        // connection.query(insert, function(err, result, fields) {
        //   if (err) { throw 'Error in post on line 18 in controllers'; }
        //   console.log('you\'ve maybe written to the db', result);
        models.messages.post(insert);
        sendResponse(res, 201); // might need to move to index.js models?
        
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var data = '';
      req.on('data', function(chunk) {
        console.log('inside req.on data users');
        data += chunk;
      });

      res.on('end', function() {
        console.log('inside of res.on for users line 52');
        var users = JSON.parse(data.toString('utf8'));
        var insert = 'insert users values (' + users.username + ');';
        // connection.query(insert, function(err, result, fields) {
        //   if (err) { throw 'Error in post on line 56 in controllers'; }
        //   console.log('you\'ve maybe written to the db', result);
        //   sendResponse(res, 201);
        // });
        models.users.post();
        sendResponse(res, 201); // might need to move to index.js models?
      });
    } // a function which handles posting a message to the database
  }
};


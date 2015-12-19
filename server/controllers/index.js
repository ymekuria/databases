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
    get: function (req, res) { // a function which handles a get request for all messages

    },

    post: function (req, res) {  // a function which handles posting a message to the database
      var message = req.body;
      models.messages.post(message, function() {
        sendResponse(res, 201);
      });
      // sendResponse(res, 201); // might need to move to index.js models?
    }
  },

  users: {
    get: function (req, res) { // a function which handles a get request for all users

    }, 
    post: function (req, res) { // a function which handles posting a user to the database
      console.log(req.body);
      var username = req.body.username;
      console.log(username);
      models.users.post(username, function() {
        sendResponse(res, 201);
      });
        
      // sendResponse(res, 201); // might need to move to index.js models?
       // a function which handles posting a message to the database
    }
  }
};



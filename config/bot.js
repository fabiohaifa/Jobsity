const botConstants = require('./constants.js');

const https = require('http');

const callExternalAPI = function(stockMarketCode) {
  const url = "http://localhost:3000/v1/stockmarket/" + stockMarketCode;
  https.get(url, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      console.log(JSON.parse(data));
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}

const sendMessage = function(req, message, io) {
  if (!io) {
    var socket = req.app.get('socketIo');
    socket.emit('chat message', message);
  } else {
    io.emit('chat message', message);
  }
};

const invalidBotCommand = function(io) {
  const msgDate = new Date();
  const composeMessage = msgDate.toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' ' + 'Bot says: Sorry but I cant understand you... =(';
  sendMessage(null, composeMessage, io);
}

const validatebotMessage = function(io, message) {
  const messageSplited = message.split('=');
  if (messageSplited && messageSplited.length > 1) {
    if (messageSplited[0].toLowerCase() === botConstants.botCommands.stock) {
      callExternalAPI(messageSplited[1]);
    } else {
      invalidBotCommand(io);
    }
  } else {
    invalidBotCommand(io);
  }

}

module.exports = {
  sendMessage,
  validatebotMessage
}
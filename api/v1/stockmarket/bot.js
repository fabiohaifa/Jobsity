const sendMessage = function(req, message) {
  var socket = req.app.get('socketIo');
  socket.emit('chat message', message);
};

module.exports = {
  sendMessage
}
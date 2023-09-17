// websocket.js

const socketIo = require('socket.io');

function initializeWebSocket(server) {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle incoming messages or events here
    socket.on('message', (message) => {
      console.log(`Received message: ${message}`);
      // Broadcast the message to all connected clients
      io.emit('message', message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
}

module.exports = initializeWebSocket;

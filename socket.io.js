var app = require('express')(),
    server = app.listen(80),
    io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
    console.log(data);
  });
});

module.exports = io;
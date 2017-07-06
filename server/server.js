var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    io = require('./socket.io.js'),
    path = require('path');

const PORT = process.env.PORT || 5000;

app.use('/public',  express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'Index.html'));
});

app.listen(PORT, function(data){
    console.log(`Server runnin on port ${PORT}`);
});
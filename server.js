var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;


app.listen(PORT, function(data){
    console.log(`Server running on port ${PORT}`);
})
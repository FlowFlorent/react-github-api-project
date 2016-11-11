var express = require('express');

var app = express();

app.use('/files', express.static(__dirname + '/src'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(process.env.PORT || 8000, function(){
  console.log("Server running at localhost:" + (process.env.PORT || 8000));
});

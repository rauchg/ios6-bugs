
// dependencies
var express = require('express');

// create app
var app = express();

// middleware
app.use(express.logger('dev'));

// home route
app.get('/', function(req, res){
  res.sendfile('index.html');
});

// ajax test route
app.get('/poll', function(req, res){
  // simulate long poll-type duration
  setTimeout(function(){
    res.send({ hi: 'there' });
  }, 5000);
});

// listen
app.listen(process.env.PORT || 3000);

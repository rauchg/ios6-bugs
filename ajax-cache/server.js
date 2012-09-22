
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

// client side cache busting workaround
app.get('/cs-workaround', function(req, res){
  res.sendfile('index-2.html');
});

// server side cache busting workaround
app.get('/ss-workaround', function(req, res){
  res.sendfile('index-3.html');
});

// ajax test route
app.post('/no-cache', function(req, res){
  res.send('' + Date.now());
});

// ajax test route with no cache header
app.post('/no-cache-with-header', function(req, res){
  res.set('Pragma', 'no-cache');
  res.send('' + Date.now());
});

// listen
app.listen(process.env.PORT || 3000);

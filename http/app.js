var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/views/index.html');
});

app.use('/views', express.static(path.join(__dirname, 'public/views')));
app.use('/web_modules', express.static(path.join(__dirname, 'web_modules')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use(function (err, req, res, next) {
  console.error(err.stack)
})
module.exports = app
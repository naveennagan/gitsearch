var express = require('express');
var path = require('path');
var GitHub = require('./routes/GitHub');
var redisHelper = require('./utils/redisHelper');

var app = express();

app.use(GitHub);

app.use(express.static(path.join(__dirname, '../../public/')));

app.listen(3122, function () {
  init();
  console.log("Listening on 3122 ");
});

function init() {
  redisHelper.init();
}

function close() {
  redisHelper.close();
}

process.on('exit', function () {
  close();
});
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var GitHub = require('./routes/GitHub');
var Project = require('./routes/Project');
var redisHelper = require('./utils/redisHelper');
var mongoHelper = require('./utils/mongoHelper');

var app = express();

// to parse the post/put request from the clients
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use(GitHub);
app.use(Project);

app.use(express.static(path.join(__dirname, '../../public/')));

app.listen(3122, function () {
  init();
  console.log("Listening on 3122 ");
});

function init() {
  mongoHelper.init();
  redisHelper.init();
}

function close() {
  mongoHelper.closeConnection();
  redisHelper.close();
}

process.on('exit', function () {
  // close();
});
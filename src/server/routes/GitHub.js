var express = require("express");
var app = express();
var GitModel = require("../models/GitModel");

app.get("/github/search", (req, res) => {
  var topic = req.query.topic;
  GitModel.searchTopic(topic).then(function (results) {
    res.send({ status: "success", results: results });
  }, function (errors) {
    res.send({ status: "failure", results: [] });
  });
});

module.exports = app;
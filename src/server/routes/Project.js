var express = require("express");
var app = express();
var ProjectModel = require("../models/ProjectModel");

app.get("/api/projects", (req, res) => {
  ProjectModel.fetchProjects().then(function (results) {
    res.send({ status: "success", results: results });
  }, function (errors) {
    res.send({ status: "failure", results: [] });
  });
});

app.post("/api/project", (req, res) => {
  var params = req.body;
  ProjectModel.insertProject(params).then(function (results) {
    res.send({ status: "success", results: params });
  }, function (errors) {
    res.send({ status: "failure", results: params });
  });
})

module.exports = app;
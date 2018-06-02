var config = require('../config');
var requestHelper = require('../utils/requestHelper');
var redisHelper = require('../utils/redisHelper');
var mongoHelper = require('../utils/mongoHelper');
var projectCollection = "Projects";

var ProjectModel = {
  fetchProjects: function () {
    return new Promise((resolve, reject) => {
      mongoHelper.getAllDocuments(projectCollection).then(function (results) {
        resolve(results);
      }, function (errors) {
        console.log("Error fetching Projects ! ", errors);
        reject(errors);
      });
    });
  },
  insertProject: function (project) {
    return new Promise((resolve, reject) => {
      mongoHelper.insertDocument(params, projectCollection).then(function (results) {
        resolve(results);
      }, function (errors) {
        reject(errors);
      });
    });
  }
}

module.exports = ProjectModel;
var config = require('../config');
var requestHelper = require('../utils/requestHelper');
var redisHelper = require('../utils/redisHelper');

var GitModel = {
  searchTopic: function (topic) {
    return new Promise((resolve, reject) => {
      GitModel.fetchFromRedis(topic).then(function (results) {
        if (results && results != null) {
          var topicResults = JSON.parse(results);
          resolve(topicResults);
        }
        else {
          GitModel.fetchFromGitApi(topic).then(function (result) {
            resolve(result);
          }, function (err) {
            reject(err);
          });
        }
      }, function (error) {
        console.log("Error in GitModel searching the topic ", error);
        reject(error);
      });
    });
  },
  fetchFromRedis: function (key) {
    return new Promise((resolve, reject) => {
      redisHelper.get(key).then(function (results) {
        resolve(results);
      }, function (errors) {
        console.log(errors);
        reject(errors);
      });
    });
  },
  fetchFromGitApi: function (query) {
    return new Promise((resolve, reject) => {
      var githuburl = `${config["github"]["url"]}?q=${query}&page=1&per_page=10`;
      requestHelper.get(githuburl).then((results) => {
        var resultString = JSON.stringify(results);
        GitModel.setInRedis(query, resultString).then(function (res) {
          resolve(results);
        }, function (errors) {
          reject(errors);
        });
      }, (err) => {
        reject(err);
      });
    });
  },
  setInRedis: function (key, value) {
    return new Promise((resolve, reject) => {
      redisHelper.set(key, value).then(function (results) {
        resolve(results);
      }, function (errors) {
        console.log(errors);
        reject(errors);
      });
    });
  }
}

module.exports = GitModel;
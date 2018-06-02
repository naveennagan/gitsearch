var request = require("request");
var config = require("../config");
var user = config["github"]["username"];
var headers = {
  "User-Agent": user
};
var requestHelper = {
  get: function (url) {
    return new Promise((resolve, reject) => {
      request.get(url, { headers: headers }, function (err, httpReponse, body) {
        if (err)
          return reject(err);
        var body = JSON.parse(body);
        resolve(body);
      });
    });
  },
  post: function (url, params) {
    return new Promise((resolve, reject) => {
      request.post(url, params, function (err, httpReponse, body) {
        if (err)
          return reject(err);
        var body = JSON.parse(body);
        resolve(body);
      });
    });
  }
}
module.exports = requestHelper;
var Redis = require('ioredis');
var redis = {};
var config = require('../config');

var redisHelper = {
  init: function () {
    redis = new Redis({
      port: config["redis"]["port"],
      host: config["redis"]["host"],
      db: config["redis"]["db"]
    });
  },
  set: function (key, value) {
    return new Promise((resolve, reject) => {
      redis.set(key, value, 'EX', 60, function (results) {
        console.log(`Key set as ${key} with value ${value}`);
        //redis.disconnect();
        resolve({ status: true, message: "Redis Entry Done ! " });
      });
    });
  },
  get: function (key) {
    return new Promise((resolve, reject) => {
      redis.get(key, function (err, result) {
        if (err)
          return reject(err)
        console.log(`Fetching value for the key ${key}`);
        resolve(result);
      });
    });
  },
  close: function () {
    redis.disconnect();
  }
}
module.exports = redisHelper;
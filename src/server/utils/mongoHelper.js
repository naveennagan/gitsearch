var mongodb = require('mongodb');
var config = require("../config/");
var mongourl = config["mongo"]["url"];
var db = {};

var mongo = {
  init: function () {
    return new Promise(function (resolve, reject) {
      mongodb.connect(mongourl, function (err, dbs) {
        if (err) {
          console.log("Error connecting db ", err);
          process.exit(1);
        }
        db = dbs;
        console.log("Connected to Mongo ! ");
        resolve("Connected to mongo ! ");
      });
    });
  },
  closeConnection: function () {
    console.log("Mongo connection closed.")
    db.close();
  },
  deleteDocument: function (queryObj, collection) {
    return new Promise(function (resolve, reject) {
      var collectiondata = db.collection(collection);
      collectiondata.deleteMany(queryObj, function (err, r) {
        if (err) {
          reject(err);
        }
        else {
          resolve(r);
        }
      });
    });
  },
  getDocument: function (queryObj, collection) {
    return new Promise(function (resolve, reject) {
      var collectiondata = db.collection(collection);
      collectiondata.find(queryObj).toArray(
        function (error, result) {
          if (error) {
            reject(error);
          }
          else {
            resolve(result[0]);
          }
        });
    });
  },
  insertDocument: function (queryObj, collection) {
    return new Promise(function (resolve, reject) {
      var collectiondata = db.collection(collection);
      var upsertcondition = { id: queryObj["id"] };
      collectiondata.update(
        upsertcondition,
        queryObj,
        { upsert: true, safe: true },
        function (error, result) {
          if (error)
            reject(error);
          else
            resolve(result);
        });
    });
  },
  getAllDocuments: function (collection) {
    return new Promise(function (resolve, reject) {
      var collectiondata = db.collection(collection);
      collectiondata.find({}).toArray(
        function (error, result) {
          if (error) {
            reject(error);
          }
          else {
            resolve(result);
          }
        });
    });
  }
};
module.exports = mongo;

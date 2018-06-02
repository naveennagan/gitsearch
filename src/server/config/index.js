var _ = require('lodash');
var env = process.env.NODE_ENV || 'development';
var defaults = require("./default.js");
var config = require('./' + env);

module.exports = _.merge({}, defaults, config);;
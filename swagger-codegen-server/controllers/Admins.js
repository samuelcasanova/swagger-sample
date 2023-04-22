'use strict';

var utils = require('../utils/writer.js');
var Admins = require('../service/AdminsService');

module.exports.deleteTask = function deleteTask (req, res, next) {
  Admins.deleteTask()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postTask = function postTask (req, res, next, body) {
  Admins.postTask(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

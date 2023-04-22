'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.getTasks = function getTasks (req, res, next, skip, limit) {
  Users.getTasks(skip, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

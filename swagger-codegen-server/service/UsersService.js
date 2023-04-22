'use strict';


/**
 * get tasks
 * Gets all tasks 
 *
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.getTasks = function(skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdDate" : "2016-08-29T09:12:33.001Z",
  "dueDate" : "2016-08-29T09:12:33.001Z",
  "description" : "Laundry",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
}, {
  "createdDate" : "2016-08-29T09:12:33.001Z",
  "dueDate" : "2016-08-29T09:12:33.001Z",
  "description" : "Laundry",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


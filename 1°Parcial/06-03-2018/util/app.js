let util = require('util');

let name  = 'Elmer';
let greeting = util.format('Hello, %s', name);
util.log(greeting);
var mongoose = require('mongoose');
var dbUrl = 'mongodb://btest:easyPassword@ds029630.mongolab.com:29630/humanresources';

mongoose.connect(dbUrl);

// Close the Mongoose connection on Control+C
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected');
    process.exit(0);
  });
});

require('../models/employee');
require('../models/team');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;
var dbUrl = 'mongodb://btest:easyPassword@ds029630.mongolab.com:29630/humanresources';

var TeamSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
var Team = mongoose.model('Team', TeamSchema);

db.on('error', function () {
  console.log('there was an error communicating with the databse');
});

mongoose.connect(dbUrl, function () {
  console.log('connected!');

  Team.create([{
    name: 'Product Development'
  }, {
    name: 'Dev Ops'
  }, {
    name: 'Accounting'
  }], function (error, pd, devops, acct) {
    if (error) {
      console.log(error);
    } else {
      console.dir(pd);
      console.dir(devops);
      console.dir(acct);

      db.close();
      process.exit;
    }
  });
});

var EmployeeSchema = new Schema({
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  image: {
    type: String,
    default: 'images/user.png'
  },
  address: {
    lines: {
      type: [String]
    },
    postal: {
      type: String
    }
  }
});

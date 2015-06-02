var mysql = require('mysql');
var pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'testUser',
  password: 'testPassword',
  database: 'TestDB'
});

pool.getConnection(function(error, connection) {
  if (error) {
    return console.error(error.message);
  }

  var insertSql = 'INSERT INTO Presidents (Name, Terms) VALUES ' +
                  '(\'Bill clinton\', 2),' +
                  '(\'George W Bush\', 2)';

  connection.query(insertSql, function(error, results) {
    if (error) {
      connection.release();
      return console.error(error.message);
    }

    var selectSql = 'SELECT * FROM Presidents';

    connection.query(selectSql, function(error, results) {
      if (error) {
        connection.release();
        return console.error(error.message);
      }

      console.log('results of SELECT:');
      console.log(JSON.stringify(results, null, 2));

      var dropSql = 'DROP TABLE IF EXISTS Presidents';

      connection.query(dropSql, function(error, results) {
        if (error) {
          connection.release();
          return console.error(error.message);
        }

        console.log('table dropped!');
      });
    });
  });
});

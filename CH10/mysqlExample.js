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

  var sql = 'CREATE TABLE Presidents (' +
            'Id INT UNSIGNED NOT NULL AUTO_INCREMENT,' +
            'Name VARCHAR(100) NOT NULL, ' +
            'Terms INT UNSIGNED NOT NULL, ' +
            'PRIMARY KEY(Id))';

  connection.query(sql, function(error, results) {
    connection.release();
    if (error) {
      return console.error(error.message);
    }

    console.log('successfully created table!');
  });
});

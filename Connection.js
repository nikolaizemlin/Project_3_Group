var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root"

});

connection.connect(function(err){if (err) throw err;
console.log("Connected as id "+ connection.threadId);
afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  }
  
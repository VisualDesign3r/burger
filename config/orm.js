var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  selectAll: function(cb) {
      var queryString = "SELECT * FROM burger";

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result)
      });

  },

  createNew: function(name, cb){
    connection.query(`INSERT INTO burger (burger_name) VALUES ('${name}')`, function(err, result){
      if (err) throw err;
      console.log(result)
      cb()
    })
  },

  update: function(id, cb){
    connection.query(`UPDATE burger SET devoured = 1 WHERE id = ${id}`, function(err, data){
      if(err) throw err;
      cb()
    })
  },

  selectAndOrder: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString =
      "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    let query = connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(query.sql)
        console.log(result);
      }
    );
  }
};

module.exports = orm;

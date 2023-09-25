const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:" + err.stack);
    return;
  }

  console.log("Successfully connected to database");
});

// connection.query("SELECT * FROM table_name", (err, rows) => {
//   if (err) throw err;
//   console.log("Data received from database:");
//   console.log(rows);
// });

// connection.end();

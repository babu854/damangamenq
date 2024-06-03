const mysql = require("mysql2/promise");
const connection = mysql.createPool({
  host: "localhost",
  user: "harsh",
  password: "Harsh@123",
  database: "metabets_daman",
});
export default connection;

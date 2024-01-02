const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.MY_HOST,
    user: process.env.MY_USER,
    password: process.env.MY_PASSWORD,
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connect successfully to MySQL!");
    connection.query("CREATE DATABASE IF NOT EXISTS main;");
    connection.query("USE main;");
    connection.query(
        "CREATE TABLE IF NOT EXISTS todos(PRIMARY KEY(id), id int NOT NULL AUTO_INCREMENT, content VARCHAR(255) NOT NULL);",
        function (error, result, fields) {
            console.log(error);
            console.log(result);
            console.log(fields);
        }
    );
});

module.exports = connection;
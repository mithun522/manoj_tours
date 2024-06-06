// models/db.js
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');

      // Create the drivers table if it doesn't exist
      const createTableQuery = `
      CREATE TABLE IF NOT EXISTS drivers (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          mobile_number VARCHAR(255) NOT NULL,
          address TEXT NOT NULL,
          profileImage VARCHAR(255) NULL
      )
  `;

  connection.query(createTableQuery, (err, result) => {
      if (err) {
          throw err;
      }
      console.log('Drivers table created or already exists.');
  });
});

module.exports = connection;

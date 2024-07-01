// models/db.js
const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");

  // Create the drivers table if it doesn't exist
  const createDriversTableQuery = `
    CREATE TABLE IF NOT EXISTS drivers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        mobile_number VARCHAR(255) NOT NULL,
        address TEXT NOT NULL,
        profileImage VARCHAR(255) NULL
    )
  `;

  // Create the customers table if it doesn't exist
  const createCustomersTableQuery = `
    CREATE TABLE IF NOT EXISTS customers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        customerName VARCHAR(255) NOT NULL,
        mobile VARCHAR(255) NOT NULL,
        address TEXT NOT NULL
    )
  `;

  // Create the bookings table if it doesn't exist
  const createBookingsTableQuery = `
    CREATE TABLE IF NOT EXISTS bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      mobileNumber VARCHAR(255) NOT NULL,
      address TEXT NOT NULL,
      pickupLocation VARCHAR(255) NOT NULL,
      dropLocation VARCHAR(255) NOT NULL,
      startDate DATE NOT NULL,
      endDate DATE NOT NULL,
      timing TIME NOT NULL,
      fleetName VARCHAR(255) NOT NULL,
      fleetNumber VARCHAR(255) NOT NULL,
      estimatedKms INT NOT NULL,
      estimatedAmount DECIMAL(10, 2) NOT NULL,
      advanceAmount DECIMAL(10, 2) NOT NULL,
      paymentMode VARCHAR(255) NOT NULL,
      totalAmount DECIMAL(10, 2) NOT NULL,
      dateOfBooking DATE DEFAULT CURRENT_DATE,
      tripType VARCHAR(255) NOT NULL,
      status ENUM('Pending', 'Confirmed', 'Cancelled') DEFAULT 'Pending'
    )
  `;

  // Create the enquiries table if it doesn't exist
  const createEnquiriesTableQuery = `
    CREATE TABLE IF NOT EXISTS enquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        customerName VARCHAR(255) NOT NULL,
        mobileNumber VARCHAR(255) NOT NULL,
        numberOfPassengers INT NOT NULL
    )
  `;

// Create the users table if it doesn't exist
const createUsersTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profile_pic VARCHAR(255)
  )
`;

// Insert a default user if the table is newly created
const insertDefaultUserQuery = `
  INSERT IGNORE INTO users (name, email, password, profile_pic)
  VALUES ('user', 'user@user.com', 'user', 'assets/profile.jpg')
`;

  // Create the fleets table if it doesn't exist
  const createFleetsTableQuery = `
    CREATE TABLE IF NOT EXISTS fleets (
      id INT AUTO_INCREMENT PRIMARY KEY,
      fleetName VARCHAR(255) NOT NULL,
      fleetNumber VARCHAR(255) NOT NULL,
      fleetImage VARCHAR(500),
      numberOfSeats INT NOT NULL
    )
  `;

  connection.query(createDriversTableQuery, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Drivers table created or already exists.");
  });

  connection.query(createCustomersTableQuery, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Customers table created or already exists.");
  });

  connection.query(createBookingsTableQuery, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Bookings table created or already exists.");
  });

  connection.query(createEnquiriesTableQuery, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Enquiries table created or already exists.");
  });

  connection.query(createUsersTableQuery, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Users table created or already exists.");
  
    // Insert default user after creating the table
    connection.query(insertDefaultUserQuery, (err, result) => {
      if (err) {
        throw err;
      }
      console.log("Default user inserted.");
    });
  });

  connection.query(createFleetsTableQuery, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Fleets table created or already exists.");
  });
});

module.exports = connection;

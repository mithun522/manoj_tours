// models/customerModel.js

const db = require('../config/db');

const Customer = {
    getAll: (callback) => {
        const query = 'SELECT * FROM customers';
        db.query(query, callback);
    },
    getById: (id, callback) => {
        const query = 'SELECT * FROM customers WHERE id = ?';
        db.query(query, [id], callback);
    },
    create: (customer, callback) => {
        const query = 'INSERT INTO customers SET ?';
        db.query(query, customer, callback);
    },
    update: (id, customer, callback) => {
        const query = 'UPDATE customers SET ? WHERE id = ?';
        db.query(query, [customer, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM customers WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Customer;

const db = require('../config/db');

const Driver = {
    getAll: (callback) => {
        const query = 'SELECT * FROM drivers';
        db.query(query, callback);
    },
    getById: (id, callback) => {
        const query = 'SELECT * FROM drivers WHERE id = ?';
        db.query(query, [id], callback);
    },
    create: (driver, callback) => {
        const query = 'INSERT INTO drivers SET ?';
        db.query(query, driver, callback);
    },
    update: (id, driver, callback) => {
        const query = 'UPDATE drivers SET ? WHERE id = ?';
        db.query(query, [driver, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM drivers WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Driver;

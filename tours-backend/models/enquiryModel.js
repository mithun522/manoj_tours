const db = require('../config/db');

const Enquiry = {
    getAll: (callback) => {
        const query = 'SELECT * FROM enquiries';
        db.query(query, callback);
    },
    getById: (id, callback) => {
        const query = 'SELECT * FROM enquiries WHERE id = ?';
        db.query(query, [id], callback);
    },
    create: (enquiry, callback) => {
        const query = 'INSERT INTO enquiries SET ?';
        db.query(query, enquiry, callback);
    },
    update: (id, enquiry, callback) => {
        const query = 'UPDATE enquiries SET ? WHERE id = ?';
        db.query(query, [enquiry, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM enquiries WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Enquiry;

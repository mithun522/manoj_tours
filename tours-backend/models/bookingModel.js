// models/bookingModel.js

const db = require('../config/db');

const Booking = {
    getAll: (callback) => {
        const query = 'SELECT * FROM bookings';
        db.query(query, callback);
    },
    getById: (id, callback) => {
        const query = 'SELECT * FROM bookings WHERE id = ?';
        db.query(query, [id], callback);
    },
    create: (booking, callback) => {
        const query = 'INSERT INTO bookings SET ?';
        db.query(query, booking, callback);
    },
    update: (id, booking, callback) => {
        const query = 'UPDATE bookings SET ? WHERE id = ?';
        db.query(query, [booking, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM bookings WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Booking;

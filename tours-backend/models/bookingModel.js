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
    },

    getTripCounts: (callback) => {
        const closedTripsQuery = `
            SELECT COUNT(*) AS closedTrips 
            FROM bookings 
            WHERE DATE_FORMAT(endDate, '%m-%d-%Y') < DATE_FORMAT(CURRENT_DATE(), '%m-%d-%Y')
        `;
        const todaysTripsQuery = `
            SELECT COUNT(*) AS todaysTrips 
            FROM bookings 
            WHERE DATE_FORMAT(startDate, '%m-%d-%Y') = DATE_FORMAT(CURRENT_DATE(), '%m-%d-%Y')
        `;
        const upcomingTripsQuery = `
            SELECT COUNT(*) AS upcomingTrips 
            FROM bookings 
            WHERE DATE_FORMAT(startDate, '%m-%d-%Y') > DATE_FORMAT(CURRENT_DATE(), '%m-%d-%Y')
        `;
    
        db.query(closedTripsQuery, (err, closedResults) => {
            if (err) return callback(err);
            db.query(todaysTripsQuery, (err, todaysResults) => {
                if (err) return callback(err);
                db.query(upcomingTripsQuery, (err, upcomingResults) => {
                    if (err) return callback(err);
                    callback(null, {
                        closedTrips: closedResults[0].closedTrips.toString().padStart(2, '0'),
                        todaysTrips: todaysResults[0].todaysTrips.toString().padStart(2, '0'),
                        upcomingTrips: upcomingResults[0].upcomingTrips.toString().padStart(2, '0')
                    });
                });
            });
        });
    }   
};

module.exports = Booking;

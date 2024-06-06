const db = require('../config/db');

const Fleet = {
    getAll: (callback) => {
        const query = 'SELECT * FROM fleets';
        db.query(query, callback);
    },
    getById: (id, callback) => {
        const query = 'SELECT * FROM fleets WHERE id = ?';
        db.query(query, [id], callback);
    },
    create: (fleet, callback) => {
        const query = 'INSERT INTO fleets SET ?';
        db.query(query, fleet, callback);
    },
    update: (id, fleet, callback) => {
        const query = 'UPDATE fleets SET ? WHERE id = ?';
        db.query(query, [fleet, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM fleets WHERE id = ?';
        db.query(query, [id], callback);
    },
    createTableIfNotExists: (callback) => {
        const query = `
            CREATE TABLE IF NOT EXISTS fleets (
                id INT AUTO_INCREMENT PRIMARY KEY,
                fleetName VARCHAR(255) NOT NULL,
                fleetNumber VARCHAR(255) NOT NULL,
                numberOfSeats INT NOT NULL,
                fleetImage VARCHAR(255),
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        db.query(query, callback);
    }
};

module.exports = Fleet;

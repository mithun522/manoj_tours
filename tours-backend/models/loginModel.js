// models/loginModel.js
const db = require('../config/db');

const loginModel = {
    getUserByEmail: (email, callback) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], callback);
    }
};

module.exports = loginModel;

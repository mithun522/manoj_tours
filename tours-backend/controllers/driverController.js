const path = require('path');
const fs = require('fs');
const Driver = require('../models/driverModel');
const multer = require('multer');

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/'); // Specify the destination folder for the uploaded files
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + file.originalname;
        cb(null, uniqueSuffix); // Ensure unique filenames
    }
});

const upload = multer({ storage: storage }).single('profileImage'); // 'profileImage' is the field name for the file

exports.getAllDrivers = (req, res) => {
    Driver.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json(results);
    });
};

exports.getDriverById = (req, res) => {
    const id = req.params.id;
    Driver.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Driver not found' });
        }
        res.status(200).json(results[0]);
    });
};

exports.createDriver = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: 'File upload error', error: err });
        }

        const { name, mobileNumber, address } = req.body;
        const profileImage = req.file ? `assets/${req.file.filename}` : 'assets/profile.jpg'; // Set default profile image if none provided

        const newDriver = { name, mobile_number: mobileNumber, address, profileImage };

        Driver.create(newDriver, (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }
            res.status(201).json({ message: 'Driver created successfully', driver: newDriver });
        });
    });
};

exports.createMultipleDrivers = (req, res) => {
    const drivers = req.body.drivers;

    if (!Array.isArray(drivers)) {
        return res.status(400).json({ message: 'Invalid input: drivers should be an array' });
    }

    const createdDrivers = [];
    const errors = [];

    drivers.forEach((driver, index) => {
        const { name, mobileNumber, address, profileImage } = driver;
        const driverProfileImage = profileImage ? profileImage : 'assets/profile.jpg'; // Set default profile image if none provided

        const newDriver = { name, mobile_number: mobileNumber, address, profileImage: driverProfileImage };

        Driver.create(newDriver, (err, results) => {
            if (err) {
                errors.push({ driverIndex: index, error: err });
            } else {
                createdDrivers.push(newDriver);
            }

            // Check if all drivers have been processed
            if (createdDrivers.length + errors.length === drivers.length) {
                if (errors.length > 0) {
                    res.status(500).json({ message: 'Some drivers could not be created', errors });
                } else {
                    res.status(201).json({ message: 'All drivers created successfully', drivers: createdDrivers });
                }
            }
        });
    });
};

exports.updateDriver = (req, res) => {
    const id = req.params.id;

    Driver.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Driver not found' });
        }

        const existingDriver = results[0];
        const existingProfileImage = existingDriver.profileImage;

        upload(req, res, (err) => {
            if (err) {
                return res.status(500).json({ message: 'File upload error', error: err });
            }
            const { name, mobile_number, address } = req.body;
            const profileImage = req.file ? `assets/${req.file.filename}` : existingProfileImage;

            const updatedDriver = { name, mobile_number, address, profileImage };

            Driver.update(id, updatedDriver, (err, results) => {
                if (err) {
                    return res.status(500).json({ message: 'Database error', error: err });
                }
                // If a new file was uploaded, delete the old file
                if (req.file && existingProfileImage !== 'assets/profile.jpg' && fs.existsSync(existingProfileImage)) {
                    fs.unlink(existingProfileImage, (err) => {
                        if (err) {
                            console.error('Error deleting old file:', err);
                        }
                    });
                }
                res.status(200).json({ message: 'Driver updated successfully', driver: updatedDriver });
            });
        });
    });
};

exports.deleteDriver = (req, res) => {
    const id = req.params.id;
    Driver.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Driver not found' });
        }
        const driver = results[0];
        const profileImagePath = driver.profileImage;

        Driver.delete(id, (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }
            if (profileImagePath && fs.existsSync(profileImagePath)) {
                fs.unlink(profileImagePath, (err) => {
                    if (err) {
                        console.error('Error deleting file:', err);
                    }
                });
            }
            res.status(200).json({ message: 'Driver deleted successfully' });
        });
    });
};

const path = require('path');
const fs = require('fs');
const Fleet = require('../models/fleetModel');
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

const upload = multer({ storage: storage }).single('fleetImage'); // 'fleetImage' is the field name for the file

exports.getAllFleets = (req, res) => {
    Fleet.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json(results);
    });
};

exports.getFleetById = (req, res) => {
    const id = req.params.id;
    Fleet.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Fleet not found' });
        }
        res.status(200).json(results[0]);
    });
};

exports.createFleet = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: 'File upload error', error: err });
        }

        const { fleetName, fleetNumber, numberOfSeats } = req.body;
        const fleetImage = req.file ? `assets/${req.file.filename}` : 'assets/car.png'; // Set default fleet image if none provided

        const newFleet = { fleetName, fleetNumber, numberOfSeats, fleetImage };

        Fleet.create(newFleet, (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }
            res.status(201).json({ message: 'Fleet created successfully', fleet: newFleet });
        });
    });
};

exports.createMultipleFleets = (req, res) => {
    const fleets = req.body.fleets; // Expecting an array of fleet objects

    const defaultImage = 'assets/car.png';

    const fleetPromises = fleets.map((fleet) => {
        const { fleetName, fleetNumber, numberOfSeats, fleetImage } = fleet;
        const finalFleetImage = fleetImage || defaultImage;

        const newFleet = { fleetName, fleetNumber, numberOfSeats, fleetImage: finalFleetImage };

        return new Promise((resolve, reject) => {
            Fleet.create(newFleet, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    });

    Promise.all(fleetPromises)
        .then((results) => {
            res.status(201).json({ message: 'All fleets created successfully', fleets: results });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Database error', error: error });
        });
};

exports.updateFleet = (req, res) => {
    const id = req.params.id;

    Fleet.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Fleet not found' });
        }
        
        const existingFleet = results[0];
        const existingFleetImage = existingFleet.fleetImage;

        upload(req, res, (err) => {
            if (err) {
                return res.status(500).json({ message: 'File upload error', error: err });
            }
            const { fleetName, fleetNumber, numberOfSeats } = req.body;
            const fleetImage = req.file ? `assets/${req.file.filename}` : existingFleetImage;

            const updatedFleet = { fleetName, fleetNumber, numberOfSeats, fleetImage };

            Fleet.update(id, updatedFleet, (err, results) => {
                if (err) {
                    return res.status(500).json({ message: 'Database error', error: err });
                }
                // If a new file was uploaded and the existing image is not the default 'car.png', delete the old file
                if (req.file && existingFleetImage !== 'assets/car.png' && fs.existsSync(existingFleetImage)) {
                    fs.unlink(existingFleetImage, (err) => {
                        if (err) {
                            console.error('Error deleting old file:', err);
                        }
                    });
                }
                res.status(200).json({ message: 'Fleet updated successfully', fleet: updatedFleet });
            });
        });
    });
};

exports.deleteFleet = (req, res) => {
    const id = req.params.id;
    Fleet.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Fleet not found' });
        }
        const fleet = results[0];
        const fleetImagePath = fleet.fleetImage;

        Fleet.delete(id, (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }
            if (fleetImagePath) {
                fs.unlink(fleetImagePath, (err) => {
                    if (err) {
                        console.error('Error deleting file:', err);
                    }
                });
            }
            res.status(200).json({ message: 'Fleet deleted successfully' });
        });
    });
};

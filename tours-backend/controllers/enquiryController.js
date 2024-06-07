const Enquiry = require('../models/enquiryModel');

const enquiryController = {
    getAllEnquiries: (req, res) => {
        Enquiry.getAll((err, results) => {
            if (err) {
                res.status(500).json({ error: 'Failed to retrieve enquiries.' });
            } else {
                res.status(200).json(results);
            }
        });
    },
    getEnquiryById: (req, res) => {
        const { id } = req.params;
        Enquiry.getById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Failed to retrieve enquiry.' });
            } else if (result.length === 0) {
                res.status(404).json({ error: 'Enquiry not found.' });
            } else {
                res.status(200).json(result[0]);
            }
        });
    },
    createEnquiry: (req, res) => {
        const newEnquiry = req.body;
        Enquiry.create(newEnquiry, (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Failed to create enquiry.' });
            } else {
                res.status(201).json({ message: 'Enquiry created successfully.', enquiryId: result.insertId });
            }
        });
    },
    createMultipleEnquiries: (req, res) => {
        const enquiries = req.body.enquiries;
    
        if (!Array.isArray(enquiries)) {
            return res.status(400).json({ message: 'Invalid input: enquiries should be an array' });
        }
    
        const createdEnquiries = [];
        const errors = [];
    
        enquiries.forEach((enquiry, index) => {
            const { customerName, mobileNumber, numberOfPassengers } = enquiry;
    
            const newEnquiry = { customerName, mobileNumber, numberOfPassengers };
    
            Enquiry.create(newEnquiry, (err, results) => {
                if (err) {
                    errors.push({ enquiryIndex: index, error: err });
                } else {
                    createdEnquiries.push(newEnquiry);
                }
    
                // Check if all enquiries have been processed
                if (createdEnquiries.length + errors.length === enquiries.length) {
                    if (errors.length > 0) {
                        res.status(500).json({ message: 'Some enquiries could not be created', errors });
                    } else {
                        res.status(201).json({ message: 'All enquiries created successfully', enquiries: createdEnquiries });
                    }
                }
            });
        });
    },
    
    updateEnquiry: (req, res) => {
        const { id } = req.params;
        const updatedEnquiry = req.body;
        Enquiry.update(id, updatedEnquiry, (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Failed to update enquiry.' });
            } else if (result.affectedRows === 0) {
                res.status(404).json({ error: 'Enquiry not found.' });
            } else {
                res.status(200).json({ message: 'Enquiry updated successfully.' });
            }
        });
    },
    deleteEnquiry: (req, res) => {
        const { id } = req.params;
        Enquiry.delete(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Failed to delete enquiry.' });
            } else if (result.affectedRows === 0) {
                res.status(404).json({ error: 'Enquiry not found.' });
            } else {
                res.status(200).json({ message: 'Enquiry deleted successfully.' });
            }
        });
    }
};

module.exports = enquiryController;

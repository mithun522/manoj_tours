// controllers/customerController.js

const Customer = require('../models/customerModel');

exports.createCustomer = (req, res) => {
    Customer.create(req.body, (err, result) => {
        if (err) return res.status(400).send(err);
        res.status(201).send(result);
    });
};

exports.getCustomers = (req, res) => {
    Customer.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(results);
    });
};

exports.getCustomerById = (req, res) => {
    Customer.getById(req.params.id, (err, result) => {
        if (err) return res.status(500).send(err);
        if (!result.length) return res.status(404).send('Customer not found');
        res.status(200).send(result[0]);
    });
};

exports.updateCustomer = (req, res) => {
    Customer.update(req.params.id, req.body, (err, result) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(result);
    });
};

exports.deleteCustomer = (req, res) => {
    Customer.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(result);
    });
};

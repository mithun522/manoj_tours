const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();

router.post('/customers', customerController.createCustomer);
router.get('/customers', customerController.getCustomers);
router.get('/customers/:id', customerController.getCustomerById);
router.patch('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;

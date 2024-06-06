const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

router.get('/driver', driverController.getAllDrivers);
router.get('/driver/:id', driverController.getDriverById);
router.post('/driver', driverController.createDriver);
router.put('/driver/:id', driverController.updateDriver);
router.delete('/driver/:id', driverController.deleteDriver);

module.exports = router;

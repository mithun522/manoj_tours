const express = require('express');
const router = express.Router();
const fleetController = require('../controllers/fleetController');

router.get('/fleets', fleetController.getAllFleets);
router.get('/fleets/:id', fleetController.getFleetById);
router.post('/fleets', fleetController.createFleet);
router.post('/fleets/bulk', fleetController.createMultipleFleets);
router.put('/fleets/:id', fleetController.updateFleet);
router.delete('/fleets/:id', fleetController.deleteFleet);

module.exports = router;

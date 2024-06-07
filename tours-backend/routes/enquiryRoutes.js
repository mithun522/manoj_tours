const express = require('express');
const router = express.Router();
const enquiryController = require('../controllers/enquiryController');

router.get('/enquiry', enquiryController.getAllEnquiries);
router.get('/enquiry/:id', enquiryController.getEnquiryById);
router.post('/enquiry/', enquiryController.createEnquiry);
router.post('/enquiry/bulk', enquiryController.createMultipleEnquiries);
router.put('/enquiry/:id', enquiryController.updateEnquiry);
router.delete('/enquiry/:id', enquiryController.deleteEnquiry);

module.exports = router;

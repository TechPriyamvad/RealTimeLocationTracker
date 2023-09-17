const express = require('express');
var router = express.Router();
const locationController = require('../controller/location.controller');

router.post('/location', locationController.captureLocation);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getDestinations, addDestination } = require('../controllers/destinations');

// Get all destinations
router.get('/', getDestinations);

// Add a new destination
router.post('/', addDestination);

module.exports = router;

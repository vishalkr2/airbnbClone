const express = require('express');
const router = express.Router();
const { getListings, getListingById } = require('../controllers/listings');

// Get all listings
router.get('/', getListings);

// Get listing by ID
router.get('/:id', getListingById);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getRooms, addRoom } = require('../controllers/rooms');

// Get all rooms
router.get('/', getRooms);

// Add a new room
router.post('/', addRoom);

module.exports = router;
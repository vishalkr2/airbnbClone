const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Room', RoomSchema);

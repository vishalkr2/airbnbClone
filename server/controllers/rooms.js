const Room = require('../models/Room');

const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rooms' });
  }
};

const addRoom = async (req, res) => {
  try {
    const room = new Room(req.body);
    await room.save();
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: 'Error adding room' });
  }
};

module.exports = {
  getRooms,
  addRoom,
};

// const Destination = require('../models/Destination');

const getDestinations = async (req, res) => {
  try {
    // const destinations = await Destination.find();
    res.json([]); // Return an empty array for now
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destinations' });
  }
};

const addDestination = async (req, res) => {
  try {
    // const destination = new Destination(req.body);
    // await destination.save();
    res.json({}); // Return an empty object for now
  } catch (error) {
    res.status(500).json({ message: 'Error adding destination' });
  }
};

module.exports = {
  getDestinations,
  addDestination,
};

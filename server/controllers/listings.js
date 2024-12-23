const Listing = require('../models/Listing');

// Get all listings
const getListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching listings' });
  }
};

// Get listing by ID
const getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching listing' });
  }
};

module.exports = {
  getListings,
  getListingById,
};
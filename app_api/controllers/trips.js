const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET: /trips
// Returns all trips from MongoDB
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec();

    if (!trips) {
      return res.status(404).json({ message: 'No trips found' });
    }

    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// GET: /trips/:tripCode
// Returns one trip using its unique trip code
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
// POST: /trips
// Add a new trip to the database
const tripsAddTrip = async (req, res) => {
    try {
        const newTrip = await Trip.create(req.body);
        return res.status(201).json(newTrip);
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
};
module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip
};
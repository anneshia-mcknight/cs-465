
const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');
const authController = require('../controllers/authentication');
const authenticateJWT = require('../config/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Get all trips and add a new trip
router.route('/trips')
  .get(ctrlTrips.tripsList)
  .post(authenticateJWT, ctrlTrips.tripsAddTrip);

// Get, update, and delete a specific trip
router.route('/trips/:tripCode')
  .get(ctrlTrips.tripsFindByCode)
  .put(authenticateJWT, ctrlTrips.tripsUpdateTrip)
  .delete(authenticateJWT, ctrlTrips.tripsDeleteTrip);

module.exports = router;

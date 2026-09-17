const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

/* Additional public pages from the client wireframe. */
router.get('/rooms', controller.rooms);
router.get('/meals', controller.meals);
router.get('/news', controller.news);
router.get('/about', controller.about);
router.get('/contact', controller.contact);

module.exports = router;

/*
 * Traveler Controller
 * Handles the public-facing Travlr Getaways pages described in the
 * client wireframe (Travel, Rooms, Meals, News, About, and Contact).
 * Each method selects a Handlebars view and supplies the model data
 * that the view renders.
 */

var fs = require('fs');

/* GET travel view */
const travel = (req, res) => {
    const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
    res.render('travel', {
        title: 'Travlr Getaways',
        navTravel: true,
        trips: trips
    });
};

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {
        title: 'Rooms - Travlr Getaways',
        navRooms: true
    });
};

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', {
        title: 'Meals - Travlr Getaways',
        navMeals: true
    });
};

/* GET news view */
const news = (req, res) => {
    res.render('news', {
        title: 'News - Travlr Getaways',
        navNews: true
    });
};

/* GET about view */
const about = (req, res) => {
    res.render('about', {
        title: 'About - Travlr Getaways',
        navAbout: true
    });
};

/* GET contact view */
const contact = (req, res) => {
    res.render('contact', {
        title: 'Contact - Travlr Getaways',
        navContact: true
    });
};

module.exports = {
    travel,
    rooms,
    meals,
    news,
    about,
    contact
};

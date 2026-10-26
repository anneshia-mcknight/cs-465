/* GET Homepage */
const index = (req, res) => {
    res.render('index', {
        title: 'Travlr Getaways',
        navHome: true
    });
};

module.exports = {
    index
};

require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');

// MVC routers from the app_server folder
const indexRouter = require('./app_server/routes/index');
const travelRouter = require('./app_server/routes/travel');
const pagesRouter = require('./app_server/routes/pages');
require('./app_api/models/db');
const apiRouter = require('./app_api/routes/index');


const app = express();

// view engine setup - views now live under app_server
app.set('views', path.join(__dirname, 'app_server', 'views'));

// register handlebars partials (https://www.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// serve static assets (css, images) but let the MVC routes own the page URLs
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

// wire the controllers to their routes
app.use('/', indexRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', { title: 'Travlr Getaways - Error', message: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Travlr Getaways server is running at http://localhost:${PORT}`);
});

module.exports = app;

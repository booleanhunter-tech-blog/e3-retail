const http = require('http');
const createError = require('http-errors');
const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const handlebars = require('handlebars');
const hbs = require('hbs');
require('dotenv').config();

const startGraphqlServer = require('./http/graphql').startGraphqlServer;
const initializeRoutes = require('./http/rest').initializeRoutes;

const registerHelpers = require('./utils/handlebars').registerHelpers;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'client/views'));
hbs.registerPartials(__dirname + '/client/views/partials', function (err) {});
registerHelpers(hbs);

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client/public')));

// app.use(helmet());

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: helmet.contentSecurityPolicy.dangerouslyDisableDefaultSrc,
        "img-src": ["*"],
    },
}));

startGraphqlServer(app);
initializeRoutes(app);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = {
    app,
    server
}

const http = require('http');
const createError = require('http-errors');
const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const hbs = require('hbs');
require('dotenv').config();

const registerHelpers = require('./utils/handlebars').registerHelpers;
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
registerHelpers(hbs);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(helmet());

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: helmet.contentSecurityPolicy.dangerouslyDisableDefaultSrc,
        "img-src": ["*"],
    },
}));

app.use('/', indexRouter);
app.use('/products', productsRouter);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

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

var path = require('path'),
    routes = require('./routes'),
    express = require('express'),

    //Templating engine to use with the views
    exphbs = require('express-handlebars'),

    /*
    Parse incoming request bodies in a middleware before your handlers,
    available under the req.body property.
    */
    bodyParser = require('body-parser'),

    //This allows cookies to be sent and received.
    cookieParser = require('cookie-parser'),

    //Module responsible for logging.
    morgan = require('morgan'),

    /**
    For older browsers that don't properly support REST
    HTTP verbs, such as UPDATE and PUT , the methodOverride middleware
    allows this to be faked using a special hidden input field.
    */
    methodOverride = require('method-override'),

    //This handles any errors that occur throughout the entire middleware process.
    errorHandler = require('errorhandler'),

    //Module to support File uploads
    multer = require('multer'),

    moment = require('moment');

module.exports = function (app) {
    app.use(morgan('dev'));
    app.use(bodyParser({
        uploadDir: path.join(__dirname, 'public/upload/temp')
    }));

    app.use(multer({
        dest: path.join(__dirname,
            'public/upload/temp')
    }).any());

    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser('some-secret-value-here'));
    routes(app);
    app.use('/public/', express.static(path.join(__dirname, './public')));

    if ('development' === app.get('env')) {
        app.use(errorHandler());
    }

    //Register Handlebars as default view rendering engine
    app.engine('handlebars', exphbs.create({
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials'],
        helpers: {
            timeago: function (timestamp) {
                return moment(timestamp).startOf('minute').fromNow();
            }
        }
    }).engine);
    app.set('view engine', 'handlebars');

    var viewsPath = path.join(__dirname, 'views/');
    app.set('views', viewsPath);

    return app;
};
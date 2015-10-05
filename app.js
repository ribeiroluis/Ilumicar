var express = require('express');
var httpPort = process.env.npm_package_config_httpPort; //Busca qual porta o Node.js vai usar para subir o servidor HTTP
var bodyParser = require('body-parser'); //pull information from HTML POST (express4)
var open = require("open");
var favicon = require('static-favicon');
var logger = require('morgan');
var http = require('http');
var path = require('path');
var fs = require("fs");
var log4js = require('log4js');
var mkdirp = require('mkdirp');
var app = express();// create our app w/ express

app.set('httpPort', process.env.HTTP_PORT || httpPort || 80);
//Cria o servidor HTTP e inicia o mesmo
var httpServer = http.createServer(app);
httpServer.listen(app.get('httpPort'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(favicon());

mkdirp('./logs', function (err) {
    if (err) console.error(err)
    else console.log('./log directory created.')
});


log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('./logs/app.log'), 'app');
app.use(logger('dev'));
//app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
var logger = log4js.getLogger('app');
logger.setLevel('ALL');
logger.info('start server');


app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ 'extended': 'true' })); 		// parse application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, 'public')));
app.use("/test", express.static(__dirname + "/Tests/test"));
var index = require('./api/index.js');
var tests = require('./api/tests.js');
require('./api/routes.js')(app);
app.use('/', index);
app.use('/tests', tests);

console.log("App listening on port " + app.get('httpPort'));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    logger(err);
    next(err);
});
/// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        logger.error("Something went wrong:", err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    logger.error("Something went wrong:", err);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
open("http://localhost:" + app.get('httpPort'));

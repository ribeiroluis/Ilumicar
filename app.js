var express = require('express');
var port = process.env.PORT || 3000; 	      // set the port
var bodyParser = require('body-parser'); 	  // pull information from HTML POST (express4)
var open = require("open");
var favicon = require('static-favicon');
var logger = require('morgan');
var http = require('http');
var path = require('path');
var app = express(); 					      // create our app w/ express

//Busca qual porta o Node.js vai usar para subir o servidor HTTP
var httpPort = process.env.npm_package_config_httpPort;
app.set('httpPort', process.env.HTTP_PORT || httpPort || 3000);
//Cria o servidor HTTP e inicia o mesmo
var httpServer = http.createServer(app);
httpServer.listen(app.get('httpPort'));

app.use(express.static(path.join(__dirname, 'public')));
app.use("/test", express.static(__dirname + "/Tests/test"));
app.use(bodyParser.urlencoded({ 'extended': 'true' })); 		// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

var index = require('./api/index.js');
var tests = require('./api/tests.js');
require('./api/routes.js')(app);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(favicon());
app.use('/', index);
app.use('/tests', tests);


console.log("App listening on port " + app.get('httpPort'));


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
open("http://localhost:" + app.get('httpPort'));

// var exec = require('child_process').exec,
//     child;
// child = exec('app.js', function (error, stdout, stderr) {
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
//     if (error !== null) {
//       console.log('exec error: ' + error);
//     }
// });
// var express = require('express');
// var app = express(); 					      // create our app w/ express
// var port = process.env.PORT || 3000; 	      // set the port
// var bodyParser = require('body-parser'); 	  // pull information from HTML POST (express4)
// var open = require("open");
// require('./api/routes.js')(app);
// // set the static files location /public/img will be /img for users
// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({ 'extended': 'true' })); 		// parse application/x-www-form-urlencoded
// app.use(bodyParser.json()); 									// parse application/json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
// app.listen(port);
// console.log("App listening on http://localhost:" + port);
// open("http://localhost:3000/");
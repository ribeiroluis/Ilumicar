var express = require('express');
var app = express(); 					      // create our app w/ express
var port = process.env.PORT || 3000; 	      // set the port
var bodyParser = require('body-parser'); 	  // pull information from HTML POST (express4)
var open = require("open");
var favicon = require('static-favicon');

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));


app.use(favicon());
app.use(bodyParser.urlencoded({ 'extended': 'true' })); 		// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

require('./api/routes.js')(app);

app.listen(port);
console.log("App listening on http://localhost:" + port);
open("http://localhost:3000/");

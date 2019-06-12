'use strict';

var _express = require('express');
var _express2 = _interopRequireDefault(_express);
var _bodyParser = require('body-parser');
var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _request = require('request');
var _request2 = _interopRequireDefault(_request);
var _expressHandlebars = require('express-handlebars');
var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


// Post Body Request
 /* Imports */ 
 // Set Default Port for Express and Heroku
var PORT = process.env.PORT || 8080; 
// Http Requests
// Express Server
// Initialize Express
var app = (0, _express2.default)(); 

/* Configure middleware */ 

app.use(logger("dev")); // Use morgan logger for logging requests
// Use body-parser for handling form submissions
app.use(_bodyParser2.default.urlencoded({ extended: false })); 
// Serve static content for the app from the "public" directory in the application directory.

// Set Handlebars as the default templating engine.
app.use(_express2.default.static("public")); 
app.engine("handlebars", (0, _expressHandlebars2.default)({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

 /* Configure Routes */ 
require("./controllers/webScrapperController.js")(app);

 /* Execution */ 

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
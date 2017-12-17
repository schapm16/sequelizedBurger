var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

//Set up express
var app = express();
var PORT = process.env.PORT || 8080;

//Serve static files from root directory 'public'
app.use(express.static("public"));

//Apply body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Apply express.Router() middleware
app.use('/', require('./controllers/burgers_controller.js'));

//Set handlebars as the view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Server Listen
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});


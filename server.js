var express  = require('express');
    var app      = express();                               
    //var morgan = require('morgan');             
    var bodyParser = require('body-parser');    
    var methodOverride = require('method-override'); 

    // configuration 
    var mongoose = require('mongoose');                     
    mongoose.connect('mongodb://localhost:27017/employees'); 

    var index = require('./routes/index');
    //var tasks = require('./routes/tasks');

    app.use(express.static(__dirname + '/views'));

    //app.use(morgan('dev'));                                       
    app.use(bodyParser.urlencoded({'extended':'true'}));            
    app.use(bodyParser.json());                                     
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
    app.use(methodOverride());

    app.use('/', index);
    //app.use('/api', tasks);

    // application --
    app.get('*', function(req, res) {
        res.sendfile('./views/index.html'); // load the single view file
    });

    // listen (start app with node server.js) 
    app.listen(3000);
    console.log("App listening on port 3000");
// import all required packages

var express = require('express');

var bodyParser = require('express');

var app = express();

// Allow access control with all methods

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

// use body-parser

app.use(bodyParser.urlencoded({extended:true})); // parse all type of values if false it parse only string

app.use(bodyParser.json());

// get all routes 

var api = require('./api')(app,express);

app.use('/api',api);

// start node at 8000 port

app.listen(8000,function(){

    console.log("server start app 8000");
})


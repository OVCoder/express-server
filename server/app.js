// import files and packages up here
var morgan = require('morgan');
var express = require('express');
var data = require('./data.json'); 
var app = express();
var port = process.env.PORT ||8080;


app.use(morgan('dev'));
app.use( express.static("/Users/Kira/oca/startnow-web101-san-diego-top-spots"));

// app.get('/', function (req, res) {
//     console.log(res.statusCode);
//     res.sendStatus(res.statusCode);
//     });

app.get('/data', function(req, res){
    res.json(data);
    console.dir(res.statusCode);
    });

app.listen(port);
console.log('Server running on port: '+ port);
// create your express server below
//var app;

// add your routes and middleware below

// finally export the express application
module.exports = app;

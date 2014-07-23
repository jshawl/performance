var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Stat = require('./models/stat');

var app = express();
app.use( bodyParser() );
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/performance');
app.set('view engine', 'ejs');

app.get('/', function( req, res){
  Stat.find( function( err, stats){
    res.render('index', { stats: stats });
  });
});

app.get('/stats/new', function( req, res ){
  res.render('new' , {data: "hey"} );
});

app.get('/stats/:id', function( req, res){
  Stat.findById( req.params.id, function( err, stat){
    res.render('show', { stat: stat });
  });
});

app.post('/stats/delete', function( req, res){
  console.log( req.body );
  Stat.remove( {_id: req.body.id}, function( err, stat){
    if ( err ) console.log( err );
    res.json('Stat deleted!');
  });
});


app.post('/stats/new', function( req, res ){
  var stat = new Stat();  
  stat.name = req.body.name;
  stat.save( function (err){
    res.redirect('/');
  });
});

app.listen( 3000 );




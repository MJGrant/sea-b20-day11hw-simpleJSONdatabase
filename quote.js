//Simple JSON database app
//To use: 
//$ server.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');
app.use(bodyParser.json());

var quotes = [
  { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
  { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
  { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
  { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];

app.get('/', function(req, res) {
  res.json(quotes);
});

app.get('/quote/random', function(req, res) {
  var id = Math.floor(Math.random() * quotes.length);
  var q = quotes[id];
  res.json(q);
});

app.get('/quote/:id', function(req, res) {
  if(quotes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
  var q = quotes[req.params.id];
  res.json(q);
  //send back the data from the hard drive in the file some_name.json
});

app.post('/quote', function(req, res) {
  if(!req.body.hasOwnProperty('author') ||
    !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
  return res.send('Error 400: Post syntax incorrect.');
  }

  var newQuote = {
    author: req.body.author,
    text: req.body.text
  };

  quotes.push(newQuote);
  res.json(true);
});

app.delete('/quote/:id', function(req, res) {
  if(quotes.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }

  quotes.splice(req.params.id, 1);
  res.json(true);
});
/*
app.post('/:some_name', function(req, res) {
  console.log("posted a thing");
  //res.send({});
  //write a file to hard drive
  //called some_name.json with the json data that was recieved
});
*/

/*
var server = http.createServer(app);
server.listen(3000, function() {
  console.log('simple JSON database server runnning on port 3000');
});
*/
app.listen(process.env.PORT || 3000);
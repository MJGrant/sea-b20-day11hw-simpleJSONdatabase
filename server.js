//Simple JSON database app
//To use: 
//$ server.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.json({message: "welcome to my homework assignment!"});
});

app.post('/:some_name', function(req, res) {
  var input = req.params.some_name;
  var inputObj = {
    name: "input",
    content: input
  };
  var outputFilename = './output/' + input + ".json";
  fs.writeFile(outputFilename, JSON.stringify(inputObj, null, 4), function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + outputFilename);
      }
  });
});

app.get('/:some_name', function(req, res) {
  var file = __dirname + "/output/" + req.params.some_name + ".json";
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) console.log("error: " + err);
    data = JSON.parse(data);
    res.json(data);
    console.log("Retrieving JSON data from " + file + "...");
  });
});

app.listen(process.env.PORT || 3000);
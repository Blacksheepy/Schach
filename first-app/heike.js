var express = require('express');
var app = express();

const request = require('request');
var b = request('http://www.game-engineering.de:8080/rest/schach/spiel/admin/neuesSpiel/5', function(err, res, body) {
  //console.log(body);

  if(body.includes("Spiel erfolgreich erstellt")) {
    app.get('/', function (req, res) {
      res.send("Spiel wurde erfolgreich erstellt");
    });
  } else {
    app.get('/', function (req, res) {
      res.send("Fehlerrrrrr");
    });
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
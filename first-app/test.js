const request = require('request');
var parseString = require("xml2js").parseString;
var http = require('http'),
    fs = require('fs');

//Parse XML to JSON
var b =request('http://www.game-engineering.de:8080/rest/schach/spiel/admin', function(err, res, body) {
	parseString(body, (error, result) => {
	if (error) {
		console.log("ERRRROR: " + error);
		return;
	}
	console.log(JSON.stringify(result));
});
});

//Print a Chessboard
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});


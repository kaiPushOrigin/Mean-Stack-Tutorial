//server.js

var express = require('express'); //Add express.
var app = express(); // Express now ready to be used.  

app.use(express.static(__dirname + "/public")); //static - html, javascript and CSS file. Telling the server to look for static files

app.get('/contactList', function (req, res) {
	console.log("I received a GET request")
});

app.listen(3000);
console.log("Server running on port 3000");
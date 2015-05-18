//server.js

var express = require('express'); //Add express.
var app = express(); // Express now ready to be used.  

app.get('/', function(req, res) {  // '/' route to our index page
	res.send("Hello World from server.js");  //testing to make sure server is running currectly
});

app.listen(3000);
console.log("Server running on port 3000");
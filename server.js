//server.js

var express = require('express'); //Add express.
var app = express(); // Express now ready to be used.  

app.use(express.static(__dirname + "/public")); //static - html, javascript and CSS file. Telling the server to look for static files

app.get('/contactList', function (req, res) {
	console.log("I received a GET request")

	person1 = {
    	name: 'Tim',
    	email: 'tim@email1.com',
    	number: '(111) 111-1111'
    };

    person2 = {
    	name: 'Emily',
    	email: 'emily@email2.com',
    	number: '(222) 222-2222'
    };

    person3 = {
    	name: 'John',
    	email: 'john@email3.com',
    	number: '(333) 333-3333'
    };

    var contactList = [person1, person2, person3];
    res.json(contactList); 
});

app.listen(3000);
console.log("Server running on port 3000");
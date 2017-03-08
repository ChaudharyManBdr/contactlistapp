var express = require('express');
var app = express();

// app.get('/', function(req, res){
// 	res.send("Hello world from server.js")
// });

app.use(express.static(__dirname + "/public"));

app.get('/contactList', function(req, res){
	console.log('I received a GET reqeust')

	person1 = {
		name : 'Manab',
		email : 'manab@yahoo.com',
		number : '111-111-111'
	};

	person2 = {
		name : 'Puja',
		email : 'puja@yahoo.com',
		number : '222-222-222'
	};

	person3 = {
		name : 'Rita',
		email : 'Rita@yahoo.com',
		number : '333-333-333'
	};
	person4 = {
		name : 'Rita',
		email : 'Rita@yahoo.com',
		number : '444-333-333'
	};

	var contacts = [person1, person2, person3, person4];
	//$scope.contactList = contacts;
	res.json(contacts);
})

app.listen(3000);
console.log("Server running on port 3000");


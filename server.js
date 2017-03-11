var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('contactlist', ['users']);

var bodyParser = require('body-parser')

// app.get('/', function(req, res){
// 	res.send("Hello world from server.js")
// });

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactList/', function(req, res){
	console.log('I received a GET reqeust');
	db.users.find(function(err, docs){
		console.log(docs);
		res.json(docs);

	})	

})

app.post('/contactList/', function(req, res){
	console.log(req.body);
	db.users.insert(req.body, function(err, docs){
		res.json(docs);
	})
})

app.delete('/contactList/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.users.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})	
	
})

app.get('/contactList/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.users.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
 

})

app.put('/contactList/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.name);
	db.users.findAndModify({
		query: {
			_id: mongojs.ObjectId(id)
		},
		update: {
			$set : {
				name : req.body.name, 
				email: req.body.email, 
				number: req.body.number
			}
		},
		new: true }, function(err, doc){
			res.json(doc);
		})
})

app.listen(3000);
console.log("Server running on port 3000");





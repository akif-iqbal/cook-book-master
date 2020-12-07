var express = require("express"); // npm install express --save
var MongoClient = require("mongodb").MongoClient;
var router = express.Router();

router.use(upload.array());

router.get("/", function(req,res){
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('cookbook'); //use newdb;
		db.collection('users').find(req.query).toArray(function(err,objs){
			res.send(objs)
		});
	});
});

router.post("/", function(req,res){
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('cookbook');
		db.collection('users').insert(req.body,function(err,objs){
			res.send("Saved Successfully!!!")
		});
	});
})

module.exports = router;
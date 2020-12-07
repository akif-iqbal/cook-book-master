var express = require("express"); // npm install express --save
var MongoClient = require("mongodb").MongoClient;
var router = express.Router();
//Multer is a node.js middleware for handling multipart/form-data,
// which is primarily used for uploading files. 
var multer = require('multer'); // third party middleware module: npm install multer; 
var upload = multer();
router.use(upload.array())
//req.body

router.get("/bevmenu", function(req,res){
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('food_list');
		db.collection('beverage').find(req.query).toArray(function(err,objs){
			res.send(objs)
		});
	});
});

router.get("/starmenu", function(req,res){
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('food_list');
		db.collection('starters').find(req.query).toArray(function(err,objs){
			res.send(objs)
		});
	});
});

router.get("/salmenu", function(req,res){
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('food_list');
		db.collection('salad').find(req.query).toArray(function(err,objs){
			res.send(objs)
		});
	});
});

router.get("/mcmenu", function(req,res){
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('food_list');
		db.collection('main-course').find(req.query).toArray(function(err,objs){
			res.send(objs)
		});
	});
});

router.get("/desmenu", function(req,res){
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('food_list');
		db.collection('dessert').find(req.query).toArray(function(err,objs){
			res.send(objs)
		});
	});
});

module.exports = router;
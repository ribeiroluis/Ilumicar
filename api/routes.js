var mongo = require('./mongo.js');


module.exports = function (app) {	
	//res.sendStatus(200); // equivalent to res.status(200).send('OK')
	//res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
	//res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
	//res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')	
	app.post('/api/addProduct', function(req, res){
		var param = req.body;
		try {
			mongo.inserItem(param, "products", function () {
				res.sendStatus(200);
			});
		} catch (error) {
			res.status(500).send(error);
		}
	});	
	
	app.post('/api/addSupplier', function (req, res) {
		var param = req.body;
		try {
			mongo.inserItem(param, "suppliers", function () {
				res.sendStatus(200);
			});
		} catch (error) {
			res.status(500).send(error);
		}
	});
	app.post('/api/updateSupplier', function (req, res) {
		var param = req.body;
		try {
			mongo.updateSupplier(param, "suppliers", function () {
				res.sendStatus(200);
			});
		} catch (error) {
			res.status(500).send(error);
		}
	});
	app.get('/api/getSuppliersList', function (req, res) {
		try {
			mongo.getItensFromCollection("suppliers", function (docs) {				
				res.json(docs);
			});
		} catch (error) {
			res.status(500).send(error);
		}
	});
	app.get('/api/getProductsList', function(req, res){
		try {
			mongo.getItensFromCollection("products", function (docs) {				
				res.json(docs);
			});
		} catch (error) {
			res.status(500).send(error);
		}
	});
}
	// 	app.get('/api/getProductsList', function (req, res) {
	// 		console.log("request productList. Total products: " + productList.length);
	// 		res.json(productList);
	// 	});
	// 	app.get('/api/user', function (req, res) {
	// 		console.log(req.body);
	// 		console.log("get/user: " + new Date().toUTCString());
	// 		var user = { name: "user", id: 1234 }
	// 		res.json(user);// 
	// 	});
	// 	app.get('/api/product', function (req, res) {
	// 		console.log(req.body);
	// 		console.log("get/product: " + new Date().toUTCString());
	// 		var user = { name: "product", id: 1234 }
	// 		res.json(user);// 
	// 	});
	// 	app.get('/api/client', function (req, res) {
	// 		console.log(req.body);
	// 		console.log("get/client: " + new Date().toUTCString());
	// 		var user = { name: "client", id: 1234 }
	// 		res.json(user);// 
	// 	});
	// 	app.post('/api/user/:param', function (req, res) {
	// 		console.log(req.params.param);
	// 		console.log("/user: " + new Date().toUTCString());
	// 		req.params.param.type = "user";
	// 		res.json(req.params.param);// 
	// 	});
	// 	app.post('/api/client/:param', function (req, res) {
	// 		console.log("/client: " + new Date().toUTCString());
	// 		req.params.param.type = "client";
	// 		console.log(req.params.param);
	// 		//res.json(req.params.param);
	// 		res.download('/temp.txt');
	// 	});

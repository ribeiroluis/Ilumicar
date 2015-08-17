module.exports = function(app) {
	//res.sendStatus(200); // equivalent to res.status(200).send('OK')
	//res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
	//res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
	//res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
	
	var supplierList = [];
	var productList = [];
	app.get('/api/getSuppliersList', function(req, res) {
		 supplierList = [];		
		var totalSuppliers = Math.round(Math.random()*100);
		for (var index = 0; index < totalSuppliers; index++) {
			var element = {name: "Fornecedor_" + index, id :index};
			supplierList.push(element);
		}	
		console.log("request supplierList")
		res.json(supplierList);
	});
	app.get('/api/getProductsList', function(req,res){
		productList = [];
		console.log(supplierList);		
		for (var i = 0; i < supplierList.length; i++) {
			var totalProducts = Math.round(Math.random()*100);
			for (var index = 0; index < totalProducts; index++) {				
				var product = {
					id: parseInt(i.toString() + index.toString()),
					name: "Produto_" + i+index,
					supplierId: i,
					QtdInStock: Math.round(Math.random()*100),
					order: undefined
					};
				productList.push(product);	
					
			}
		}
		console.log("request productList")
		res.json(productList);		
	});
	
	
	
	
	app.get('/api/user', function(req, res) {
		console.log(req.body);
		console.log("get/user: " + new Date().toUTCString());
		var user = {name: "user", id :1234}
		res.json(user);
		
	});
	app.get('/api/product', function(req, res) {
		console.log(req.body);
		console.log("get/product: " + new Date().toUTCString());
		var user = {name: "product", id :1234}
		res.json(user);
		
	});
	app.get('/api/client', function(req, res) {
		console.log(req.body);
		console.log("get/client: " + new Date().toUTCString());
		var user = {name: "client", id :1234}
		res.json(user);
		
	});
	app.post('/api/user/:param', function(req, res) {
		console.log(req.params.param);
		console.log("/user: " + new Date().toUTCString());
		req.params.param.type = "user";		
		res.json(req.params.param);
			
	});
	app.post('/api/client/:param', function(req, res) {
		console.log("/client: " + new Date().toUTCString());
		req.params.param.type = "client";		
		console.log(req.params.param);
		//res.json(req.params.param);
		res.download('/temp.txt');
		
			
	});
};
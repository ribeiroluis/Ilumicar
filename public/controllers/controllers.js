var Product = function () {
  this.product = {
    _id: undefined,
    cod: undefined,
    name: undefined,    
    QtdInStock: undefined,
    priceBuy: undefined,
    priceSale: undefined,    
  };
  this.productsList = [];

  this.setProduct = function (product) {
    this.product = product;
  };

  this.getProduct = function (product) {
    return this.product;
  };
  this.getListProducts = function (data) {
    return this.productList;
  }
};





//Supplier
var Supplier = function (scope, http) {
  this.supplier = {
    _id: undefined,
    name: undefined,
    cnpj: undefined,
    cpf: undefined,
    phone: undefined
  }
  this.suppliersList = [];

  this.getSupplier = function (supplier) {
    return this.supplier;
  }
  this.getSupplierList = function (callback) {
    http.get('api/getSuppliersList')
			.success(function (data) {
				scope.Supplier.suppliersList = data;				
				if (callback) {
					callback();
				}
			})
			.error(function (data) {
				console.log('Error: ' + data);
			});
  }
  this.updateSupplier = function(value, callback){
    http.post('api/updateSupplier', value)
			.success(function (data) {
				console.info(data);
        if (callback) {
					callback();
				}				
			})
			.error(function (data) {
				console.error(data);
			});
    
  }
  this.addSupplier = function(value, callback){
    http.post('api/addSupplier', value)
			.success(function (data) {
				console.info(data);
        if (callback) {
					callback();
				}				
			})
			.error(function (data) {
				console.error(data);
			});
  }
};


var Employee = function () {

};

var Order = function () {
  this.order = {
    orderNumber: undefined,
    date: undefined,
    value: undefined,
    products: Product().productList
  }
}

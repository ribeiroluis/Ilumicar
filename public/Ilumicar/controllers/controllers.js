var _http = undefined;

var Product = {
  _object: {
    _id: undefined,
    cod: undefined,
    name: undefined,
    qtdInStock: undefined,
    priceBuy: undefined,
    priceSale: undefined
  },
  productsList: [],
  setProduct: function (product) {
    Product._id = product.id;
    Product.cod = product.cod,
    Product.name = product.name,
    Product.qtdInStock = product.QtdInStock,
    Product.priceBuy = product.priceBuy,
    Product.priceSale = product.priceSale
  },
  getProductList: function (callback) {
    _http.get('../api/getProductsList')
      .success(function (data) {
        Product.productsList = data;
        if (callback) {
          callback(data);
        }
      })
      .error(function (data) {
        console.error(data);
      });
  },
  addProduct: function (value, callback) {
    _http.post('../api/addProduct', value)
      .success(function (data) {
        console.info(data);
        if (callback) {
          callback(data);
        }
      })
      .error(function (data) {
        console.error(data);
      });
  }
};


//Supplier
var Supplier = {
  _object: {
    _id: undefined,
    name: undefined,
    cnpj: undefined,
    cpf: undefined,
    phone: undefined
  },
  suppliersList: [],
  setSupplier: function(object){
    Supplier._object = object;        
  },  
  getSupplier: function (id) {
    return Supplier._object;
  },
  getSupplierList: function (callback) {
    _http.get('../api/getSuppliersList')
      .success(function (data) {
        Supplier.suppliersList = data;
        if (callback) {
          callback(data);
        }
      })
      .error(function (data) {
        console.error(data);
      });
  },
  updateSupplier: function (value, callback) {
    _http.post('../api/updateSupplier', value)
      .success(function (data) {
        console.info(data);
        if (callback) {
          callback(data);
        }
      })
      .error(function (data) {
        console.error(data);
      });
  },
  addSupplier: function (value, callback) {
    _http.post('../api/addSupplier', value)
      .success(function (data) {
        console.info(data);
        if (callback) {
          callback(data);
        }
      })
      .error(function (data) {
        console.error(data);
      });
  }
};


var Employee = {
};

var Order = {
  _object: {
    orderNumber: undefined,
    date: undefined,
    value: undefined,
    supplierOrder: undefined,
    productsInOrder : []
  },
  setOrder: function(object){
    Order._object = object;        
  },
  
}



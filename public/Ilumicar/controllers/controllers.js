

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
var Supplier = {
  http: undefined,
  supplier: {
    _id: undefined,
    name: undefined,
    cnpj: undefined,
    cpf: undefined,
    phone: undefined
  },
  suppliersList: [],
  getSupplier: function (supplier) {
    return this.supplier;
  },
  getSupplierList: function (callback) {
    $.ajax({
      url: "../api/getSuppliersList",
      dataType: "json",
      success: function (data) {
        Supplier.suppliersList = data;
        if (callback) {
          callback();
        }
      },
      error: function (data) {
        console.log('Error: ' + data);
      }
    });


    Supplier.http.get('../api/getSuppliersList')
      .success(function (data) {
        Supplier.suppliersList = data;
        if (callback) {
          callback();
        }
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
  },
  updateSupplier: function (value, callback) {
    Supplier.http.post('../api/updateSupplier', value)
      .success(function (data) {
        console.info(data);
        if (callback) {
          callback();
        }
      })
      .error(function (data) {
        console.error(data);
      });
  },
  addSupplier: function (value, callback) {
    Supplier.http.post('../api/addSupplier', value)
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

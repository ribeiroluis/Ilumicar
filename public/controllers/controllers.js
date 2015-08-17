var Product = function () {
  this.product = {
    id: undefined,
    name: undefined,
    supplierId: undefined,
    QtdInStock: undefined,
    order: undefined
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
var Supplier = function () {
  this.supplier = {
    id: undefined,
    name: undefined,
    cnpj: undefined,
    cpf: undefined,
    tel: undefined
  }
  this.suppliersList = [];

  this.getSupplier = function (supplier) {
    return this.supplier;
  }
  this.getSupplierList = function () {
  }
};


var Employee = function () {

};

var Order = function () {

}

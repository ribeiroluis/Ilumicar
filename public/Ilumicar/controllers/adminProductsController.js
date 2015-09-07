window.app.controller("adminProductsController", function ($scope, $http) {
    "use strict",   
    
    $scope.title = "Cadastrar produtos";
    $scope.showProducts = false;
    $scope._supplierList = [];
    $scope.modalTitle = "Produtos Cadastrados";
    
    var _order;

    $scope.setSupplier = function () {
        $scope._order.date = new Date();
        $scope._order._supplier = $scope._supplier;
        _order = $scope._order;
        _order._productsList = [];
        $scope.showProducts = true;
        btnConfirmSupplier.attr('disabled', 'disabled');
        supplierList.attr('disabled', 'disabled');
        orderNumber.attr('disabled', 'disabled');
        btnCancelSupplier.removeAttr('disabled');        
    }
    $scope.cancelSupplier = function () {        
        _order = undefined;        
        $scope.showProducts = false;
        btnCancelSupplier.attr('disabled', 'disabled');
        btnConfirmSupplier.removeAttr('disabled');
        orderNumber.removeAttr('disabled');
        supplierList.removeAttr('disabled');
    }
    $scope.addProduct = function(object){
        _order._productsList.push(object);        
        console.debug(object);
    }
    
        
    function getSupplierList() {
        Supplier.getSupplierList(function () {
            $scope._supplierList = Supplier.suppliersList;
            setTimeout(function () {
                supplierList.val(0);
                updateTable();
            }, 0);
        });
    }   
    function updateTable() {
        productsTable.destroy();
        $('#tableProducts').empty();
        productsTable = $('#tableProducts').DataTable({
            data: Supplier.suppliersList,
            columns: [
                { data: 'cnpj', title: "CNPJ" },
                { data: 'name', title: "Nome" },
                { data: 'phone', title: "Telefone" }
            ]
        });
        $('#tableProducts tbody').on('click', 'tr', function () {
            console.info(productsTable.row(this).data());  
            $('#myModal').modal('hide');          
            //$scope.supplier = supplierTable.row(this).data();
            //$scope.$apply();
        });
    }
    
    var productsTable = $('#tableProducts').DataTable({
        data: [],
        columns: [
            { data: 'cnpj', title: "CNPJ" },
            { data: 'name', title: "Nome" },
            { data: 'phone', title: "Telefone" }
        ]
    });    
    
    var btnConfirmSupplier = $("#btnConfirmSupplier");
    var btnCancelSupplier = $("#btnCancelSupplier");
    var supplierList = $("#supplierList");
    var orderNumber = $("#orderNumber");
    var productNameInput = $("#productNameInput");
    var data = [];
    for (var index = 0; index < 50; index++) {
        var s = ("Nome_" + index);
        data.push({label: s, value: s, id: index});
    }
    productNameInput.autocomplete({
      source: data,
      select: function( event, ui ) {
          debugger;
      }
    });    
    getSupplierList();    
    
});
window.app.controller("adminProductsController", function ($scope, $http) {
    "use strict",
    $scope.title = "Cadastrar produtos";
    $scope.showProducts = false;
    

    $scope.setSupplier = function () {
        if ($scope.data == undefined || $scope.data.supplier == undefined || $scope.data.orderNumber == undefined) {
            selectSupplier.focus();
            return;
        }
        viewProductsBySupplier($scope.data.supplier.id);
        $scope.showProducts = true;
        inputOrderNumber.attr('disabled', 'disabled');
        selectSupplier.attr('disabled', 'disabled');
        btnConfirmSupplier.attr('disabled', 'disabled');
        btnCancelSupplier.removeAttr('disabled');
        console.log($scope.data);
    }
    $scope.cancelSupplier = function () {
        $scope.showProducts = false;
        inputOrderNumber.removeAttr('disabled', '');
        selectSupplier.removeAttr('disabled', '');
        btnConfirmSupplier.removeAttr('disabled');
        btnCancelSupplier.attr('disabled', 'disabled');
    }

    var viewProductsBySupplier = function (supplierId) {        
        debugger;
        var data = [];
        
        var _data = $scope.Product.productsList.filter(function(value){
            if(value.supplierId == supplierId){
                return value;
            }            
        });
        
        _data.forEach(function (e) {
            var _data = [];
            _data.push(e.id);
            _data.push(e.name);
            _data.push(e.supplierId);
            _data.push(e.QtdInStock);
            data.push(_data);
        });
        tableProducts.DataTable({
            data: data,
            columns: [
                { title: "id" },
                { title: "name" },
                { title: "supplierId" },
                { title: "QtdInStock" }
            ]
        });
    }


    var selectSupplier = $("#supplierList");
    var inputOrderNumber = $("#orderNumber");
    var btnCancelSupplier = $("#btnCancelSupplier");
    var btnConfirmSupplier = $("#btnConfirmSupplier");
    var tableProducts = $("#productsList");
});

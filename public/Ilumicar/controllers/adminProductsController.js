window.app.controller("adminProductsController", function ($scope, $http) {
    "use strict",
    $scope.title = "Cadastrar produtos";
    $scope.showProducts = false;
    $scope._supplierList = [];
    
    function getSupplierList (){
        Supplier.getSupplierList(function(){
            $scope._supplierList = Supplier.suppliersList;
            //$scope.$apply();
        });        
    }
    getSupplierList();
    
    


    // $scope.setSupplier = function () {
    //     if ($scope.data == undefined || $scope.data.supplier == undefined || $scope.data.orderNumber == undefined) {
    //         selectSupplier.focus();
    //         return;
    //     }
    //     
    //     $scope.showProducts = true;
    //     inputOrderNumber.attr('disabled', 'disabled');
    //     selectSupplier.attr('disabled', 'disabled');
    //     btnConfirmSupplier.attr('disabled', 'disabled');
    //     btnCancelSupplier.removeAttr('disabled');
    //     
    //     $scope.gridOptions.data = $scope.Product.productsList
    //     tableProducts.DataTable();
    //     console.log($scope.data);
    // }
    // $scope.cancelSupplier = function () {
    //     $scope.showProducts = false;
    //     inputOrderNumber.removeAttr('disabled', '');
    //     selectSupplier.removeAttr('disabled', '');
    //     btnConfirmSupplier.removeAttr('disabled');
    //     btnCancelSupplier.attr('disabled', 'disabled');
    // }
    // 
    // $scope.setProduct = function($event, value){
    //     // $($event.currentTarget.parentNode.children).removeClass('active');
    //     // $($event.currentTarget).toggleClass('active');
    //     $scope.Product.product = value;
    //     console.log($event);
    //     console.log(value);
    // }  

    

    var selectSupplier = $("#supplierList");
    var inputOrderNumber = $("#orderNumber");
    var btnCancelSupplier = $("#btnCancelSupplier");
    var btnConfirmSupplier = $("#btnConfirmSupplier");
    var tableProducts = $("#productsList");    
});

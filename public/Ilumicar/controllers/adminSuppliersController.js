window.app.controller("adminSuppliersController", function ($scope, $http) {
    "use strict",
    $scope.title = "Gerenciar Fornecedores";          
    var updateTable = function () {
        supplierTable.destroy();
        $('#tableSupplier').empty();
        supplierTable = $('#tableSupplier').DataTable({
            data: Supplier.suppliersList,
            columns: [
                { data: 'cnpj', title: "CNPJ" },
                { data: 'name', title: "Nome" },
                { data: 'phone', title: "Telefone" }
            ]
        });
        $('#tableSupplier tbody').on('click', 'tr', function () {            
            $scope.supplier = supplierTable.row(this).data();
            $scope.$apply();

        });
    }
    $scope.clearSupplier = function(){
        $scope.supplier = undefined;        
    }
    $scope.saveSupplier = function () {
        if ($scope.supplier._id == undefined) {
            Supplier.addSupplier($scope.supplier, getData);
        } else {
            Supplier.updateSupplier($scope.supplier, getData);
        }
        $scope.supplier = undefined;
    }
    var supplierTable = $('#tableSupplier').DataTable({
        data: [],
        columns: [
            { data: 'cnpj', title: "CNPJ" },
            { data: 'name', title: "Nome" },
            { data: 'phone', title: "Telefone" }
        ]
    });
    function getData (){
        Supplier.getSupplierList(updateTable);
    }
    getData();
    
    
    //InsertTest
    // var count = 993;
    // 
    // setInterval(function(){
    //     $scope.supplier = {};
    //     $scope.supplier.name = "Fornecedor__" + count;
    //     $scope.supplier.cnpj = count + "0" + count + "0" +count + "0" +count + "0";
    //     $scope.supplier.phone = count + "1" + count + "1" +count + "0" +count + "1";
    //     $scope.saveSupplier();
    //     count++;
    // },5000);
});

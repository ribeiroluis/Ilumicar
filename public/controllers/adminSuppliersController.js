window.app.controller("adminSuppliersController", function ($scope, $http) {
    "use strict",
    $scope.title = "Gerenciar Fornecedores";

    var updateTable = function () {
        supplierTable.destroy();
        $('#tableSupplier').empty();
        supplierTable = $('#tableSupplier').DataTable({
            data: $scope.Supplier.suppliersList,
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

    $scope.saveSupplier = function () {
        if ($scope.supplier.id == undefined) {
            $scope.Supplier.addSupplier($scope.supplier, getData);
        } else {
            $scope.Supplier.updateSupplier($scope.supplier, getData);
        }
        $scope.supplier = undefined;
    }

    $scope.Supplier = new Supplier($scope, $http);
    var supplierTable = $('#tableSupplier').DataTable({
        data: [],
        columns: [
            { data: 'cnpj', title: "CNPJ" },
            { data: 'name', title: "Nome" },
            { data: 'phone', title: "Telefone" }
        ]
    });
    function getData (){
        $scope.Supplier.getSupplierList(updateTable);
    }
    getData();
});

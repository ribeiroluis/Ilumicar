window.app.controller("adminProductsController", function ($scope, $http) {
    "use strict",

    $scope.title = "Cadastrar produtos";
    $scope.showProducts = false;
    $scope._supplierList = [];
    $scope.modalTitle = "Produtos Cadastrados";

    var _order;

    $scope.setSupplier = function () {
        if (!$scope._supplier) {
            supplierListSelect.focus();
            $scope.cancelSupplier();
            return;
        }
        $scope._order.date = new Date();
        $scope._order._supplier = $scope._supplier;
        _order = $scope._order;
        _order._productsList = [];
        $scope.showProducts = true;
        btnConfirmSupplier.attr('disabled', 'disabled');
        supplierListSelect.attr('disabled', 'disabled');
        inputOrderNumber.attr('disabled', 'disabled');
        btnCancelSupplier.removeAttr('disabled');
    }
    $scope.cancelSupplier = function () {
        _order = undefined;
        $scope.showProducts = false;
        btnCancelSupplier.attr('disabled', 'disabled');
        btnConfirmSupplier.removeAttr('disabled');
        inputOrderNumber.removeAttr('disabled');
        supplierListSelect.removeAttr('disabled');
    }
    $scope.searchProductByCode = function ($event) {
        if ($event.keyCode !== 13)
            return;

        var _product = _.find(Product.productsList, { cod: eval($scope._product.cod) });
        if (_product) {
            $scope._product = _product;
        }
    }




    $scope.addProduct = function () {
        _order._productsList.push($scope._product);
        console.debug(object);
    }


    function getSupplierList() {
        Supplier.getSupplierList(function () {
            $scope._supplierList = Supplier.suppliersList;
            setTimeout(function () {
                supplierListSelect.val(0);
            }, 0);
        });
    }
    function getProductList() {
        Product.getProductList(function (data) {
            updateModalProductsTable();
            var names = [];
            for (i in data) {
                names.push(data[i].name);
            }
            productNameInput.autocomplete({
                source: names,
                select: function (event, ui) {
                    debugger;
                    var _product = _.find(Product.productsList, { name: ui.item.value });
                    if (_product) {
                        $scope._product = _product;
                        $scope.$apply();
                    }
                }
            });
        });


    }
    function updateModalProductsTable() {
        modalProductsTable.destroy();
        $('#genericTable').empty();
        modalProductsTable = $('#genericTable').DataTable({
            data: Product.productsList,
            columns: [
                { data: 'cod', title: "Código" },
                { data: 'name', title: "Nome" },
                { data: 'qtdInStock', title: "Estoque" },
                { data: 'priceBuy', title: "Preço compra" },
                { data: 'priceSale', title: "Preço venda" }
            ]
        });
        $('#genericTable tbody').on('click', 'tr', function () {
            var _product = modalProductsTable.row(this).data(); 
            $scope._product = _product;
            $('#myModal').modal('hide');
            $scope.$apply();
            console.info(_product);          
            //$scope.supplier = supplierTable.row(this).data();
            //$scope.$apply();
        });
    }










    var btnConfirmSupplier = $("#btnConfirmSupplier");
    var btnCancelSupplier = $("#btnCancelSupplier");
    var supplierListSelect = $("#supplierListSelect");
    var inputOrderNumber = $("#orderNumberInput");
    var productNameInput = $("#productNameInput");
    var btnCancelProduct = $("#btnCancelProduct");
    var btnAddProduct = $("#btnAddProduct");
    var modalProductsTable = $('#genericTable').DataTable({
        data: [],
        columns: [
            { data: 'cod', title: "Código" },
            { data: 'name', title: "Nome" },
            { data: 'qtdInStock', title: "Estoque" },
            { data: 'priceBuy', title: "Preço compra" },
            { data: 'priceSale', title: "Preço venda" }
        ]
    });
    getSupplierList();
    getProductList();

});
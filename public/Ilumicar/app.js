
var app = angular.module('ilumicar', ['ngResource', 'ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/sales', {
        templateUrl: 'views/sales.html',
        controller: 'salesController'
    }).when('/products', {
        templateUrl: 'views/products.html',
        controller: 'productsController'
    }).when('/adminUsers', {
        templateUrl: 'views/adminUsers.html',
        controller: 'adminUsersController'
    }).when('/adminProducts', {
        templateUrl: 'views/adminProducts.html',
        controller: 'adminProductsController'
     }).when('/adminSuppliers', {
        templateUrl: 'views/adminSuppliers.html',
        controller: 'adminSuppliersController'
    })//.otherwise({
    //     templateUrl: 'tmpl/login.html',
    //     controller: 'loginController'
    // });
    .otherwise({
    		redirectTo : '/sales'
    	});
});
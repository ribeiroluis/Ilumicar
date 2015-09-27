
var app = angular.module('ilumicar', ['ngResource', 'ngRoute'])
    .factory('$exceptionHandler', function () {
        return function errorCatcherHandler(exception, cause) {
            $("#messageDialog").find('p').text(exception.message);
            $("#messageDialog").show(200);
            //console.error(exception.stack);            
        };
    })
    .factory('errorHttpInterceptor', ['$q', function ($q) {
        return {
            responseError: function responseError(rejection) {
                //console.error(exception.stack);                
                return $q.reject(rejection);
            }
        };
    }])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('errorHttpInterceptor');
    }]);

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
            redirectTo: '/sales'
        });
});
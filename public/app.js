
var app = angular.module('ilumicar', ['ngResource', 'ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    }).when('/report', {
        templateUrl: 'views/report.html',
        controller: 'reportController'
   })//.otherwise({
    //     templateUrl: 'tmpl/login.html',
    //     controller: 'loginController'
    // });
    .otherwise({
    		redirectTo : '/home'
    	});
});
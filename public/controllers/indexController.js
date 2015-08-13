/// <reference path="../js/jquery-1.11.2.min.js" />

window.app.controller("indexController", function ($scope, $http) {
	"use strict",

	$scope.headerSrc = "tmpl/header.html";
	$scope.sideBarSrc = "tmpl/sideBar.html";
	$scope.footerSrc = "tmpl/footer.html";
	$scope.loadingTmp = "tmpl/loading.html";
	$scope.appTitle = "Ilumicar";
	$scope.isAuth = false;
	
	$scope.product = new Product();
	$scope.product.set({name: "acendedor"});
	console.log($scope.product.get());
	
	

	$scope.selectMenuItem = function (value) {
		$(value.currentTarget).siblings('.active').toggleClass('active');
	}

	$http.get('/user')
		.success(function (data) {
			console.info(data);
		})
		.error(function (data) {
			console.log('Error: ' + data);
		});
	$http.get('/product')
		.success(function (data) {
			console.info(data);
		})
		.error(function (data) {
			console.log('Error: ' + data);
		});
	$http.get('/client')
		.success(function (data) {
			console.info(data);
		})
		.error(function (data) {
			console.log('Error: ' + data);
		});
	$http.post('/user/' + $scope.appTitle)
		.success(function (data) {
			console.info(data);
		})
		.error(function (data) {
			console.log('Error: ' + data);
		});
	$http.post('/client/' + $scope.appTitle)
		.success(function (data) {
			console.info(data);
		})
		.error(function (data) {
			console.log('Error: ' + data);
		});

	$scope.checkAuth = function () {
		if ($scope.isAuth)
			return true;
	}
});
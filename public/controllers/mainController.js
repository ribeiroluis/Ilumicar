/// <reference path="../js/jquery-1.11.2.min.js" />
/// <reference path="../controllers/controllers.js" />

window.app.controller("mainController", function ($scope, $http) {
	"use strict",

	$scope.appTitle = "Ilumicar";
	$scope.sideBarSrc = "tmpl/sideBar.html";
	$scope.loadingTmp = "tmpl/loading.html";
	
	$scope.Supplier = new Supplier();
	$scope.Product = new Product();	
	
	
	$scope.getSuppliersList = function(){
		$http.get('api/getSuppliersList')
		.success(function (data) {
			$scope.Supplier.suppliersList = data;
			$scope.getProductsList();
		})
		.error(function (data) {
			console.log('Error: ' + data);
		});		
	}();
	
	$scope.getProductsList = function(){
		$http.get('api/getProductsList')
		.success(function (data) {
			$scope.Product.productsList = data;
		})
		.error(function (data) {
			console.log('Error: ' + data);
		});		
	}	



	
	

	// $scope.selectMenuItem = function (value) {
	// 	$(value.currentTarget).siblings('.active').toggleClass('active');
	// }
	// $http.get('api/user')
	// 	.success(function (data) {
	// 		console.info(data);
	// 	})
	// 	.error(function (data) {
	// 		console.log('Error: ' + data);
	// 	});
	// $http.get('api/product')
	// 	.success(function (data) {
	// 		console.info(data);
	// 	})
	// 	.error(function (data) {
	// 		console.log('Error: ' + data);
	// 	});
	// $http.get('api/client')
	// 	.success(function (data) {
	// 		console.info(data);
	// 	})
	// 	.error(function (data) {
	// 		console.log('Error: ' + data);
	// 	});
	// $http.post('api/user/' + $scope.appTitle)
	// 	.success(function (data) {
	// 		console.info(data);
	// 	})
	// 	.error(function (data) {
	// 		console.log('Error: ' + data);
	// 	});
	// $http.post('api/client/' + $scope.appTitle)
	// 	.success(function (data) {
	// 		console.info(data);
	// 	})
	// 	.error(function (data) {
	// 		console.log('Error: ' + data);
	// 	});
	// 	$scope.checkAuth = function () {
	// 		if ($scope.isAuth)
	// 			return true;
	// 	}
});
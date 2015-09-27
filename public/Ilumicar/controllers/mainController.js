/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="controllers.js" />

window.app.controller("mainController", function ($scope, $http) {
	"use strict",

	$scope.appTitle = "Ilumicar";
	$scope.sideBarSrc = "tmpl/sideBar.html";
	$scope.simpleSideBarSrc = "tmpl/simple-sideBar.html";
	$scope.loadingTmp = "tmpl/loading.html";
	$scope.modalTmp = "tmpl/modal.html";
	_http = $http;
	setTimeout(function () {
		_loadingTmp = $('.loading-container');
	}, 50);

});
  

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

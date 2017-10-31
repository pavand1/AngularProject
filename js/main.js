
console.log("main.js loaded");
(function() {
	"use script";
	console.log("function called");
	angular.module("myFirstApp", [])
	.controller("myController", function($scope){
		console.log("controller is bound to the view");
		$scope.name = "Pavan";
	});
})();
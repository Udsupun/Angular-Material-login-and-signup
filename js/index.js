var myApp = angular.module("myApp", []);
myApp.controller("RegisterCtrl", function ($scope) {
	$scope.cancel = function(){
       window.location = "./main.html";
 }
});
myApp.controller("LoginCtrl", function ($scope) {
	$scope.cancel = function(){
       window.location = "./main.html";
 }
});
myApp.controller("MainCtrl", function ($scope) {
	$scope.signup = function(){
       window.location = "./signup.html";
 }
 $scope.login = function(){
       window.location = "./login.html";
 }
});
 
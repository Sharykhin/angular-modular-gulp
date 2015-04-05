'use strict';
         
var App = angular.module('App',['User']);


angular.module('App').controller('ForumController',['$scope',function($scope){

	$scope.name='Forum 2000';

}]);
var UserModule = angular.module('User',[]);
UserModule.controller('UserController',['$scope',function($scope){

	$scope.name='John';

}]);
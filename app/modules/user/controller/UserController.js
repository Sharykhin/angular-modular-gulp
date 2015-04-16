
UserModule.controller('UserController',['$scope','sayHello',function($scope,sayHello){

	$scope.name='John';
	sayHello.SayHello($scope.name);

}]);
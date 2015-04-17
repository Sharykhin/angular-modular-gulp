APP.UserModule.controller(APP.UserModule.name + '.UserController',['$scope','sayHello',function($scope,sayHello){

	$scope.name='John';
	sayHello.SayHello($scope.name);
	console.log(APP.UserModule.name);

}]);
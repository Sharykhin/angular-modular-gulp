APP.MainModule.config(function($stateProvider, $urlRouterProvider) { 
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "views/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "views/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "views/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "views/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    })
    .state('users',{
        url: "/users",
        templateUrl: "modules/user/views/user.html",
        controller: 'UserController'
    })
    .state('forum',{
      url: "/forum",
      templateUrl: "modules/forum/views/forum.html",
      controller: 'User.DefaultController'
    });
});
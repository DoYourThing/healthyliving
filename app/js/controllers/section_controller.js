angular.module("app").controller('SectionController', function($scope, $location, ProgressTracker) {
 
  console.log('ProgressTracker.getCurrentPillar(): '+ProgressTracker.getCurrentPillar());
  var onLogoutSuccess = function(response) {
    $scope.goto('/login');
  };

  $scope.next = function() {
    
  }; 
  
  $scope.back = function(path) {
  	// TODO - ignore path, be dynamic  	
  	$scope.goto(path);
  };

  $scope.yes = function(path) {
  	// TODO - ignore path, be dynamic  	
  	$scope.goto(path);
  };

  $scope.no = function(path) {
  	// TODO - ignore path, be dynamic  	
  	$scope.goto(path);
  };
  
  $scope.home = function() {
  	$scope.goto('/home');
  };

  $scope.completed = function() {
    ProgressTracker.pillarComplete();    
    $scope.goto('/home');
  };
  
  $scope.failed = function() {
    // failed param
    ProgressTracker.pillarComplete(true);    
    $scope.goto('/home');
  };

  $scope.goto = function(path) {
    console.log('GOTO: '+ProgressTracker.getCurrentPillar());
    //TODO - manage history - might take a refactor
  	$location.path(path);
  };
});

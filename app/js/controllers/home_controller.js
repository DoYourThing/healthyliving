angular.module("app").controller('HomeController', function($scope, $location, ProgressTracker) {
  $scope.title = "Home";
  $scope.message = "Mouse Over these images to see a directive at work";
  
  var onLogoutSuccess = function(response) {
    $location.path('/login');
  };

  $scope.pillars = ProgressTracker.getPillars();
  $scope.isPillarActive = ProgressTracker.isPillarActive;
  
  $scope.percentComplete = ProgressTracker.getPercentComplete();

  $scope.fgWidth = {width:$scope.percentComplete+'%'};
  $scope.percentageLeft = {left:'calc('+$scope.percentComplete+'% + 5px)'};

  $scope.currentPillarID = $scope.pillars.current;
  
  $scope.gotoPillar = function(pillarID) {
  	
    if(ProgressTracker.isPillarActive(pillarID))
    {
      ProgressTracker.setCurrentPillar(pillarID);
      $location.path(pillarID);
    }
  	
  };

  console.log('HOME CNTRL CURRENT PILLAR: '+$scope.pillars);

  $scope.logout = function() {
    AuthenticationService.logout().success(onLogoutSuccess);
  };
});

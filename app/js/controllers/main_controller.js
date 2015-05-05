angular.module("app").controller('MainController', function($scope, $location, ProgressTracker, preloader) {
 
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
    // console.log('GOTO: '+ProgressTracker.getCurrentPillar());
    window.scrollTo(0, 0);
    if (document.activeElement !== document.body) {
      document.activeElement.blur();
    }
    //TODO - manage history - might take a refactor
  	$location.path(path);
  };

  // setting variables
  $scope.pillars = ProgressTracker.getPillars();
  $scope.isPillarActive = ProgressTracker.isPillarActive;
  $scope.percentComplete = ProgressTracker.getPercentComplete();
  // if the percent is in the 90s we round down because the text will overlap out of the bar
  var perWidth = $scope.percentComplete > 90 && $scope.percentComplete < 100 ? 90 : $scope.percentComplete;
  $scope.fgWidth = {width:perWidth+'%'};
  $scope.percentageLeft = {left:'calc('+perWidth+'% + 5px)'};
  $scope.grade = ProgressTracker.getGrade($scope.percentComplete);
  $scope.gradeClass = $scope.grade.split('+').join('plus').split('-').join('minus');
  $scope.currentPillarID = $scope.pillars.current;
  $scope.showFinish = ProgressTracker.hasCompletedAllPillars();

  // I keep track of the state of the loading images.
  $scope.isLoading = true;
  $scope.isSuccessful = false;
  $scope.percentLoaded = 0;
  
  //iphone button fix attempt;
  setTimeout(function(){
    $('.circle').blur();
    $('#wrap').focus();
  }, 500);
  
  // remove loading class, attempt at "preload"
  setTimeout(function(){$('#wrap').removeClass('loading');}, 1000);

  // I am the image SRC values to preload and display./
  // --
  // NOTE: "cache" attribute is to prevent images from caching in the
  // browser (for the sake of the demo).
  
  $scope.imageLocations = window.isMobile() ? preloader.sharedImages.concat(preloader.mobileImages) : preloader.sharedImages.concat(preloader.desktopImages);


  $scope.gotoPillar = function(pillarID) {
    
    if(ProgressTracker.canGotoPillar(pillarID))
    {
      ProgressTracker.setCurrentPillar(pillarID);
      $location.path(pillarID);
    }
    
  };

  $scope.startOver = function() {
    location.reload(); // good enough for now
  };

  // Preload the images; then, update display when returned.
  preloader.preloadImages( $scope.imageLocations ).then(
    function handleResolve( imageLocations ) {

      // Loading was successful.
      $scope.isLoading = false;
      $scope.isSuccessful = true;

      console.info( "Preload Successful" );

    },
    function handleReject( imageLocation ) {

      // Loading failed on at least one image.
      $scope.isLoading = false;
      $scope.isSuccessful = false;

      console.error( "Image Failed", imageLocation );
      console.info( "Preload Failure" );

    },
    function handleNotify( event ) {

      $scope.percentLoaded = event.percent;

      console.info( "Percent loaded:", event.percent );

    }

  );

});

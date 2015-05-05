angular.module("app").controller('QuizController', function($scope, $location, $state, QuizTracker) {
  $scope.questions = ['Do you try to do as much as possible in the least amount of time?',
                      'Do you become impatient with delays or interruptions?',
                      'Do you always have to win at games to enjoy yourself?',
                      'Do you find yourself speeding up the car to beat the red light?',
                      'Are you unlikely to ask for or indicate you need help with a problem?',
                      'Do you constantly seek the respect and admiration of others?',
                      'Are you overly critical of the way others do their work?',
                      'Do you have the habit of looking at your watch or clock often?',
                      'Do you constantly strive to better your position and achievements?', 
                      'Do you spread yourself "too thin" in terms of your time?',
                      'Do you have the habit of doing more than one thing at a time?',
                      'Do you frequently get angry or irritable?',
                      'Do you have little time for hobbies or time by yourself?',
                      'Do you have a tendency to talk quickly or hasten conversations?',
                      'Do you consider yourself hard-driving?',
                      'Do your friends or relatives consider you hard-driving?',
                      'Do you have a tendency to get involved in multiple projects?',
                      'Do you have a lot of deadlines in your work?',
                      'Do you feel vaguely guilty if you relax and do nothing during leisure?', 
                      'Do you take on too many responsibilities?'];

  
 
  //$scope.currentQuestionIndex = QuizResource.getCurrentQuestionIndex();
  $scope.$on('$stateChangeSuccess', function() {
    
    $scope.totalQuestions = $scope.questions.length;    
    $scope.currentQuestionIndex = parseFloat($state.params.id);
    $scope.question = $scope.questions[$scope.currentQuestionIndex];
    $scope.score = QuizTracker.getScore();    
    // remove focus on all elements 
    if (document.activeElement !== document.body) {
      document.activeElement.blur();
    }
    setTimeout(function(){
      $('.circle').blur();
      $('#wrap').focus();
    }, 500);
  });

  var onLogoutSuccess = function(response) {
    $scope.goto('/login');
  };

  $scope.back = function() {
    
    var prevID = $scope.currentQuestionIndex - 1;
    
    if(prevID <= 0) {
      $state.go('quiz.landing');
    } else {
      $state.go('quiz.question', {id: prevID});  
    }

  };

  $scope.next = function() {
    
    var nextID = $scope.currentQuestionIndex + 1;
    
    if(nextID >= $scope.totalQuestions) {
      $state.go('quiz.result');
    } else {
      $state.go('quiz.question', {id: nextID});  
    }

  };

  $scope.one = function() {
    $scope.answer(1);
  }; 
  
  $scope.two = function() {
    $scope.answer(2);
  };

  $scope.three = function() {
    $scope.answer(3);  
  };

  $scope.four = function() {
    $scope.answer(4);
  };
  
  $scope.answer = function(answer) {
    
    QuizTracker.submitAnswer($scope.currentQuestionIndex, answer);
    
    $scope.next();
    
  };

  $scope.home = function() {
  	$scope.goto('/home');
  };

  $scope.completed = function() {
  
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

    $('#wrap').focus();
    //TODO - manage history - might take a refactor
  	$location.path(path);
  };

  // remove loading class, attempt at "preload"
  setTimeout(function(){$('#wrap').removeClass('loading');}, 1000);
  
});


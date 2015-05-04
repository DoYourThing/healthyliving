angular.module("app").config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);


  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'home.html',
    controller: 'MainController'
  });
  


  $urlRouterProvider.when('/cultural_adjustment', '/cultural_adjustment/landing');
  $urlRouterProvider.when('/cultural_adjustment', '/cultural_adjustment/landing');

  $stateProvider.state('cultural_adjustment', {
    url: '/cultural_adjustment',
    templateUrl: 'cultural_adjustment/base.html',
    controller: 'MainController'
  });
  
  $stateProvider.state('cultural_adjustment.landing', {
    url: '/landing',
    templateUrl: 'cultural_adjustment/landing.html',
  });
  
  $stateProvider.state('cultural_adjustment.scenario', {
    url: '/scenario',
    templateUrl: 'cultural_adjustment/scenario.html',
  });
  
  $stateProvider.state('cultural_adjustment.negative-outcome', {
    url: '/negative-outcome',
    templateUrl: 'cultural_adjustment/negative-outcome.html',
  });
  
  $stateProvider.state('cultural_adjustment.multi-choice', {
    url: '/multi-choice',
    templateUrl: 'cultural_adjustment/multi-choice.html',
  });
  
  $stateProvider.state('cultural_adjustment.dealing-with-homesickness', {
    url: '/dealing-with-homesickness',
    templateUrl: 'cultural_adjustment/dealing-with-homesickness.html',
  });

  $stateProvider.state('cultural_adjustment.coping-with-tests-and-exams', {
    url: '/coping-with-tests-and-exams',
    templateUrl: 'cultural_adjustment/coping-with-tests-and-exams.html',
  });

  $stateProvider.state('cultural_adjustment.making-new-friends', {
    url: '/making-new-friends',
    templateUrl: 'cultural_adjustment/making-new-friends.html',
  });

  $stateProvider.state('cultural_adjustment.adjusting-to-changes-in-diet-and-activity', {
    url: '/adjusting-to-changes-in-diet-and-activity',
    templateUrl: 'cultural_adjustment/adjusting-to-changes-in-diet-and-activity.html',
  });

  $stateProvider.state('cultural_adjustment.establishing-a-support-system', {
    url: '/establishing-a-support-system',
    templateUrl: 'cultural_adjustment/establishing-a-support-system.html',
  });





  $urlRouterProvider.when('/nutrition', '/nutrition/landing');

  $stateProvider.state('nutrition', {
    url: '/nutrition',
    templateUrl: 'nutrition/base.html',
    controller: 'MainController'
  });
  
  $stateProvider.state('nutrition.landing', {
    url: '/landing',
    templateUrl: 'nutrition/landing.html',
  });
  
  $stateProvider.state('nutrition.scenario', {
    url: '/scenario',
    templateUrl: 'nutrition/scenario.html',
  });
  
  $stateProvider.state('nutrition.negative-outcome', {
    url: '/negative-outcome',
    templateUrl: 'nutrition/negative-outcome.html',
  });
  
  $stateProvider.state('nutrition.multi-choice', {
    url: '/multi-choice',
    templateUrl: 'nutrition/multi-choice.html',
  });

  $stateProvider.state('nutrition.cook', {
    url: '/cook',
    templateUrl: 'nutrition/cook.html',
  });
  $stateProvider.state('nutrition.buy-local-and-in-season', {
    url: '/buy-local-and-in-season',
    templateUrl: 'nutrition/buy-local-and-in-season.html',
  });
  $stateProvider.state('nutrition.do-it-yourself', {
    url: '/do-it-yourself',
    templateUrl: 'nutrition/do-it-yourself.html',
  });
  $stateProvider.state('nutrition.plan-ahead', {
    url: '/plan-ahead',
    templateUrl: 'nutrition/plan-ahead.html',
  });





  $urlRouterProvider.when('/fitness', '/fitness/landing');

  $stateProvider.state('fitness', {
    url: '/fitness',
    templateUrl: 'fitness/base.html',
    controller: 'MainController'
  });
  
  $stateProvider.state('fitness.landing', {
    url: '/landing',
    templateUrl: 'fitness/landing.html',
  });
  
  $stateProvider.state('fitness.scenario', {
    url: '/scenario',
    templateUrl: 'fitness/scenario.html',
  });
  
  $stateProvider.state('fitness.negative-outcome', {
    url: '/negative-outcome',
    templateUrl: 'fitness/negative-outcome.html',
  });
  
  $stateProvider.state('fitness.multi-choice', {
    url: '/multi-choice',
    templateUrl: 'fitness/multi-choice.html',
  });
  
  $stateProvider.state('fitness.home-exercise', {
    url: '/home-exercise',
    templateUrl: 'fitness/home-exercise.html',
  });
  $stateProvider.state('fitness.join-a-recreation-league', {
    url: '/join-a-recreation-league',
    templateUrl: 'fitness/join-a-recreation-league.html',
  });
  $stateProvider.state('fitness.join-a-gym', {
    url: '/join-a-gym',
    templateUrl: 'fitness/join-a-gym.html',
  });
  $stateProvider.state('fitness.walk-bike', {
    url: '/walk-bike',
    templateUrl: 'fitness/walk-bike.html',
  });
  $stateProvider.state('fitness.run', {
    url: '/run',
    templateUrl: 'fitness/run.html',
  });
  
  $urlRouterProvider.when('/relationships', '/relationships/landing');

  $stateProvider.state('relationships', {
    url: '/relationships',
    templateUrl: 'relationships/base.html',
    controller: 'MainController'
  });
  
  $stateProvider.state('relationships.landing', {
    url: '/landing',
    templateUrl: 'relationships/landing.html',
  });
  
  $stateProvider.state('relationships.scenario', {
    url: '/scenario',
    templateUrl: 'relationships/scenario.html',
  });
  
  $stateProvider.state('relationships.negative-outcome', {
    url: '/negative-outcome',
    templateUrl: 'relationships/negative-outcome.html',
  });
  
  $stateProvider.state('relationships.multi-choice', {
    url: '/multi-choice',
    templateUrl: 'relationships/multi-choice.html',
  });

  $stateProvider.state('relationships.establishing', {
    url: '/establishing',
    templateUrl: 'relationships/establishing.html',
  });
  $stateProvider.state('relationships.connected', {
    url: '/connected',
    templateUrl: 'relationships/connected.html',
  });

  $stateProvider.state('relationships.healthy', {
    url: '/healthy',
    templateUrl: 'relationships/healthy.html',
  });

  $stateProvider.state('relationships.tips', {
    url: '/tips',
    templateUrl: 'relationships/tips.html',
  });
 




  $urlRouterProvider.when('/stress', '/stress/landing');

  $stateProvider.state('stress', {
    url: '/stress',
    templateUrl: 'stress/base.html',
    controller: 'MainController'
  });
  
  $stateProvider.state('stress.landing', {
    url: '/landing',
    templateUrl: 'stress/landing.html',
  });
  
  $stateProvider.state('stress.scenario', {
    url: '/scenario',
    templateUrl: 'stress/scenario.html',
  });
  
  $stateProvider.state('stress.negative-outcome', {
    url: '/negative-outcome',
    templateUrl: 'stress/negative-outcome.html',
  });
  
  $stateProvider.state('stress.multi-choice', {
    url: '/multi-choice',
    templateUrl: 'stress/multi-choice.html',
  });

  $stateProvider.state('stress.plan', {
    url: '/plan',
    templateUrl: 'stress/plan.html',
  });

  $stateProvider.state('stress.pitfalls', {
    url: '/pitfalls',
    templateUrl: 'stress/pitfalls.html',
  });

  $stateProvider.state('stress.manage', {
    url: '/manage',
    templateUrl: 'stress/manage.html',
  });

  $stateProvider.state('stress.find-students', {
    url: '/find-students',
    templateUrl: 'stress/find-students.html',
  });
  
  $stateProvider.state('stress.stay-connected', {
    url: '/stay-connected',
    templateUrl: 'stress/stay-connected.html',
  });

  $stateProvider.state('stress.environment', {
    url: '/environment',
    templateUrl: 'stress/environment.html',
  });  

  $stateProvider.state('quiz', {
    url: '/quiz',
    templateUrl: 'quiz/base.html',
    controller: 'QuizController'
  });

  $stateProvider.state('quiz.landing', {
    url: '/landing',
    templateUrl: 'quiz/landing.html',
  });

  $stateProvider.state('quiz.result', {
    url: '/result',
    templateUrl: 'quiz/result.html',
  });

  $stateProvider.state('quiz.question', {
    url: '/:id',
    templateUrl: "quiz/question.html",
    onEnter: function($stateParams) {

      console.log($stateParams.id);
    }
  });

  $urlRouterProvider.when('/self_care', '/self_care/landing');
  $urlRouterProvider.when('/self_care', '/self_care/landing');
  
  $stateProvider.state('self_care', {
    url: '/self_care',
    templateUrl: 'self_care/base.html',
    controller: 'MainController'
  });
  
  $stateProvider.state('self_care.landing', {
    url: '/landing',
    templateUrl: 'self_care/landing.html',
  });
  
  $stateProvider.state('self_care.scenario', {
    url: '/scenario',
    templateUrl: 'self_care/scenario.html',
  });
  
  $stateProvider.state('self_care.negative-outcome', {
    url: '/negative-outcome',
    templateUrl: 'self_care/negative-outcome.html',
  });
  
  $stateProvider.state('self_care.multi-choice', {
    url: '/multi-choice',
    templateUrl: 'self_care/multi-choice.html',
  });

  $stateProvider.state('self_care.physical-activity', {
    url: '/physical-activity',
    templateUrl: 'self_care/physical-activity.html',
  });

  $stateProvider.state('self_care.nutrition', {
    url: '/nutrition',
    templateUrl: 'self_care/nutrition.html',
  });

  $stateProvider.state('self_care.sleep', {
    url: '/sleep',
    templateUrl: 'self_care/sleep.html',
  });

  $stateProvider.state('self_care.dont-panic', {
    url: '/dont-panic',
    templateUrl: 'self_care/dont-panic.html',
  });

  $stateProvider.state('self_care.reward', {
    url: '/reward',
    templateUrl: 'self_care/reward.html',
  });
  
  
  $urlRouterProvider.otherwise('/home');

});

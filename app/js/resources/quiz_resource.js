angular.module("app").factory("QuizResource", function($q, $resource) {
  return $resource('/quiz');
});

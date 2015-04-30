angular.module("app").factory('QuizTracker', function() {
  
  var _currentQuestionIndex = 0;
  var _totalQuestions = null; // should be set dynamically
  var _answers = {};

  var Tracker = {

    setQuestionAmount: function(totalQuestions) {
      _totalQuestions = totalQuestions;
    },

    getCurrentQuestionIndex: function() {
      return _currentQuestionIndex;
    },

    submitAnswer: function(questionID, answer) {
      console.log('submitting answer: '+answer);
      _answers[questionID] = answer;
    },

    getScore: function() {
      var score = 0;
      
      _.each(_answers, function(answer){        
        score += answer;
      });
      return score;
    },


  };

  return Tracker;
});

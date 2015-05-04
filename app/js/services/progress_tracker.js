angular.module("app").factory('ProgressTracker', function($http) {
  // 
  var history = {};
  var progress = 0;
  var previousSteps = [];

  var _data = {
    accessToken: null,
    currentAlbum: null,
    firstName: null
  };

  var _pillars = {
    // pillar name, if it's been completed yet
    cultural_adjustment: null,
    nutrition: null,
    fitness: null,
    relationships: null,
    self_care: null,    
    order: ['cultural_adjustment', 'nutrition', 'fitness', 'relationships', 'stress', 'self_care'],
    current: null,
    next: null
  };
  // duh, 
  //if(_pillars.current === null) {
    _pillars.current = _pillars.order[0];
  //}
  var _percent = 0;

  var Tracker = {

    getGrade: function(per) {
      // 94, 86, 78, 70, 62, 54
      var grade = "NA";
      
      if(per === 100) {
        grade = "A+";
      } else if(per >= 94) {
        grade = "A";
      } else if(per >= 87) {
        grade = "B+";
      } else if(per >= 84) {
        grade = "B";
      } else if(per >= 80) {
        grade = "B-";
      } else if(per >= 77) {
        grade = "C+";
      } else if(per >= 70) {
        grade = "C-";
      } else if(per >= 64) {
        grade = "D";
      } else if(per >= 60) {
        grade = "D-";
      } else {
        grade = "F";
      }
      
      return grade;
    },

    getHistory: function() {
      return history;
    },

    getProgress : function() {
      return progress;
    },

    getPercentComplete: function() {
      return _percent;
    },

    updatePercent: function() {
      var per = 0;
    
      _.each(_pillars.order, function(pillarID) {
        
        if(_pillars[pillarID] != null) {
          //if you passed the pillar, get 16 percent, otherwise get 10 - if you fail all you get a F
          per = _pillars[pillarID] === 'completed' ? per + 17 : per + 9;
        }
      });
        
      if(per >= 99) {
        per = 100;
      }

      _percent = per;
    },
    
    hasCompletedAllPillars: function() {
      var currentIndex = _pillars.order.indexOf(_pillars.current);
      return _pillars[_pillars.current] != null && currentIndex >= _pillars.order.length -1; //returns true if completed       
    },
    
    setView : function(currentView, previousView) {
        $scope.data.previousViews.push(previousView);
        $scope.data.view = currentView;
        if(!$scope.hasStyledSelects){
          $scope.switcheroo();
          $scope.hasStyledSelects = true;
        }
    },
    
    getCurrentPillar: function() {
      return _pillars.current;
    },
    
    canGotoPillar: function(pillarID) {
      // it's considered active if 
      var isCompleted = _pillars[pillarID] != null;
      if(isCompleted) {
        return true;
      }

      // or it's the current pillar
      var currentIndex = _pillars.order.indexOf(_pillars.current);
      return _pillars.order.indexOf(pillarID) === currentIndex;
    },

    isPillarActive: function(pillarID) {
      
      // if the first time, set to the first pillar
      if(_pillars.current === null) {
        _pillars.current = _pillars.order[0];
      }
      
    
      var currentIndex = _pillars.order.indexOf(_pillars.current);
      // var isCurrentCompleted = _pillars[_pillars.current] != null; //returns true if completed 
      //var activeIndex = isCurrentCompleted ? currentIndex + 1 : currentIndex;

      // console.log('_pillars[_pillars.current] '+ _pillars[_pillars.current] +' is current completed: '+isCurrentCompleted);
      // console.log(pillarID+' '+currentIndex+'; _pillars.order.indexOf(pillarID): '+_pillars.order.indexOf(pillarID));
      // console.log('ACTIVE INDEX: '+activeIndex);
      return _pillars.order.indexOf(pillarID) === currentIndex;
    },

    setCurrentPillar: function(pillarID){
      _pillars.current = pillarID;
    },

    pillarComplete: function(failed) {
      
      _pillars[_pillars.current] = failed ? 'failed' : 'completed';      
      this.updatePercent();
      
      //update to new pillar
      var currentIndex = _pillars.order.indexOf(_pillars.current);
      if( currentIndex + 1 < _pillars.order.length) {
        _pillars.current =   _pillars.order[currentIndex + 1];
      }
    },

    getPillars: function(){
      return _pillars;
    },

    back : function() {
        if ($scope.data.previousViews.length) {
            $scope.data.view = $scope.data.previousViews[$scope.data.previousViews.length-1];
            $scope.data.previousViews.pop();
        } else {
            $scope.cancel();
        }
    },

  };

  return Tracker;
});

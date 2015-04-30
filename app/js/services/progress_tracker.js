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
          //if you passed the pillar, get 16 percent, otherwise get 10 - if you fail all you get a D-
          per = _pillars[pillarID] === 'completed' ? per + 16 : per + 10;
        }
      });
        
      if(per >= 99) {
        per = 100;
      }

      _percent = per;
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
    
    isPillarActive: function(pillarID) {
      
      // if the first time, set to the first pillar
      if(_pillars.current === null) {
        _pillars.current = _pillars.order[0];
      }

      var currentIndex = _pillars.order.indexOf(_pillars.current);
      var isCurrentCompleted = _pillars[_pillars.current] != null; //returns true if completed 
      var activeIndex = isCurrentCompleted ? currentIndex + 1 : currentIndex;

      // console.log('_pillars[_pillars.current] '+ _pillars[_pillars.current] +' is current completed: '+isCurrentCompleted);
      // console.log(pillarID+' '+currentIndex+'; _pillars.order.indexOf(pillarID): '+_pillars.order.indexOf(pillarID));
      // console.log('ACTIVE INDEX: '+activeIndex);
      return _pillars.order.indexOf(pillarID) === activeIndex;
    },

    setCurrentPillar: function(pillarID){
      console.log('setting current pillar: '+pillarID);
      _pillars.current = pillarID;
    },

    pillarComplete: function(failed) {
      
      _pillars[_pillars.current] = failed ? 'failed' : 'completed';      
      this.updatePercent();
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

angular.module("app").factory(
      "preloader",
      function( $q, $rootScope ) {        
                                
        // I manage the preloading of image objects. Accepts an array of image URLs.
        function Preloader( imageLocations ) {

          // I am the image SRC values to preload.
          this.imageLocations = imageLocations;

          // As the images load, we'll need to keep track of the load/error
          // counts when announing the progress on the loading.
          this.imageCount = this.imageLocations.length;
          this.loadCount = 0;
          this.errorCount = 0;

          // I am the possible states that the preloader can be in.
          this.states = {
            PENDING: 1,
            LOADING: 2,
            RESOLVED: 3,
            REJECTED: 4
          };

          // I keep track of the current state of the preloader.
          this.state = this.states.PENDING;

          // When loading the images, a promise will be returned to indicate
          // when the loading has completed (and / or progressed).
          this.deferred = $q.defer();
          this.promise = this.deferred.promise;

        }

        Preloader.sharedImages = [ 
                          'img/algonquin-college-logo@2x.png',
                          'img/main-bg.jpg',
                          'img/healthy-living@2x.png',

                          'img/cultural_adjustment/establishing-a-support-system-bg.jpg',
                          'img/cultural_adjustment/landing-bg.jpg',
                          
                          'img/nutrition/buy-local-and-in-season-bg.jpg',
                          
                          'img/nutrition/do-it-yourself-bg.jpg',
                          'img/nutrition/landing-bg.jpg',
                          
                          'img/nutrition/plan-ahead-bg.jpg',
                          'img/nutrition/scenario-bg.jpg',

                          'img/fitness/landing-bg.jpg',
                          'img/fitness/scenario-bg.jpg',
                          
                          'img/quiz/quiz-bg.jpg',

                          'img/relationships/connected-bg.jpg',
                          'img/relationships/establishing-bg.jpg',
                          'img/relationships/healthy-bg.jpg',
                          'img/relationships/landing-bg.jpg',
                          'img/relationships/negative-outcome-bg.jpg',
                          'img/relationships/scenario-bg.jpg',
                          'img/relationships/tips-bg.jpg',

                          'img/self_care/landing-bg.jpg',
                         
                          'img/self_care/multi-choice-bg.jpg',
                          'img/self_care/negative-outcome-bg.jpg',
                          'img/self_care/nutrition-bg.jpg',                          
                          
                          'img/stress/find-students-bg.jpg',
                          'img/stress/have-a-plan-bg.jpg',
                          'img/stress/landing-bg.jpg',
                          'img/stress/manage-bg.jpg',
                          
                          'img/stress/multi-choice-bg.jpg',
                          'img/stress/negative-outcome-bg.jpg',
                          'img/stress/pitfalls-bg.jpg',
                          ];

          Preloader.desktopImages = [ 'img/cultural_adjustment/coping-with-tests-and-exams-bg.jpg',
                              'img/cultural_adjustment/dealing-with-homesickness-bg.jpg',
                              'img/cultural_adjustment/making-new-friends-bg.jpg',

                              'img/nutrition/cook-bg.jpg',

                              'img/fitness/home-exercise-bg.jpg',
                              'img/fitness/join-a-gym-bg.jpg',
                              'img/fitness/join-a-recreation-league-bg.jpg',                                                        
                              'img/fitness/run-bg.jpg',                              
                              'img/fitness/walk-bike-bg.jpg',
                              'img/fitness/yoga-bg.jpg',

                              'img/stress/environment-bg.jpg',
                              'img/stress/stay-connected-bg.jpg',

                              'img/self_care/physical-activity-bg.jpg',
                              'img/self_care/reward-bg.jpg',
                              'img/self_care/scenario-bg.jpg',
                              'img/self_care/sleep-bg.jpg',
                            ];

            Preloader.mobileImages = [  'img/cultural_adjustment/mobile/coping-with-tests-and-exams-bg.jpg',
                              'img/cultural_adjustment/mobile/dealing-with-homesickness-bg.jpg',
                              'img/cultural_adjustment/mobile/making-new-friends-bg.jpg',

                              'img/nutrition/mobile/cook-bg.jpg',

                              'img/fitness/mobile/home-exercise-bg.jpg',
                              'img/fitness/mobile/join-a-gym-bg.jpg',
                              'img/fitness/mobile/join-a-recreation-league-bg.jpg',
                              'img/fitness/mobile/run-bg.jpg',
                              'img/fitness/mobile/walk-bike-bg.jpg',
                              'img/fitness/mobile/yoga-bg.jpg',

                              'img/stress/mobile/environment-bg.jpg',
                              'img/stress/mobile/stay-connected-bg.jpg',

                              'img/self_care/mobile/physical-activity-bg.jpg',
                              'img/self_care/mobile/reward-bg.jpg',
                              'img/self_care/mobile/scenario-bg.jpg',
                              'img/self_care/mobile/sleep-bg.jpg',
                            ];

        // ---
        // STATIC METHODS.
        // ---


        // I reload the given images [Array] and return a promise. The promise
        // will be resolved with the array of image locations.
        Preloader.preloadImages = function( imageLocations ) {

          var preloader = new Preloader( imageLocations );

          return( preloader.load() );

        };


        // ---
        // INSTANCE METHODS.
        // ---


        Preloader.prototype = {

          // Best practice for "instnceof" operator.
          constructor: Preloader,


          // ---
          // PUBLIC METHODS.
          // ---


          // I determine if the preloader has started loading images yet.
          isInitiated: function isInitiated() {

            return( this.state !== this.states.PENDING );

          },


          // I determine if the preloader has failed to load all of the images.
          isRejected: function isRejected() {

            return( this.state === this.states.REJECTED );

          },


          // I determine if the preloader has successfully loaded all of the images.
          isResolved: function isResolved() {

            return( this.state === this.states.RESOLVED );

          },


          // I initiate the preload of the images. Returns a promise.
          load: function load() {

            // If the images are already loading, return the existing promise.
            if ( this.isInitiated() ) {

              return( this.promise );

            }

            this.state = this.states.LOADING;

            for ( var i = 0 ; i < this.imageCount ; i++ ) {

              this.loadImageLocation( this.imageLocations[ i ] );

            }

            // Return the deferred promise for the load event.
            return( this.promise );

          },


          // ---
          // PRIVATE METHODS.
          // ---


          // I handle the load-failure of the given image location.
          handleImageError: function handleImageError( imageLocation ) {

            this.errorCount++;

            // If the preload action has already failed, ignore further action.
            if ( this.isRejected() ) {

              return;

            }

            this.state = this.states.REJECTED;

            this.deferred.reject( imageLocation );

          },


          // I handle the load-success of the given image location.
          handleImageLoad: function handleImageLoad( imageLocation ) {

            this.loadCount++;

            // If the preload action has already failed, ignore further action.
            if ( this.isRejected() ) {

              return;

            }

            // Notify the progress of the overall deferred. This is different
            // than Resolving the deferred - you can call notify many times
            // before the ultimate resolution (or rejection) of the deferred.
            this.deferred.notify({
              percent: Math.ceil( this.loadCount / this.imageCount * 100 ),
              imageLocation: imageLocation
            });

            // If all of the images have loaded, we can resolve the deferred
            // value that we returned to the calling context.
            if ( this.loadCount === this.imageCount ) {

              this.state = this.states.RESOLVED;

              this.deferred.resolve( this.imageLocations );

            }

          },


          // I load the given image location and then wire the load / error
          // events back into the preloader instance.
          // --
          // NOTE: The load/error events trigger a $digest.
          loadImageLocation: function loadImageLocation( imageLocation ) {

            var preloader = this;

            // When it comes to creating the image object, it is critical that
            // we bind the event handlers BEFORE we actually set the image
            // source. Failure to do so will prevent the events from proper
            // triggering in some browsers.
            var image = $( new Image() )
              .load(
                function( event ) {

                  // Since the load event is asynchronous, we have to
                  // tell AngularJS that something changed.
                  $rootScope.$apply(
                    function() {

                      preloader.handleImageLoad( event.target.src );

                      // Clean up object reference to help with the
                      // garbage collection in the closure.
                      preloader = image = event = null;

                    }
                  );

                }
              )
              .error(
                function( event ) {

                  // Since the load event is asynchronous, we have to
                  // tell AngularJS that something changed.
                  $rootScope.$apply(
                    function() {

                      preloader.handleImageError( event.target.src );

                      // Clean up object reference to help with the
                      // garbage collection in the closure.
                      preloader = image = event = null;

                    }
                  );

                }
              )
              .prop( "src", imageLocation )
            ;

          }

        };


        // Return the factory instance.
        return( Preloader );

      }
    );
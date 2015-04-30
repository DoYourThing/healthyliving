/* Define custom server-side HTTP routes for lineman's development server
 *   These might be as simple as stubbing a little JSON to
 *   facilitate development of code that interacts with an HTTP service
 *   (presumably, mirroring one that will be reachable in a live environment).
 *
 * It's important to remember that any custom endpoints defined here
 *   will only be available in development, as lineman only builds
 *   static assets, it can't run server-side code.
 *
 * This file can be very useful for rapid prototyping or even organically
 *   defining a spec based on the needs of the client code that emerge.
 *
 */

module.exports = {
  drawRoutes: function(app) {
    app.post('/login', function(req, res) {
      res.json({ message: 'logging in!' });
    });

    app.post('/logout', function(req, res) {
      res.json({ message: 'logging out!'});
    });

    app.get('/books', function (req, res) {
      res.json([
        {title: 'Great Expectations', author: 'Dickens'},
        {title: 'Foundation Series', author: 'Asimov'},
        {title: 'Treasure Island', author: 'Stephenson'}
      ]);
    });

    // app.get('/quiz', function(req, res) {
    //   res.json([
    //     {id:'1', question:'Do you try to do as much as possible in the least amount of time?'},
    //     {id:'2', question:'Do you become impatient with delays or interruptions?'},
    //     {id:'3', question:'Do you always have to win at games to enjoy yourself?'},
    //     {id:'4', question:'Do you find yourself speeding up the car to beat the red light?'},
    //     {id:'5', question:'Are you unlikely to ask for or indicate you need help with a problem?'},
    //     {id:'6', question:'Do you constantly seek the respect and admiration of others?'},
    //     {id:'7', question:'Are you overly critical of the way others do their work?'},
    //     {id:'8', question:'Do you have the habit of looking at your watch or clock often?'},
    //     {id:'9', question:'Do you constantly strive to better your position and achievements?'}, 
    //     {id:'10',question:'Do you spread yourself "too thin" in terms of your time?'},
    //     {id:'11', question:'Do you have the habit of doing more than one thing at a time?'},
    //     {id:'12', question:'Do you frequently get angry or irritable?'},
    //     {id:'13', question:'Do you have little time for hobbies or time by yourself?'},
    //     {id:'14', question:'Do you have a tendency to talk quickly or hasten conversations?'},
    //     {id:'15', question:'Do you consider yourself hard-driving?'},
    //     {id:'16', question:'Do your friends or relatives consider you hard-driving?'},
    //     {id:'17', question:'Do you have a tendency to get involved in multiple projects?'},
    //     {id:'18', question:'Do you have a lot of deadlines in your work?'},
    //     {id:'19', question:'Do you feel vaguely guilty if you relax and do nothing during leisure?'}, 
    //     {id:'20', question:'Do you take on too many responsibilities?'}
    //   ]);
    // });

  }
};

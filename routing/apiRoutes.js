var friendsData = require("../app/data/friends.js");


module.exports = function(app) {



app.get("/api/survey", function(req, res) {
    
    //This will be used to display a JSON of all possible friends.

    res.sendFile(path.join(__dirname + '../public/survey.html'));
    
  
  });

}
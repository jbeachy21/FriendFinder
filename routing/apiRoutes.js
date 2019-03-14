var friendsData = require("../app/data/friends.js");
var path = require("path");

module.exports = function(app) {



app.get("/api/friends", function(req, res) {
    
    //This will be used to display a JSON of all possible friends.

    res.sendFile(path.join(__dirname, "../app/data/friends.js"));
    
  
  });

}
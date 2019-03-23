var path = require("path");
var friends = require("../app/data/friends");
var newFriend = require("../click");
// var click = require("../click");
//var answers = require("../public/survey");

module.exports = function(app) {



app.get("/api/friends", function(req, res) {
    

    res.sendFile(path.join(__dirname, "../app/data/friends.js"));
    
  
  });

  app.post("/api/friends", function(req, res) {
    var NEWFRIEND = JSON.stringify(click.newFriend);
    
    var difference = [];
    var TotalDifference = [];
    for (var i = 0; i<friends.friends.length; i++) {
        for (var j = 0; j<10; j++) {
            //compares the scores of friends.js to what you just got in the survey
            difference[j] = friends.friends[friends.friends.length - 1] - friends.friends[i].scores[j];
        }
        //Gets difference of array and takes absolute value of it
        TotalDifference[i] = Math.abs(difference.reduce());
        console.log("TotalDifference[i]: " + TotalDifference[i]);
    }
    var index;
    for (var i = 0; i<TotalDifference.length; i++) {
      if (TotalDifference[i] < TotalDifference[i+1]) {
        index = TotalDifference[i];
      }
    }
    document.getElementById("friend").innerHTML = friends.friends[index].name;
    document.getElementById("photoFrame").innerHTML = friends.friends[index].photo;

  })

}
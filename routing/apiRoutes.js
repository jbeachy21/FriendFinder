var path = require("path");
var friends = require("../app/data/friends.js");



module.exports = function(app) {



app.get("/api/friends", function(req, res) {
    
    //res.json(friends);
    res.sendFile(path.join(__dirname, "../app/data/friends.js"));
    
  
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    //req.body.scores for newFriend scores
    var difference;
    var TotalDifference = [];
    console.log("friends: " + JSON.stringify(friends));
    
    for (var i = 0; i<friends.length; i++) {
      difference = 0;
        for (var j = 0; j<10; j++) {
            //compares the scores of friends.js to what you just got in the survey
            difference =  difference + (req.body.scores[j] - friends[i].scores[j]);
            console.log("difference[j]: " + difference[j])
        }
        //Gets difference of array and takes absolute value of it
        TotalDifference[i] = Math.abs(difference);
        console.log("TotalDifference[" + i + "]: " + TotalDifference[i]);
    }
    var index;
    for (var i = 0; i<TotalDifference.length; i++) {
      if (TotalDifference[i] < TotalDifference[i+1]) {
        index = i;
        console.log("index = " + index);
      }
    }
    var bestFriend = {
      name: friends[index].name,
      photo: friends[index].photo,
      scores: friends[index].scores,
    }
    res.json(bestFriend);
  })

}
var friendData = require("../data/friends");
 
module.exports = function(app) {
     // Displays all friend options
  app.get("/api/friends", function(req, res) {
    return res.json(friendData);
  });
  
  // Displays a single user, or returns false
  app.get("/api/friends/:friend", function(req, res) {
    var chosen = req.params.friend;
  
    console.log(chosen);
  
    for (var i = 0; i < friend.length; i++) {
      if (chosen === friend[i].routeName) {
        return res.json(friend[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New friend 
  app.post("/api/friends", function(req, res) {
    var bestMatch;
    
    for (var i = 0; i <= friendData.length - 1; i++) {
      if (friendData[i].name === req.body.name) {
        userIndex = i;
        continue;
      } else {
        var userScore = friendData[i].scores;
        var difference = 0;
        for (var j = 0; j <= userScore.length - 1; j++) {
          difference = difference + Math.abs(req.body.scores[j] - userScore[j]);
        }
        if (!(bestMatch == null)) {
          if (bestMatch.diff > difference) {
            bestMatch = {index: i, diff: difference};
          } else if (bestMatch.diff === difference && Math.floor(Math.random() * 2) === 0) {
            bestMatch = {index: i, diff: difference};
          } 
        } else {
          bestMatch = {index: i, diff: difference};
        }
      }
    }
    console.log(req.body);
    friendData.push(req.body);
    res.json(friendData[bestMatch.index]);
   
  
    res.end();
  });
}

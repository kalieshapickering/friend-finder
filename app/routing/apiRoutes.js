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
  
    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New friend 
  app.post("/api/friends", function(req, res) {

    var newfriend = req.body;

    newfriend.routeName = newcfriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newfriend);
  
    friendData.push(newfriend);
  
    res.json(newfriend);
  });
}

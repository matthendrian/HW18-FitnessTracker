const path = require("path");
const router = require("express").Router();

//we only need to create two routes: stats and excercise.
router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
//setting up our excercise route extension. 
router.get("/exercise", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
  
//we must export our router function, otherwise our routes will not work!
module.exports = router;


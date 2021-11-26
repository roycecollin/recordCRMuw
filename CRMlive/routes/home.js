var express = require('express');
var router = express.Router();


/* Render Home view */
router.get('/', function(req, res, next) {
  res.render('home', {user:req.user.username});
});

module.exports = router;

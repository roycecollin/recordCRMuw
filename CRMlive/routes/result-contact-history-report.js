var express = require('express');
var router = express.Router();

/* Render Event Entery view */
router.get('/', function(req, res, next) {
  res.render('result-contact-history-report', {user:req.user.username});
});

module.exports = router;

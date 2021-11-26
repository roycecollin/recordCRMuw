var express = require('express');
var router = express.Router();

/* Render Contact Report view */
router.get('/', function(req, res, next) {
  res.render('contact-report');
});

module.exports = router;

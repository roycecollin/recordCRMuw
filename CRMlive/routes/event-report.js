var express = require('express');
var router = express.Router();

/* Render Event Report view */
router.get('/', function(req, res, next) {
  res.render('event-report');
});

module.exports = router;

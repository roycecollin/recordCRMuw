var express = require('express');
var router = express.Router();

/* Render Event Entery view */
router.get('/', function(req, res, next) {
  res.render('report-contact-history');
});

module.exports = router;

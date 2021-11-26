var express = require('express');
var router = express.Router();

/* Get users listing. */
router.get('/', function(req, res, next) {
  res.render('view-users');
});

module.exports = router;

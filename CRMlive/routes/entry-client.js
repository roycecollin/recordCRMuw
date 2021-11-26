var express = require('express');
var router = express.Router();

/* Render Client-Entry vieww */
router.get('/', function(req, res, next) {
  res.render('entry-client');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* Render Client-Entry vieww */
router.get('/', function(req, res, next) {
  res.render('view-client');
});

module.exports = router;

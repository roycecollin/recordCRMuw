var express = require('express');
var router = express.Router();

/* Render Agent-Report view */
router.get('/', function(req, res, next) {
  res.render('agent-report');
});

module.exports = router;

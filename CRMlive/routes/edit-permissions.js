var express = require('express');
var router = express.Router();

/* GET permissions listing. */
router.get('/', function(req, res, next) {
  res.render('edit-permissions');
});

module.exports = router;

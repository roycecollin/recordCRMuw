var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

/* GET login page. */
router.get('/logout', function(req, res) {
    res.render('logout', { user : req.user });
});


module.exports = router;

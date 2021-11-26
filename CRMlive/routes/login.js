var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});


module.exports = router;

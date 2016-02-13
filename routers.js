/**
 * License: GPL, every codes of "xcgqy".
 * Copyright (c) 2016, Hang Zhang.
 * Github: https://github.com/ZhangHang-z.
 */

var express = require('express');
var path = require('path');

var router= express.Router();


exports = module.exports = router;

// the routes of home page
var home = require('./controllers/home');


router.get('/', home.home);


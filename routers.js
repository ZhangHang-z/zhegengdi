/**
 * License: GPL, every codes of zhegengdi.com.
 * Copyright (c) 2016, Hang Zhang.
 * Github: https://github.com/ZhangHang-z.
 */

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/x_admin");


var router= express.Router();
exports = module.exports = router;

// 主页路由
var home = require('./controllers/home');
router.get('/', home.home);



// 管理员路由
var admin = require('./controllers/admin.js')

router.get('/admin', admin.home);

router.get('/login', function login(req, res) {
  res.render('login.ejs');
});

router.get("/authenticate", admin.loginSubmit);

router.post('/authenticate', admin.login);

router.get('/admin/createUser', admin.createUser);

router.post('/admin/create_user_submit', admin.newUserSubmit);
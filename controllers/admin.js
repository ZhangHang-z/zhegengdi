/**
 * License: GPL, every codes of zhegengdi.com.
 * Copyright (c) 2016, Hang Zhang.
 * Github: ttps://github.com/ZhangHang-z.
 */

var ejs = require('ejs');
var fs = require('fs');
var mySys = require('../common_functions/mysys.js');

var adminUserModel = require('../models/admin_user_model.js');


exports.home = function (req, res) {
  res.render('admin/admin_lay.ejs', { body: '主页' });
};


exports.login = function login(req, res) {
  var account = req.body['account'];
  var password = req.body['password'];
};


exports.createUser = function createUser(req, res) {
  var create_user_text = fs.readFileSync(mySys.getUserHome() + '/zhegengdi/views/admin/create_user.ejs', 'utf-8');
  var create_user_HTML = ejs.render(create_user_text);
  res.render('admin/admin_lay.ejs', { body: create_user_HTML });
};


exports.newUserSubmit = function newUserSubmit(req, res) {
  var post = req.body;
  console.log(post['account'])
};

/**
 * License: GPL, every codes of xcgqy
 * Copyright (c) 2016, Hang Zhang.
 * Github: ttps://github.com/ZhangHang-z
 */

 var ejs = require('ejs');
 var fs = require('fs');

exports.home = function (req, res) {
  res.render('admin/admin_lay.ejs', { body: '主页' });
};


exports.login = function login(req, res) {
  var account = req.body['account'];
  var password = req.body['password'];

};


exports.createUser = function createUser(req, res) {
  var create_user_text = fs.readFileSync('/home/hang/xcgqy/views/admin/create_user.ejs', 'utf-8');
  var create_user_HTML = ejs.render(create_user_text);
  res.render('admin/admin_lay.ejs', { body: create_user_HTML });
};


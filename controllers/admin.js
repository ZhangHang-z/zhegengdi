/**
 * License: GPL, every codes of zhegengdi.com.
 * Copyright (c) 2016, Hang Zhang.
 * Github: ttps://github.com/ZhangHang-z.
 */

var ejs = require('ejs');
var fs = require('fs');
var util = require('util');
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
  var create_user_text = fs.readFileSync(mySys.getUserHome() +
      '/zhegengdi/views/admin/create_user.ejs', 'utf-8');
  var create_user_HTML = ejs.render(create_user_text);
  res.render('admin/admin_lay.ejs', { body: create_user_HTML });
};


exports.newUserSubmit = function newUserSubmit(req, res) {
  var account = req.body['account'];
  var password = req.body['password'];
  var mobile = req.body['mobile'];
  var name = req.body['name'];
  var email = req.body['email'];
  var nickname = req.body['nickname'];
  var level = parseInt(req.body['level']);
  if (!account || !password || !mobile || !level || !name) {
    res.status('403').send('请输入完整的信息！');
  }
  if (isNaN(level)) {
    res.status('403').send('请勿修改前端脚本，等级权限必须为数字！');
  }


};

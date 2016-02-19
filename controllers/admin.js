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

exports.login = function login (req, res) {
  var account = req.body['account'];
  var password = req.body['password'];
};


exports.loginSubmit = function loginSubmit (req, res) {
  var account = req.body["account"];
  var password = req.body["password"];

  adminUserModel.find({ account: account }, function (err, doc) {
    if (err) {
      return console.log(err);
    } else {
      if (doc) {
        console.log("sasasa");
        console.log(doc);
      }
    }
  });
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
  var mobile = parseInt(req.body['mobile']);
  var name = req.body['name'];
  var email = req.body['email'];
  var nickname = req.body['nickname'];
  var level = parseInt(req.body['level']);
  var comment = req.body["comment"];

  if (!account || !password || !mobile || !level || !name) {
    return res.status('403').send('您输入的信息不完整或格式错误');
  }
  if (isNaN(level)) {
    return res.status('403').send('请勿修改前端脚本，等级权限必须为数字！');
  }

  var newUser = new adminUserModel({
    account: account,
    password: password,
    mobile: mobile,
    name: name,
    level: level,
    email: email,
    comment: comment
  });

  newUser.findSameAccount(account, function(err, old) {
    if (old.length != 0) {
      res.status("403").send("对不起，用户已存在！");
    } else {
      newUser.save(function (err, doc) {
        if (err) {
          res.status("403").send("对不起创建用户失败！");
        } else {
          console.log(doc);
          res.status("200").send("创建用户成功！");
        }
      });
    }
  });

  return 0;
};


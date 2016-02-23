/**
 * License: GPL, every codes of zhegengdi.com.
 * Copyright (c) 2016, Hang Zhang.
 * Github: ttps://github.com/ZhangHang-z.
 */

var adminUserModel = require('../models/admin_user_model.js');

exports.loginPage = function login (req, res) {
    res.render('login.ejs');
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

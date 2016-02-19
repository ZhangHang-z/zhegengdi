/**
 * License: GPL, every codes of xcgqy
 * Copyright (c) 2016, Hang Zhang.
 * Github: ttps://github.com/ZhangHang-z
 **/

var mongoose = require("mongoose");

var adminUserSchema = new mongoose.Schema({
	account: { type: String, required: true },
	mobile: { type: Number, required: true },
	password: { type: String, required: true },
	email: { type: String },
	nickname: { type: String, required: true, default: "用户" + Date.now().toString() },
	level: { type: Number, default: 3 },
	locked: { type: Boolean, default: false },
	admin_user_ids: {
		u_id: { type: String, required: true, default: Date.now },
	},
	create_time: { type: Date, required:true, default: Date.now },
	name: { type: String, default: '请输入您的姓名' },
	comment: String

});

// 验证用户是否已存在
adminUserSchema.methods.findSameAccount = function (acc, cb) {
	return this.model("AdminUser").find({ account: acc }, cb);
};

var adminUserModel = mongoose.model('AdminUser', adminUserSchema);
module.exports = adminUserModel;


	
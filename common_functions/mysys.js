/**
 * License: GPL, every codes of xcgqy
 * Copyright (c) 2016, Hang Zhang.
 * Github: ttps://github.com/ZhangHang-z
 */

exports.getUserHome = function getUserHome() {
	return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
};


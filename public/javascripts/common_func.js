/**
 * License: GPL, every codes of "xcgqy".
 * Copyright (c) 2016, Hang Zhang.
 * Github: https://github.com/ZhangHang-z.
 */

(function commonFrontJS(win, doc) {


window.commonUtils = {};
window.commonUtils.hasPlaceholderSupport = hasPlaceSupport;
window.commonUtils.createXHR = createXHR;


function hasPlaceSupport() {
	var input = doc.createElement("input");
	return ('placeholder' in input);
}


function createXHR() {
  if (typeof win.XMLHttpRequest != 'undefined') {
    return new win.XMLHttpRequest();
  } else if (typeof win.ActiveXObject != 'undefined') {
    if (typeof arguments.callee.activeXString != 'string') {
      var versions = ['MSXML.XMLHttp.6.0', 'MSXML.XMLHttp.3.0', 'MSXML.XMLHttp'],
        i, len;
      for (i = 0, len = versions.length; i < len; i++) {
        try {
          new win.ActiveXObject(versions[i]);
          arguments.callee.activeXString = versions[i]
          break;
        } catch (err) {
          continue;
        }
      }
    }
    return new win.ActiveXObject(arguments.callee.activeXString);
  } else {
    throw new Error('No XHR Object Available!');
  }
}

})(window, window.document);
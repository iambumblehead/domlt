// Filename: domlt.js  
// Timestamp: 2013.12.24-17:13:49 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
//
// documentElement.getBoundingClientRect() is mature and widely supported:
// https://developer.mozilla.org/en-US/docs/Web/API/Element.getBoundingClientRect

var domlt = function (el) {
  var rect = el.getBoundingClientRect();
  return [rect.left, rect.top];
};

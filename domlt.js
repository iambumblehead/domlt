// Filename: domlt.js  
// Timestamp: 2017.06.19-15:05:55 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)  
//
// documentElement.getBoundingClientRect() is mature and widely supported:
// https://developer.mozilla.org/en-US/docs/Web/API/Element.getBoundingClientRect

export default elem => {
  const rect = elem instanceof Element &&
    elem.getBoundingClientRect()

  return rect ? [rect.left, rect.top] : [0,0]
}

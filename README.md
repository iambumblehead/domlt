domlt
=====
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

### Overview:

Nothing special here. Just a wrapper for returning left and top in an array.

 - domlt( _elem_ ); **get an array [t, l]**
 
 
```javascript 
var domlt = function (el) {
    var rect = el.getBoundingClientRect();
    return [rect.left, rect.top];
};
```
 

[0]: http://www.bumblehead.com                            "bumblehead"

---------------------------------------------------------
#### <a id="install"></a>Install:

domlt may be downloaded directly or installed through `npm`.

 * **npm**   

 ```bash
 $ npm install domlt
 ```

 * **Direct Download**
 
 ```bash  
 $ git clone https://github.com/iambumblehead/domlt.git
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

Tests are not automated and are performed by loading a document in the browser and using the browser console.

- load `test/index.html` in your browser and run tests from the console.


---------------------------------------------------------
#### <a id="license">License:

 ![scrounge](http://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

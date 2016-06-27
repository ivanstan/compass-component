# compass-component
Webcomponent capable of displaying azimuth in decimal degrees

##Installation
Import template.html into your main html document
```html
<link rel="import" href="component/compass/template.html">
```

###Usage 
Paste this snippet where you want to show compass
```html
<compass-view azimuth="352" radius="100"></compass-view>
```

###Preview
![alt text](https://i.imgur.com/u86ho5t.png?1 "Preview")


###Attributes overview

| Attribute     | Description   |
| ------------- |:-------------:|
| Azimuth       | Azumuth in decimal degrees (this attribute is observed, widget will be updated when this attribute is changed) |
| Radius        | Radius of widget in pixels      |


###The MIT License (MIT)

Copyright © 2016 Ivan Stanojevic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

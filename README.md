<style>
table {
    display:table;
    width:100%;
}
</style>

# compass-component
Webcomponents capable of displaying azimuth and elevation in decimal degrees

##Installation
Import following into your main html document to enable usage of components
```html
<script src="vendor/compass-component/javascript/BaseView.js"></script>
<link rel="import" href="vendor/compass-component/azimuth-view.html">
<link rel="import" href="vendor/compass-component/elevation-view.html">
```

###Usage 
Paste this snippet where you want to show compass
```html
<azimuth-view azimuth="352" radius="100"></compass-azimuth>
<elevation-view elevation="36" radius="100"></compass-elevation>
```

###Preview
Privious code will output following
<p align="center">
<img alt="Component preview" src="https://i.imgur.com/u86ho5t.png?1">
</p>


###Attributes overview

####Azimuth
| Attribute       | Description   |
| ----------------|:-------------:|
| Azimuth         | Azumuth in decimal degrees (*)      |
| Radius          | Radius of widget in pixels          |
| color-primary   | Primary Color HEX code (optional)   |
| color-secondary | Secondary Color HEX code (optional) |

####Elevation
| Attribute       | Description   |
| ----------------|:-------------:|
| Elevation       | Elevation angle in decimal degrees (*) |
| Radius          | Radius of widget in pixels             |
| color-primary   | Primary Color HEX code (optional)      |
| color-secondary | Secondary Color HEX code (optional)    |

(*) This attriubtes are observed, widget will be updated accordingly when this attribute is changed.

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

# compass-component
Webcomponent capable of displaying azimuth in decimal degrees

##Installation
Import template.html into your main html document
```html
<link rel="import" href="component/compass/template.html">
```

###Usage paste this snippet where you want to show compass
```html
<compass-view azimuth="352" radius="100"></compass-view>
```

###Attributes overview

| Attribute     | Description   |
| ------------- |:-------------:|
| Azimut        | Azumuth in decimal degrees (this attribute is observed, widget will be updated when this attribute is changed) |
| Radius        | Raduis of widget in pixels      |

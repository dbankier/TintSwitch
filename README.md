TintSwitch
==========

This module extends the Titanium Switch to allow changing the "ON" color from the default blue color to any defined color.

_UPDATED_: You can now change the on, off, and toggle tints as well as
the on and off images. API has changed. See the example.

**NOTE**: This module is for use with iOS 5 and above and iOS only.

Compiled module is available in the _Downloads_ section.


Usage
-----

Add the following to your tiapp.xml file:

```javascript
<modules>
    <module version="0.1" platform="iphone">com.yydigital.tintswitch</module> 
</modules>
```

Add this line in your app.js file:

```javascript
require('com.yydigital.tintswitch');
```

The module provides no public api. It's simply used for extending the TiUISwitch class provided by the Ti SDK with additional functionality.

You will then have a the `onTint`, `offTint`, `thumbTint`, `onImage`,
`offImage` that can be used as follows:

```javascript
var sw = Ti.UI.createSwitch({
  value: true,
  offTint: "red",
  onTint: "green",
  thumbTint: "blue",
  top: 50
});
```

```javascript
var sw2 = Ti.UI.createSwitch({
  value: true,
  offImage: "/off.png",
  onImage: "/on.png",
  onTint: 'purple',
  bottom: 50
});
```


Credits
-------

[TiViewShadow](https://github.com/omorandi/TiViewShadow) was used for guidance in building this module.

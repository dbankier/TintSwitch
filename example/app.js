// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.

// TODO: write your module tests here
var tintswitch = require('com.yydigital.tintswitch');
Ti.API.info("module is => " + tintswitch);

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var sw = Ti.UI.createSwitch({
  value: true,
  offTint: "red",
  onTint: "green",
  thumbTint: "blue",
  top: 50
});
win.add(sw);

var sw2 = Ti.UI.createSwitch({
  value: true,
  offImage: "/off.png",
  onImage: "/on.png",
  onTint: 'purple',
  top: 80
});
win.add(sw2);

var sw3 = Ti.UI.createSwitch({
  value: false,
  offTint: "red",
  onTint: "green",
  thumbTint: "grey",
  top: 110
});
win.add(sw3);

var sw4 = Ti.UI.createSwitch({
  value: false,
  offImage: "/off.png",
  onImage: "/on.png",
  onTint: 'purple',
  top: 140
});
win.add(sw4);





win.open();

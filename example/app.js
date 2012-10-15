// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.

// TODO: write your module tests here
var tintswitch = require('com.yydigital.tintswitch');
Ti.API.info("module is => " + tintswitch);

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'green'
});

var sw = Ti.UI.createSwitch({
  value: true,
  tint: "red"
});
win.add(sw);



win.open();

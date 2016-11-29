var rgbHex = require('rgb-hex');

function convertToHex(){
  var red = document.getElementById("red");
  var green = document.getElementById("green");
  var blue = document.getElementById("blue");
  var hexVal = rgbHex(parseInt(red.value), parseInt(green.value), parseInt(blue.value));
  document.getElementById("hex").innerHTML = hexVal;
  document.body.style.backgroundColor = "#" + hexVal;
}

window.onload = function(){
  document.getElementById("convert").addEventListener("click", convertToHex);
}

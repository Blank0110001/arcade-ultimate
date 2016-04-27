var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#072f85";

var object {
  height: 20,
  width: 100,
  x: 150,
  y: 400
}

ctx.fillRect( object.x, object.y, 100, 20);
ctx.fill();

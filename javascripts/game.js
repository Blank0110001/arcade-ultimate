var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#072f85";

var paddle {
  height: 20,
  width: 100,
  x: 150,
  y: 400
}

function renderPaddle(){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}
function run(){
    renderPaddle();
}

setInterval(run, 10);

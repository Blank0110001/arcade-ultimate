var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#072f85";

canvas.width = 400;
canvas.height = 500;

var paddleHeight = 20;
var paddleWidth = 100;
var paddleX = (canvas.width-paddleWidth)/2;

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

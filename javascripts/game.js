var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#072f85";

var paddleX = 150;
var paddleY = 480;

ctx.rect(paddleX, paddleY, 100, 20);
ctx.fill();

document.addEventListener('keydown', function(event) {
    //left
    if(event.keyCode == 37) {
        paddleX -= 1;
    }
    //right
    else if(event.keyCode == 39) {
        paddleX+= 1;
    }
});

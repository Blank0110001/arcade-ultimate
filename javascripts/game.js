var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#072f85";

var paddleX = 150;
var paddleY = 480;

ctx.rect(paddleX, paddleY, 100, 20);
ctx.fill();

var Keys = {
        left: false,
        right: false
    };

window.onkeydown = function(e) {
    var kc = e.keyCode;
    e.preventDefault();

    if (kc === 37) Keys.left = true;
    else if (kc === 39) Keys.right = true;
};

window.onkeyup = function(e) {
    var kc = e.keyCode;
    e.preventDefault();

    if (kc === 37) Keys.left = false;
    else if (kc === 39) Keys.right = false;
};

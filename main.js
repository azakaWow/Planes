var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



var x = 25;
var y = 365;

var dx = 0;
var dy = 0;

function drawBall() {
    ctx.beginPath();
    ctx.rect(x, y, 15, 5);
    ctx.fillStyle = "#dd0000";
    ctx.fill();
    ctx.closePath();
}

window.onkeyup = function(e) {
   
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 38) {
       if(dy != -2){
                dy -= 1;
            }
    }
    if (key == 40) {
        if(dy != 2){
            dy += 1;
        }
    }
    
        if (key == 37) {
            if(dx != -2){
                dx -= 1;
            }
        }
        if (key == 39) {
            if(dx != 2){
                dx += 1;
            }
        }
    }



function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    document.getElementById("x").innerHTML= "x = "+ x;
    document.getElementById("y").innerHTML= "y = " + y;

   if((x == canvas.width) || (x == canvas.width -1 ) ){
       document.getElementById("log").innerHTML= "triggered-right when dx was " + dx;
       x = 3;
   }
   else if( (x == 1) || (x == 2) || (x == 0) ){
    document.getElementById("log").innerHTML= "triggered-left when dx was " + dx;
       x = canvas.width-5;
   }
   else{
        x += dx;
    }
    
   if(y == 374){
       alert("You crashed");
       x = 25;
       y = 372;
       
       dx=0;
       dy=0;
       
   }
    
    if((y==0)||(y == -1)||(y == -2)){
        y+=3;
    }
    if(y>0){
        y+=dy;
    }
    
    
    
    
}

setInterval(draw, 10);
\\nothing

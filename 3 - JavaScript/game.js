var start;
var clicked;

document.getElementById("box").onclick = function(){
    clicked = Date.now();
    document.getElementById("showtime").innerHTML = (clicked-start)/1000+"s";
    document.getElementById("box").style.display = "none";
    drawBox(); 
}

function drawBox(){
    var time = Math.random() * 2000;
    setTimeout(function(){
        document.getElementById("box").style.backgroundColor = getRandomColor(); 
        document.getElementById("box").style.display = "block"; start = Date.now();
        document.getElementById("box").style.left = Math.random()*800 + "px";
        document.getElementById("box").style.right = Math.random()*800 + "px";
        document.getElementById("box").style.top = Math.random()*400 + "px";
        document.getElementById("box").style.bottom = Math.random()*400 + "px";
        
        if(Math.random() > 0.5){
            document.getElementById("box").style.borderRadius = "50%"; 
        }else{
            document.getElementById("box").style.borderRadius = "0px"; 
        }
    }, time);
    
}

function getRandomColor() {
    var color = "#";
    var letters = "0123456789ABCDEF";

    for(var i = 0 ; i < 6; i++){
        color += letters[Math.round(Math.random() * 16)];
    }
    return color;
}

drawBox();


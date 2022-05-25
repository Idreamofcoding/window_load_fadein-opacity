// var opacity = 0;
var intervalID = 0;

// document.getElementById("img1").addEventListener("load", fadeIn);

window.addEventListener("load", fadeIn);

function fadeIn() {
    intervalID = setInterval(show, 70)
}

function show() {
    var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"))
    if(opacity<1) {
        opacity = opacity + 0.1;
        img.style.opacity = opacity;
    }
    else {
        clearInterval(intervalID);
    }
}
var speed = document.querySelector(".speed");
var bar = document.querySelector(".speed-bar");
var video = document.querySelector(".flex");
speed.addEventListener("mousemove", function(e){
    var percent = (e.pageY - speed.offsetTop) / speed.offsetHeight;
    var height = Math.round(percent * 100) + "%";
    bar.style.height = height;
    var min = 0.4;
    var max = 4;
    var rate = percent * (max - min) + min;
    bar.textContent = rate.toFixed(2) + "x";
    video.playbackRate = rate;
})
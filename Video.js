const video = document.getElementById('Projectsvideo');
const Cards = document.querySelectorAll('.square');

var currentclip = "media/videos/SpaceTime.mp4";
var currentstoptime = 0;
var transparency = 0;
var Hovering = null;
var Hoveringtime = null;

var loop = setInterval(function(){
    Hovering = null;
    for (let i = 0; i < Cards.length; i++) {
        if (Cards[i].matches(':hover')) {
            if(Cards[i].getAttribute('video') != null){
                Hovering = true;
                currentclip = Cards[i].getAttribute('video');
                currentstoptime = Cards[i].getAttribute('stoptime');
            }
        }
    }


    if(Hovering){
        if(video.src.includes(currentclip) && video.currentTime < currentstoptime){
            transparency = (transparency + 0.01).clamp(0, 0.25);
        }
        else{
            transparency = (transparency - 0.04).clamp(0, 0.25);
        }
    }
    else{
        transparency = (transparency - 0.04).clamp(0, 0.3);
        if(transparency == 0){
            video.currentTime = 0
        }
    }

    video.style.opacity = transparency;

    if(video.src.includes(currentclip) == false){
        if(transparency == 0){
            video.src = currentclip;
        }
    }

}, 50);


Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };
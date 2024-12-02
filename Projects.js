//cards
var cards = [
    {
        Title: "Space Time",
        description: "Ensure you dont overheat while you race to the other side of the galaxy using the planets gravity.",
        video: "media/videos/SpaceTime.mp4",
        stoptime: 26,
        link1: "https://huskigame.itch.io/spacetime",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/SpaceTime.png",
        technologies: ["Unity", "C#"]
        
    },
    {
        Title: "Glitched Out",
        description: "Climb as high as you can reaching checkpoints as you go the checkpoint before being le avoiding the corruption.",
        video: "media/videos/GlitchedOut.mp4",
        stoptime: 16,
        link1: "https://huskigame.itch.io/glitchedout",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/GlitchedOut.png",
        technologies: ["Unity", "C#"]
    },
    {
        Title: "Hex Defender",
        description: "Defend their hexagonal base from waves of enemies using their powers obtainable by eating them??",
        video: "media/videos/HexDefender.mp4",
        stoptime: 26,
        link1: "https://huskigame.itch.io/hexagon-defender",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/HexDefender.png",
        technologies: ["Unity", "C#"]
    },
    {
        Title: "Just DICE-side",
        description: "An action dice game where you chose the side of the dice",
        video: "media/videos/JustDICESide.mp4",
        stoptime: 28,
        link1: "https://huskigame.itch.io/diceside",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/JustDICESide.png",
        technologies: ["Unity", "C#"]
    },
    {
        Title: "Split-Rebound",
        description: "Have you ever wished breakout made you feel like a ninja? If so, I've got the game for you",
        video: "media/videos/SplitRebound.mp4",
        stoptime: 22,
        link1: "https://huskigame.itch.io/split-rebound",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/SplitRebound.png",
        technologies: ["Unity", "C#"]
    },
    {
        Title: "Poison Factory",
        description: "brew and Replicate poisonous potions for an evil witch",
        video: "media/videos/PoisonFactory.mp4",
        stoptime: 35,
        link1: "https://huskigame.itch.io/poison-factory",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/PoisonFactory.png",
        technologies: ["Unity", "C#"]
    },
    {
        Title: "Paint Blaster",
        description: "Race against the clock to paint as much as you can copying the already painted drawing",
        video: "media/videos/PaintBlaster.mp4",
        stoptime: 22,
        link1: "https://huskigame.itch.io/paint-blaster",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/PaintBlaster.png",
        technologies: ["Unity", "C#"]
    },
    {
        Title: "Cargo In The Caribbean",
        description: "deliver cargo from island to island in these pirates infested waters",
        video: "media/videos/CargoInTheCaribbean.mp4",
        stoptime: 55,
        link1: "https://huskigame.itch.io/cargo",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/CargoInTheCaribbean.png",
        technologies: ["Unity", "C#"]
    },
    {
        Title: "Intersection",
        description: "Control the traffic lights to avoid a multi car crash",
        video: "media/videos/Intersection.mp4",
        stoptime: 30,
        link1: "https://huskigame.itch.io/intersection",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/Intersection.png",
        technologies: ["Unity", "C#"]
    },
    {
        Title: "Billy Basher",
        description: "Go out for a silly drive after a stressful day of work",
        video: "media/videos/BillyBasher.mp4",
        stoptime: 30,
        link1: "https://huskigame.itch.io/billy-basher",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/BillyBasher.png",
        technologies: ["Unity", "C#"]
    },
    {
        Title: "Monster Building",
        description: "Attack the people in this building to score points but be careful attacking the dark blue people will result in a game over",
        video: "media/videos/MonsterBuilding.mp4",
        stoptime: 30,
        link1: "https://huskigame.itch.io/monster-building",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/MonsterBuilding.png",
        technologies: ["Unity", "C#"]
    }
];

const ProjectsContainer = document.getElementById('ProjectsContainer');

function formatCard(item, index){return `
    <div class="square" data-index="${index}" video="${item.video}" id="card" stoptime="${item.stoptime}">
        <div class="card-content">
            <img src="${item.thumbnail}" class="project-thumbnail">
            <p class="project-title">${item.Title}</p>
            <p class="project-description">${item.description}</p>
            <div class="project-Buttons">
                <span class="Badge">
                    <img src="media/Logos/Unity.png" class="Badge-Logo">
                </span>
                <span class="Badge">
                    <img src="media/Logos/csharp.png" class="Badge-Logo">
                </span>
                <a href="${item.link1}" target='_blank' style="margin-right: 10px;">
                    <button class="project-play-Button">${item.link1Text}</button>
                </a>
            </div>
        </div>
    </div>`
}

content = "";
for (var i = 0; i < cards.length; i++){
    content += formatCard(cards[i], i + 1);
    content += "\n";
}

// Only add show more button on desktop
if (window.innerWidth >= 1000) {
    content += `<div class="square show-more-square" onclick="toggleShowMore()">
        <div class="card-content">
            <span>Show More</span>
            <span class="show-more-arrow">↓</span>
        </div>
    </div>`;
}

ProjectsContainer.innerHTML = content;

// Only initialize hide on desktop
if (window.innerWidth >= 1000) {
    setTimeout(() => {
        const projects = document.querySelectorAll('.square:not(.show-more-square)');
        projects.forEach((project, index) => {
            if (index >= 5) {
                project.hidden = true;
            }
        });
    }, 100);
}

let showingAllProjects = false;
function toggleShowMore() {
    if (window.innerWidth >= 1000) {
        showingAllProjects = !showingAllProjects;
        const projects = document.querySelectorAll('.square:not(.show-more-square)');
        const showMoreText = document.querySelector('.show-more-square .card-content span:first-child');
        const showMoreArrow = document.querySelector('.show-more-arrow');
        
        projects.forEach((project, index) => {
            if (index >= 5) {
                project.hidden = !showingAllProjects;
            }
        });
        
        showMoreText.textContent = showingAllProjects ? 'Show Less' : 'Show More';
        showMoreArrow.classList.toggle('up', showingAllProjects);
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    const isDesktop = window.innerWidth >= 1000;
    const projects = document.querySelectorAll('.square:not(.show-more-square)');
    const showMoreButton = document.querySelector('.show-more-square');
    
    if (!isDesktop) {
        // Show all projects on mobile
        projects.forEach(project => project.hidden = false);
        if (showMoreButton) showMoreButton.remove();
        showingAllProjects = false;
    } else if (!showMoreButton) {
        // Add show more button if switching to desktop
        const button = document.createElement('div');
        button.className = 'square show-more-square';
        button.onclick = toggleShowMore;
        button.innerHTML = `
            <div class="card-content">
                <span>Show More</span>
                <span class="show-more-arrow">↓</span>
            </div>
        `;
        ProjectsContainer.appendChild(button);
        
        // Hide projects after first 5
        projects.forEach((project, index) => {
            if (index >= 5) project.hidden = true;
        });
    }
});

let currentIndex = 0;

cards = document.getElementsByClassName('square');

function updateSlider(index) {
    if (screen.width > 1000) {
        index = 0;
    }
    const slider = document.querySelector('.slider');
    const offset = index * 100;
    slider.style.transform = `translateX(-${offset}%)`;    
}

//carousel
const slider = document.querySelector('.slider');
const hammer = new Hammer(slider);
currentIndex = 0;
hadmanualscroll = false;

hammer.on('swipeleft', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider(currentIndex);
    hadmanualscroll = true;
});

hammer.on('swiperight', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSlider(currentIndex);
    hadmanualscroll = true;
});

var scrollll = setInterval(function(){
    if(!hadmanualscroll){
        currentIndex = (currentIndex + 1 + cards.length) % cards.length;
        updateSlider(currentIndex);
    }
}, 5000);


var loop = setInterval(function(){
    updateSlider(currentIndex);
}, 40);

//Video
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
        if (Cards[i].matches(':hover') && screen.width > 1000) {
            if(Cards[i].getAttribute('video') != null){
                Hovering = true;
                currentclip = Cards[i].getAttribute('video');
                currentstoptime = Cards[i].getAttribute('stoptime');
            }
        }
        //--- Video on Mobile --- //
        else if(i == currentIndex && screen.width < 1000){
            Hovering = true;
            currentclip = Cards[i].getAttribute('video');
            currentstoptime = Cards[i].getAttribute('stoptime');
        }
    }


    if(Hovering){
        if(video.src.includes(currentclip) && video.currentTime < currentstoptime && video.readyState >= 3){
            transparency = (transparency + 0.025).clamp(0, 0.25);
        }
        else{
            transparency = (transparency - 0.05).clamp(0, 0.25);
        }
    }
    else{
        transparency = (transparency - 0.05).clamp(0, 0.25);
        if(transparency == 0){
            video.currentTime = 0
        }
    }
    
    if(video.src.includes(currentclip) == false){
        if(transparency == 0){
            video.src = currentclip;
        }
    }
    video.style.opacity = transparency;

}, 50);


Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };
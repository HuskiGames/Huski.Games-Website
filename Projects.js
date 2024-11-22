var cards = [
    {
        Title: "Space Time",
        description: "Ensure you dont overheat while you race to the other side of the galaxy using the planets gravity.",
        video: "media/videos/SpaceTime.mp4",
        stoptime: 26,
        link1: "https://huskigame.itch.io/spacetime",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/SpaceTime.png"
        
    },
    {
        Title: "Glitched Out",
        description: "Climb as high as you can reaching checkpoints as you go the checkpoint before being le avoiding the corruption.",
        video: "media/videos/GlitchedOut.mp4",
        stoptime: 17,
        link1: "https://huskigame.itch.io/glitchedout",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/GlitchedOut.png"
    },
    {
        Title: "Hex Defender",
        description: "Defend their hexagonal base from waves of enemies using their powers obtainable by eating them??",
        video: "media/videos/HexDefender.mp4",
        stoptime: 26,
        link1: "https://huskigame.itch.io/hexagon-defender",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/HexDefender.png"
    },
    {
        Title: "Just DICE-side",
        description: "An action dice game where you chose the side of the dice",
        video: "media/videos/JustDICESide.mp4",
        stoptime: 22,
        link1: "https://huskigame.itch.io/diceside",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/JustDICESide.png"
    },
    {
        Title: "Split-Rebound",
        description: "Have you ever wished breakout made you feel like a ninja? If so, I've got the game for you",
        video: "media/videos/SplitRebound.mp4",
        stoptime: 22,
        link1: "https://huskigame.itch.io/split-rebound",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/SplitRebound.png"
    },
    {
        Title: "Poison Factory",
        description: "brew and Replicate poisonous potions for an evil witch",
        video: "media/videos/PoisonFactory.mp4",
        stoptime: 22,
        link1: "https://huskigame.itch.io/poison-factory",
        link1Text: "Play Game",
        thumbnail: "media/thumbnails/PoisonFactory.png"
    }
];

const ProjectsContainer = document.getElementById('ProjectsContainer');

function formatCard(item, index){return `
    <div class="square" data-index="${index}" video="${item.video}" id="card" stoptime="${item.stoptime}">
        <div class="card-content">
            <img src="${item.thumbnail}" class="project-thumbnail">
            <p class="project-title">${item.Title}</p>
            <p class="project-description">${item.description}</p>
            <div class="project-play-Buttons">
                <a href="${item.link1}" style="margin-right: 10px;">
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
ProjectsContainer.innerHTML = content;

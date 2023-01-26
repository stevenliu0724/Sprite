let playerState = "Kamehame";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1000;
const CANVAS_HEIGHT = canvas.height = 300;

const playerImage = new Image();
playerImage.src = "trunk2.png";

const spriteWidth = 750;
const spriteHeight = 300;


let gameFrame = 0;
const staggerFrames = 15;
const spriteAnimations = [];
const animationStates = [
    {
        name: "Kamehame",
        frames: 6,
    },
    {
        name: "Power",
        frames: 2,
    },
    {
        name: "MoveR",
        frames: 5,
    },
    {
        name: "MoveL",
        frames: 4,
    },
    {
        name: "Jump",
        frames: 6,
    },
    
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, frameX, frameY, 750, 300, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();
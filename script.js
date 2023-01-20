let playerState = "Power";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 200;
const CANVAS_HEIGHT = canvas.height = 200;

const playerImage = new Image();
playerImage.src = "trunk.png";

const spriteWidth = 200;
const spriteHeight = 200;


let gameFrame = 0;
const staggerFrames = 7;
const spriteAnimations = [];
const animationStates = [
    {
        name: "Power",
        frames: 4,
    },
    {
        name: "Jump",
        frames: 6,
    },
    {
        name: "MoveR",
        frames: 3,
    },
    {
        name: "Attack1",
        frames: 7,
    },
    {
        name: "Attack2",
        frames: 3,
    },
    {
        name: "Attack3",
        frames: 9,
    },
    {
        name: "MoveL",
        frames: 3,
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
console.log(spriteAnimations);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, frameX, frameY, 200, 200, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();
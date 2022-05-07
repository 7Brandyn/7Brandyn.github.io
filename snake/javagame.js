const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');



class SnakePart{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;
const snakeParts = [];
let tailLength = 2;

let appleX = 5;
let appleY = 5;

let xVelocity = 0;
let yVelocity = 0;

let score = 0;

const hitSound = new Audio("./snake/hit.mp3");

const overSound = new Audio("./snake/gameover.wav")

//gameloop
function drawGame(){
    changeSnakePosition();
    let result = isGameOver();
    if(result){
        return;
    }

    clearScreen();

    checkAppleCollision();
    drawApple();
    drawSnake();

    drawScore();

    if(score > 2){
        speed = 11;
    }
    
    if(score > 5){
        speed = 15;
    }

    setTimeout(drawGame, 1000/ speed);
}

function isGameOver(){
    let gameOver = false;

    if(yVelocity === 0 && xVelocity === 0){
        return false;
    }

    //walls
    if(headX < 0 ){
        gameOver = true;
        overSound.play();
    }

    else if(headX === tileCount) {
        gameOver = true;
        overSound.play();
    }

    else if (headY < 0){
        gameOver = true;
        overSound.play();
    }

    else if(headY === tileCount) {
        gameOver = true;
        overSound.play();
    }

    for(let i = 0; i < snakeParts.length; i++){
        let part = snakeParts[i];
        if(part.x == headX && part.y === headY){
            gameOver = true;
            break;
        }
    }


    if(gameOver){
        ctx.fillStyle = "red";
        ctx.font = "50px Verdana";
    
    
        ctx.fillText("Game Over!", canvas.width / 13, canvas.height / 2);
    }

    return gameOver;
}

function drawScore(){
    ctx.fillStyle = "white";
    ctx.font = "10px Verdana"
    ctx.fillText("Score " + score, canvas.width - 50, 10);
} 

function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.clientWidth,canvas.height);
}

function drawSnake(){

    ctx.fillStyle = 'green';
    for(let i = 0; i < snakeParts.length; i++){
        let part = snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize)
    }

    snakeParts.push(new SnakePart(headX, headY)); //put an ditem at the end of the list next to the head
    while (snakeParts.length > tailLength){
        snakeParts.shift(); //remove the durthest item from the snake parts if we have mroe than our tail size
    }

    ctx.fillStyle = 'orange'
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize);
}

function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

function drawApple(){
    ctx.fillStyle = "red";
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize)
}

function checkAppleCollision(){
    if(appleX === headX && appleY == headY){
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tailLength++;
        score++;
        hitSound.play();
    }
}

document.body.addEventListener('keydown', keyDown);

function keyDown(event){
        //Google key event codes for keyboard.

        //up arrow key has an event code of 38.
    if(event.keyCode == 38){
        if(yVelocity == 1)
            return;
        yVelocity = -1;
        xVelocity = 0;
    }

        //donw arrow key has an event code of 40.
    if(event.keyCode == 40){
        if(yVelocity == -1)
            return;
        yVelocity = 1;
        xVelocity = 0;
    }

        //left arrow key has an event code of 37.
    if(event.keyCode == 37){
        if(xVelocity == 1)
            return;
        yVelocity = 0;
        xVelocity = -1;
    }

        //right arrow key has an event code of 39.
    if(event.keyCode == 39){
        if(xVelocity == -1)
            return;
        yVelocity = 0;
        xVelocity = 1;
    }
}

drawGame ();


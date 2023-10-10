// Game constants and Variables
let inputDir = {x:0,y:0};
const foodSound = new Audio('../../snake game/music/food.mp3');
const gameOverSound = new Audio('../../snake game/music/gameover.mp3');
const moveSound = new Audio('../../snake game/music/move.mp3');
const musicSound = new Audio('../../snake game/music/music.mp3');
let lastPaintTime = 0;
let speed = 2;
let score = 0;
let board = document.querySelector('.board');
let snakeArr = [
    {
        x: 13,
        y: 15,
    }
]
let food = {x: 5, y: 12,}
let highScoreVal = JSON.parse(localStorage.getItem("highscore")) || 0;
let container = document.querySelector('#container');
// Game Functions
function main(currentTime){
    window.requestAnimationFrame(main);
    // console.log(currentTime);
    if((currentTime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = currentTime;
    gameEngine();
}
function isCollide(snakeArr){
    for (let i = 1; i < snakeArr.length; i++) {
        // If the snake collides with itself
        if(snakeArr[0].x===snakeArr[i].x && snakeArr[0].y===snakeArr[i].y){
            return true;
        }
    }
    // If the snake collides with the wall
    if(snakeArr[0].x>18 || snakeArr[0].x<1 || snakeArr[0].y>18 || snakeArr[0].y<1){
        return true;
    }
}
function gameEngine(){
    // Showing highScore
    document.querySelector('.high-score').innerHTML = "High Score: "+highScoreVal;
    // Part 1: Updating the snake and Food
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        // Updating high score
        if(highScoreVal<score){
            highScoreVal=score;
            localStorage.setItem("highscore",highScoreVal);
        }
        inputDir = {x:0,y:0};
        alert("Game Over. Press any key to play again");
        snakeArr = [{x:13,y:15}]
        score = 0;
        speed = 2;
        document.querySelector('#score').innerHTML = "Score: "+score;
    }

    // If snake eats the food then increament score and regenerate food
    if(snakeArr[0].x===food.x && snakeArr[0].y===food.y){
        foodSound.play();
        speed+=1;
        score+=5;
        document.querySelector('#score').innerHTML = "Score: "+score;
        snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y+inputDir.y})
        let a = 1;
        let b = 18;
        food = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())}
    }
    // Moving the snake
    for (let i = snakeArr.length-2; i >=0; i--) {
        // const element = array[i];
        snakeArr[i+1]={...snakeArr[i]};
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;
    // Part 2: Display snake and food
    // Display snake
    board.innerHTML = "";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head');
        }else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })
    // Display food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}




// Main logic starts here
window.requestAnimationFrame(main);

window.addEventListener('keydown',(e)=>{
    // inputDir = {x:0,y:1};
    
    switch (e.key) {
        case "ArrowUp":
            // console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            musicSound.play();
            moveSound.play();
        break;
        case "ArrowDown":
            // console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            musicSound.play();
            moveSound.play();
            break;
        case "ArrowLeft":
            // console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            musicSound.play();
            moveSound.play();
            break;
        case "ArrowRight":
            // console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            musicSound.play();
            moveSound.play();
            break;
        default:
            break;
    }
})

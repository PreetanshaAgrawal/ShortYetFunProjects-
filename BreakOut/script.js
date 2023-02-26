const grid = document.querySelector('.grid');
const score = document.querySelector('#score');
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;
const boardHeight = 300;
const userStart = [230,10];
let currentPosition = userStart;
const ballStart = [270,40];
let ballCurrentPosition = ballStart;
let timeId;
const ballDiameter = 20;
let xDirection = 2;
let yDirection = 2;
let result = 0;

// create block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

// all my blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
]
// console.log(blocks);

// draw all my blocks
function drawBlocks() {

    for (let i = 0; i < 15; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
}

drawBlocks();

// add User
const user = document.createElement('div');
user.classList.add('user');
grid.appendChild(user);


// draw User
function drawUser(){
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

drawUser();

// move User
function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            if(currentPosition[0] > 0){
                currentPosition[0] -= 10;
                drawUser()
            }
            break;
        case 'ArrowRight':

            if(currentPosition[0] < boardWidth-blockWidth){
                currentPosition[0] += 10    
                drawUser();
            }
            break;
    }
}

document.addEventListener('keydown', moveUser);


// add ball
const ball = document.createElement('div');
ball.classList.add('ball');
grid.appendChild(ball);

function drawBall(){
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}

drawBall();

// move the ball

function moveBall(){
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();   
    checkCollisions();
}

timeId = setInterval(moveBall, 30);

// change the direction of the ball
function changeDirection(){
    if(xDirection == 2 && yDirection == 2){
        // xDirection = -2;
        yDirection = -2;
        return;
        // drawBall();
    }

    if(xDirection == 2 && yDirection == -2){
        xDirection = -2;
        return;
    }

    if(xDirection == -2 && yDirection ==-2) {
        yDirection = 2;
        return;
    }
    if(xDirection == -2 && yDirection ==2) {
        xDirection = 2;
        return;
    }
}

// check for collisions

function checkCollisions(){
    
    // check for block collision
    for(let i =0; i< blocks.length; i++){
        if(
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
            ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
        ){
            const allBlocks = document.querySelectorAll('.block');
            allBlocks[i].classList.remove('block');
            blocks.splice(i, 1);
            changeDirection();
            result++;
            score.innerHTML = result;

            //check for win 
            if(blocks.length == 0){
                score.innerHTML = 'You Won!';
                clearInterval(timeId);
                document.removeEventListener('keydown', moveUser);
            }
        }
    }
    
    // check for wall collision
    if(
        (ballCurrentPosition[0] >= boardWidth - ballDiameter) ||
     (ballCurrentPosition[1] >= boardHeight - ballDiameter) || 
     ballCurrentPosition[0] <= 0
     ){
        changeDirection();
    }


    // check for user collision
    if(
        (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
        (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight)
    ){
        changeDirection();
    }

    // check for game over
    if(ballCurrentPosition[1] <=0){
        clearInterval(timeId);
        score.innerHTML = "Game over! you Lose!";
        document.removeEventListener('keydown', moveUser)
    }
}

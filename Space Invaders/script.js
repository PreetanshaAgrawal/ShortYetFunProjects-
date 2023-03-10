const grid = document.querySelector('.grid');

for (let i = 0; i < 225; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
}

const squares = document.querySelectorAll('.grid div');
const result = document.querySelector('#result');
let currentShooterIndex = 202;

let width = 15;
let direction = 1;
let invaderId;
let goingRight = true;
let alienRemoved = [];

const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
]

function drawInvaders() {
    for (let i = 0; i < alienInvaders.length; i++) {

        if(!alienRemoved.includes(i)){
            squares[alienInvaders[i]].classList.add('invaders')
        }
    }
}

drawInvaders();

function removeInvaders() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove('invaders')
    }
}


squares[currentShooterIndex].classList.add('shooter');
function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter');
    switch (e.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width != 0) {
                currentShooterIndex -= 1
            }
            break;
        case 'ArrowRight':
            if (currentShooterIndex % width != width -1) {
                currentShooterIndex += 1
            }
            break;
    }
    squares[currentShooterIndex].classList.add('shooter');

}


function moveInvaders(){
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length-1] % width === width-1;

    removeInvaders();

    if(rightEdge && goingRight){
        for(let i=0; i < alienInvaders.length; i++){
            alienInvaders[i] += width + 1;
            direction = -1;
            goingRight = false;
        }
    }
    if(leftEdge && !goingRight){
        for(let i=0; i < alienInvaders.length; i++){
            alienInvaders[i] += width - 1;
            direction = 1;
            goingRight = true;
        }
    }
    
    for(let i = 0; i < alienInvaders.length; i++){
        alienInvaders[i] += direction;
    }

    drawInvaders();

    if(squares[currentShooterIndex].classList.contains('invaders', 'shooter')){
        result.innerHTML = "Game Over!"
        clearInterval(invaderId);
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        if(alienInvaders[i] > squares.length){
            result.innerHTML = "Game Over!"
            clearInterval(invaderId);
        }
    }
    if(alienInvaders.length == alienRemoved.length){
        result.innerHTML = "You Win!"
        clearInterval(invaderId);
    }
}

invaderId = setInterval(moveInvaders, 500)


document.addEventListener('keyup', moveShooter);


function shoot(e){
    let laserId 
    let currentLaserIndex = currentShooterIndex

    function moveLaser(){
        squares[currentLaserIndex].classList.remove('laser');
        currentLaserIndex -= width;
        squares[currentLaserIndex].classList.add('laser');

        if(squares[currentLaserIndex].classList.contains('invaders')){
            squares[currentLaserIndex].classList.remove('laser');
            squares[currentLaserIndex].classList.remove('invaders');
            squares[currentLaserIndex].classList.add('boom');

            setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 300);
            clearInterval(laserId);

            const alienRemovePos = alienInvaders.indexOf(currentLaserIndex);
            alienRemoved.push(alienRemovePos);
            // alienInvaders.splice(alienRemovePos, 1);
        }

        
    }

    switch(e.key){
        case 'ArrowUp':
            laserId = setInterval(moveLaser, 100);
    }
}

document.addEventListener('keydown', shoot);
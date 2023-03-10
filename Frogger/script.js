const scoreDisplay = document.querySelector('#result');
const timeLeftDisplay = document.querySelector('#time-left');
const startPauseBtn = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')
const carsRight = document.querySelectorAll('.cars-right')
const carsLeft = document.querySelectorAll('.cars-left')

let currentIndex = 76;
const width = 9;
let timerId;
let outcomeTimerId;


function moveFrog(e) {
    squares[currentIndex].classList.remove("frog");

    switch (e.key) {
        case 'ArrowLeft':
            if (currentIndex % width !== 0)
                currentIndex -= 1;
            break;
        case 'ArrowRight':
            if (currentIndex % width < width - 1)
                currentIndex += 1;
            break;

        case 'ArrowUp':
            if (currentIndex - width >= 0)
                currentIndex -= width;
            break;
        case 'ArrowDown':
            if (currentIndex + width < width * width)
                currentIndex += width;
            break;
    }

    squares[currentIndex].classList.add("frog")
}





let timer = 20;

// moveLogs

function autoMoveElement() {
    timer -= 1;
    timeLeftDisplay.innerHTML = timer;

    logsLeft.forEach(logLeft => moveLogsLeft(logLeft));
    logsRight.forEach(logRight => moveLogsRight(logRight));
    carsLeft.forEach(carLeft => moveCarsLeft(carLeft));
    carsRight.forEach(carRight => moveCarsRight(carRight));
}



function moveLogsLeft(logLeft) {
    switch (true) {
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1');
            logLeft.classList.add('l2');
            break;
        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2');
            logLeft.classList.add('l3')
            break;
        case logLeft.classList.contains('l3'):
            logLeft.classList.remove('l3');
            logLeft.classList.add('l4')
            break;
        case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4');
            logLeft.classList.add('l5')
            break;
        case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5');
            logLeft.classList.add('l1')
            break;
    }
}

function moveLogsRight(logRight) {
    switch (true) {
        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1');
            logRight.classList.add('l5');
            break;
        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2');
            logRight.classList.add('l4')
            break;
        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3');
            logRight.classList.add('l3')
            break;
        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4');
            logRight.classList.add('l2')
            break;
        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5');
            logRight.classList.add('l1')
            break;
    }
}

function moveCarsLeft(carLeft) {
    switch (true) {
        case carLeft.classList.contains('c1'):
            carLeft.classList.remove('c1');
            carLeft.classList.add('c2');
            break;
        case carLeft.classList.contains('c2'):
            carLeft.classList.remove('c2');
            carLeft.classList.add('c3')
            break;
        case carLeft.classList.contains('c3'):
            carLeft.classList.remove('c3');
            carLeft.classList.add('c1')
            break;
    }
}

function moveCarsRight(carRight) {
    switch (true) {
        case carRight.classList.contains('c1'):
            carRight.classList.remove('c1');
            carRight.classList.add('c3');
            break;
        case carRight.classList.contains('c2'):
            carRight.classList.remove('c2');
            carRight.classList.add('c1')
            break;
        case carRight.classList.contains('c3'):
            carRight.classList.remove('c3');
            carRight.classList.add('c2')
            break;
    }
}




function lose() {
    if (
        squares[currentIndex].classList.contains('c1') ||
        squares[currentIndex].classList.contains('l4') ||
        squares[currentIndex].classList.contains('l5') ||
        timer <= 0
    ) {
        scoreDisplay.innerHTML = "You Lose!"
        clearInterval(timerId);
        clearInterval(outcomeTimerId);
        squares[currentIndex].classList.remove('frog');
        document.removeEventListener('keyup', moveFrog);
    }
}

function win() {
    if (squares[currentIndex].classList.contains('ending-block')) {
        scoreDisplay.innerHTML = "You Win!"
        clearInterval(timerId);
        document.removeEventListener('keyup', moveFrog);
    }
}

function checkOutcomes(){
    lose();
    win();
}

startPauseBtn.addEventListener('click', function () {
    if(timerId){
        clearInterval(timerId);
        clearInterval(outcomeTimerId);
        timerId = null;
        outcomeTimerId = null;
        document.removeEventListener('keyup', moveFrog);
    }
    else{
        timerId = setInterval(autoMoveElement, 1000);
        outcomeTimerId = setInterval(checkOutcomes, 50);
        document.addEventListener('keyup', moveFrog);
    }
});
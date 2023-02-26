const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const time_left = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
function random_picker(){

    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];

    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}

// hitting the mole
squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.id === hitPosition) {
            result ++;
            score.innerHTML = result;
            hitPosition = null;
        }
    })
})


let timerId = null;
function mole_move(){
    timerId = setInterval(random_picker, 1000);
}

function countDown() {
    currentTime -= 1
    time_left.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("Game over! Your total score is: " + result)
    }
}

mole_move();
let countDownTimerId = setInterval(countDown, 1000)
// random_picker()


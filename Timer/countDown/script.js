const countdown = document.querySelector('.countDown');
const startbutton = document.querySelector('.startactive');
const stopbutton = document.querySelector('.pauseactive');
const resetbutton = document.querySelector('.resetactive');

let seconds = 0;
// let seconds = 7460;
let interval = null;

function timer() {
    seconds++;

    let secs = seconds % 60;
    let hr = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - (hr * 3600)) / 60);

    // let days = Math.floor(seconds / 86400)
    // countdown.textContent = `${days < 10 ? '0' : ''}${days} : ${hr < 10 ? '0' : ''}${hr} : ${min < 10 ? '0' : ''}${min} :${secs < 10 ? '0' : ''}${secs}`;

    countdown.textContent = `${hr < 10 ? '0' : ''}${hr} : ${min < 10 ? '0' : ''}${min} :${secs < 10 ? '0' : ''}${secs}`;
}

function startCountdown() {


    if (interval) return;

    interval = setInterval(() => {
            timer();
        }, 1000);

    console.log(interval);    
}



function stopCountDown() {
    clearInterval(interval);
    interval = null;
}

function resetCountDown() {
    stopCountDown();
    seconds = 0;
    countdown.textContent = '00 : 00 : 00';
}

startbutton.addEventListener('click', startCountdown);
stopbutton.addEventListener('click', stopCountDown);
resetbutton.addEventListener('click', resetCountDown);
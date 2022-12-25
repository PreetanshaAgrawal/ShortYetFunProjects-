const time = document.querySelector('.digital');
let am_pm;

function timer(){
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    am_pm = 'AM';
    if(hr > 12){
        hr -= 12;
        am_pm='PM'
    }
    if(hr==0){
        hr = 12;
        am_pm='AM'
    }
 
    time.textContent = `${hr<10 ? '0' : ''}${hr} : ${min < 10 ? '0' : ''}${min} : ${sec < 10 ? '0' : ''}${sec} ${am_pm}`;
}

setInterval(() => timer(), 1000);

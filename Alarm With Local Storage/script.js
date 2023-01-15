let alarmTurn = 1;
const timeDisplay = () => {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    display.innerHTML = `${hr < 10 ? '0' : ''}${hr} : ${min < 10 ? '0' : ''}${min} : ${sec < 10 ? '0' : ''}${sec}`;
}
let i=0;
while (i < localStorage.length) {
    let entries = Object.entries(localStorage)
    
    let html = `<div class="card">
        <div class="card-header">
          Do it
        </div>
        <div class="card-body">
          <h5 class="card-title">${entries[i][0]}</h5>
          <p class="card-text">${entries[i][1]}</p>
        
          <button class="btn btn-success edit-btn" data-toggle="modal" data-target="#editModal"value="${entries[i][0]}">Edit</button>
          <form class="d-inline">
          <button class="btn btn-danger delete_btn" value="${entries[i][0]}">Delete</button>
          </form>
          
        </div>
      </div>`

      alarmDisplay.innerHTML += html;
      i++;
}  

function submitHandling(e){

    // console.log(e);
    e.preventDefault();
    // const dt = new Date(setTime.value)
    // const time =[display.innerHTML.split(':')]
    // let hr = setTime.value;
    // let min = setTime1.value;
    // let alarmSettingMS = hr * min * 60 * 1000;
    // let currTimeMS = new Date().getTime();
    // let totalTimeMs = (alarmSettingMS + currTimeMS) - currTimeMS;
    // // console.log(currTimeMS);
    // // console.log(totalTimeMs);
    // // console.log(alarmSettingMS);
    // if(totalTimeMs >= 0){ 
    //     setTimeout(() => {
    //     console.log("Alarm Ringing");
    // }, totalTimeMs);

    const alarmHr = setTime.value;
    const alarmMin = setTime1.value;
    localStorage.setItem(alarmTurn, JSON.stringify([alarmHr, alarmMin]));
    alarmTurn += 1;
    console.log(localStorage);

    alarmDisplay.innerHTML = `
        <h1>Alarm${alarmTurn}</h1>
        <p>${alarmHr} : ${alarmMin}</p>
        <button onclick = ${alarmDisplay.innerHTML = ""}>Delete</button>
    `
    setTime.value = "";
    setTime1.value = "";
    setInterval(() =>{ 
        let dt = new Date();
        let hr = dt.getHours();
        let min = dt.getMinutes();
        let sec = dt.getSeconds();

        let time = `${hr<10 ? '0' :''}${hr} : ${min<10 ? '0' :''}${min} : ${sec<10 ? '0' :''}${sec}`;
        let alarmTime = `${alarmHr} : ${alarmMin} : 00`;

        if(time == alarmTime){
            alert("alarm ringing");
        }
    }, 1000)
}

setInterval(timeDisplay, 1000);

createAlarm.addEventListener('click', submitHandling);
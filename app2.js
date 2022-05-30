function getTime(){
    const currentTime = new Date();
    var hour = currentTime.getHours();
    var min = currentTime.getMinutes();
    var sec = currentTime.getSeconds();
    if (hour < 10){
        hour = "0" + hour;
    }
    if (min < 10){
        min = "0" + min;
    }
    if (sec < 10){
        sec = "0" + sec;
    }
    document.getElementById('hour').innerHTML = hour + ':';
    document.getElementById('min').innerHTML = min + ':';
    document.getElementById('sec').innerHTML = sec;
}

setInterval(getTime,1000)
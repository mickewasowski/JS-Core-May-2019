function solve(steps, footprintInMeters, speedInKmH) {
    let distance = steps * footprintInMeters;
    let speedInMS = speedInKmH / 3.6;

    let walkedTimeInSec = Math.round(distance / speedInMS);

    let restedTimeInSec = Math.floor(distance / 500);
    walkedTimeInSec += restedTimeInSec * 60;

    let seconds = walkedTimeInSec % 60;
    let minutes = ((walkedTimeInSec - seconds) / 60) % 60;
    let hours = Math.floor((walkedTimeInSec - seconds - (minutes * 60)) / 3600);
   

    formatedOutput(hours,minutes,seconds);

    function formatedOutput(hours,minutes,seconds){
        if (hours < 10) {
            hours = '0' + `${hours}`
        }
        if (minutes < 10) {
            minutes = '0' + `${minutes}`
        }
        if (seconds < 10) {
            seconds = '0' + `${seconds}`
        }

        console.log(`${hours}:${minutes}:${seconds}`)
    }

}

solve(12000, 0.70, 5.5)

let countMilli = document.getElementById('millisecond')
let countSec = document.getElementById('second');
let countMin = document.getElementById('minute')
let countHour = document.getElementById('hour')

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.stop.onclick = () => stop();
document.form_main.reset.onclick = () => reset();

function start() {
    stop();
    cron = setInterval(() => {timer();
    }, 10);
}

function stop() {
    clearInterval(cron);
}

function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;

    countHour.innerText = '00';
    countMin.innerText = '00';
    countSec.innerText = '00';
    countMilli.innerText = '000';

    stop();
}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if(second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }

    countHour.innerText = returnData(hour);
    countMin.innerText = returnData(minute);
    countSec.innerText = returnData(second);
    countMilli.innerText = returnData(millisecond);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}
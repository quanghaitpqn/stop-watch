var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var interval;
var isRunning = false;

function startTimer() {
    if (!isRunning) {
        interval = setInterval(runTimer, 10);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(interval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("display").innerHTML = "00:00:00";
}

function runTimer() {
    milliseconds += 10;

    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    var h = hours < 10 ? "0" + hours : hours;
    var m = minutes < 10 ? "0" + minutes : minutes;
    var s = seconds < 10 ? "0" + seconds : seconds;
    var ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    document.getElementById("display").innerHTML = h + ":" + m + ":" + s + "." + ms;
}

document.getElementById("start-btn").addEventListener("click", startTimer);
document.getElementById("stop-btn").addEventListener("click", stopTimer);
document.getElementById("reset-btn").addEventListener("click", resetTimer);
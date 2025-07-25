let ten = document.getElementById("ten")
let twenty = document.getElementById("twenty")
let thirty = document.getElementById("thirty")
let timer = document.getElementById("timer")
let min = 0;
let sec = 0;
let time; // global variable to control setInterval

ten.onclick = () => {
    clearInterval(time); // stop any running timer
    min = 9;
    sec = 60;
    time = setInterval(() => {
        sec--;
        if (sec == 0) {
            min--;
            sec = 59;
        }

        timer.textContent = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
        console.log(timer)

        if (min < 0) {
            sec = 0
            min = 0
            timer.textContent = min + "0" + ":" + sec + "0"
            clearInterval(time)
        }
    }, 1000)
}

twenty.onclick = () => {
    clearInterval(time);
    min = 19;
    sec = 60;
    time = setInterval(() => {
        sec--;
        if (sec == 0) {
            min--;
            sec = 59
        }
        timer.textContent = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
        console.log(timer)

        if (min < 0) {
            sec = 0
            min = 0
            timer.textContent = min + "0" + ":" + sec + "0"
            clearInterval(time)
        }
    }, 1000)
}

thirty.onclick = () => {
    clearInterval(time);
    min = 29;
    sec = 60;
    time = setInterval(() => {
        sec--;
        if (sec == 0) {
            min--;
            sec = 59
        }
        timer.textContent = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
        console.log(timer)
        if (min < 0) {
            sec = 0
            min = 0
            timer.textContent = min + "0" + ":" + sec + "0"
            clearInterval(time)
        }
    }, 1000)
}

function timer_start(time) {

    // timer let's gooo
    setInterval(function () {
        console.log("Time remaining: " + time);
        var timer = document.createElement("timer");

        time--;
        var min = Math.floor(time / 60);
        var sec = time % 60; // fancy timer math with remainder and so on.
        if (min < 10)
            min = "0" + min;
        if (sec < 10)
            sec = "0" + sec;
        document.getElementById("timer").innerHTML = min + ":" + sec;
        if (time == 0)
            window.location.href = '/iwt/pages/landing/';
    }, 1000);
}

// redirect
function skip_timer() {
    window.location.href = '/iwt/pages/landing/';
}
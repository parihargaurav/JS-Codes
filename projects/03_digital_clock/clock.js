const clock = document.getElementById('clock');

// controlling the event
setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    }, 1000);


    
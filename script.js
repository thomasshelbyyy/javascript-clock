function getCurrentTime() {
    // Get HTML elements
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    const session = document.getElementById('session');
    const htmlDate = document.getElementById('date');

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let date = new Date();
    let dd = date.getDate();
    let day = days[date.getDay()];
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let sess = "AM";

    if(hh == 0) {
        hh = 12;
    }

    if(hh > 12) {
        hh = hh - 12;
        sess = "PM";
    }
    month = (month < 10) ? "0" + month : month;
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    htmlDate.innerHTML = day + " " + dd + "-" + month + "-" + year;
    hour.innerHTML = hh;
    minute.innerHTML = mm;
    second.innerHTML = ss;
    session.innerHTML = sess;

    setInterval(function() {
        getCurrentTime();
    }, 1000);

}

getCurrentTime();

function getCountDown() {
    const newYearHTML = document.getElementById('new-year');
    const countdownHTML = document.getElementById('countdown');

    let date = new Date();
    let year = date.getFullYear() + 1;
    let today = date.getTime();
    let newYear = new Date('Jan 01, 2024 00:00:00').getTime();
    let distance = newYear - today;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000  * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    newYearHTML.innerHTML = year;
    countdownHTML.innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds";

    setInterval(function() {
        getCountDown();
    }, 1000);
}

getCountDown();
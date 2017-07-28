function startTime() {
    var today = new Date(),
        num_month = today.getMonth(),
        day = today.getDate(),
        num_weekday = today.getDay(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds(),
        ampm = hour >= 12 ? "PM" : "AM",
        week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        months_year = ["January", "February", "March", "April", "May", "June", "July", "August",
                       "September", "October", "November", "December"];

    hour = hour % 12;
    hour = hour ? hour : 12;
    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);

    weekday = week[num_weekday];
    month = months_year[num_month];

    document.querySelector('.hour').innerHTML = hour + ":" + min;
    document.querySelector('.ampm').innerHTML = ampm;
    document.querySelector('.sec').innerHTML = sec;
    document.querySelector('#date div:first-of-type').innerHTML = weekday;
    document.querySelector('#date div:nth-of-type(2)').innerHTML = month;
    document.querySelector('#date div:last-of-type').innerHTML = day;

    setTimeout(startTime, 500);
}

function checkTime(i) {
    return i.toString().padStart(2, "0");
}

startTime();
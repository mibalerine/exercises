function startTime() {
    var today = new Date();
    var num_month = today.getMonth();
    var day = today.getDate();
    var num_weekday = today.getDay();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = h >= 12 ? "PM" : "AM";

    h = h % 12;
    h = h ? h : 12;
    h = checkTime(h);
    //h = h < 10 ? "0" + h : h;

    m = checkTime(m);
    s = checkTime(s);

    var week = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
    weekday = week[num_weekday];

    var months_year = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    month = months_year[num_month];

    document.getElementById('hour').innerHTML =
    h + ":" + m;
    document.getElementById('ampm').innerHTML = ampm;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('weekday').innerHTML = weekday;
    document.getElementById('month').innerHTML = month;
    document.getElementById('monthday').innerHTML = day;

    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function showDate() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var hour = date.getHours();
    var minute = date.getMinutes();

    document.getElementById("sp-date").innerHTML = day;
    document.getElementById("sp-month").innerHTML = month;
    document.getElementById("sp-year").innerHTML = year;

    document.getElementById("sp-hour").innerHTML = hour;
    document.getElementById("sp-minute").innerHTML = minute;
}
var countDownDate = new Date("Oct 28, 2022 16:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (days < 10) {
        days = '0' + days;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer1").innerHTML = "EXPIRED";
    }
    else {
        document.getElementById("timer1").innerHTML = days + " วัน " + hours + " ชั่วโมง"
        document.getElementById("timer2").innerHTML = minutes + " นาที " + seconds + " วินาที ";
    }

}, 1000);
var countDownDate = new Date("Mar 31, 2023 16:00:00").getTime();

var x = setInterval(function () {
    function pickHex(days) {
        var color1 = [28, 165, 16]; //green
        var color2 = [226, 13, 13]; //red
        if (days > 20) {
            return "rgb(28, 165, 16)";
        }
        if (days >= 10) {
            days -= 10;
            color2 = [255, 133, 27];//yellow
        }
        else {
            color1 = [255, 133, 27];//yellow
        }
        var w1 = days / 10;
        var w2 = 1 - w1;
        var rgb = "rgb(" + Math.round(color1[0] * w1 + color2[0] * w2) +
            ", " + Math.round(color1[1] * w1 + color2[1] * w2) + ", " +
            Math.round(color1[2] * w1 + color2[2] * w2) + ")";
        return rgb;
    }
    var check = document.getElementById("timer1");
    if (!check) return;
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
        document.getElementById("timer1").innerHTML = "หมดเวลาถอนแล้ว";
        document.getElementById("timerText").innerHTML = "แต่คุณมีเวลาสำหรับการลาออกเสมอ!";
    }
    else {
        document.getElementById("timer1").innerHTML = days + " วัน " + hours + " ชั่วโมง"
        document.getElementById("timer2").innerHTML = minutes + " นาที " + seconds + " วินาที ";
        document.getElementById("timer1").style.color = pickHex(days);
        document.getElementById("timer2").style.color = pickHex(days);
    }

}, 1000);
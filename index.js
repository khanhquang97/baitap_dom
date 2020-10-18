
//bai6

var btnBlue = document.querySelector('div#backgroundColor button.js-btn-blue');
var btnRed = document.querySelector('div#backgroundColor button.js-btn-red');
  
console.log(btnBlue, btnRed);
 
function selectColor(color, rgb){
     color.addEventListener('click', () => {
        document.bgColor = rgb;
     });
 }
selectColor(btnBlue, 'blue');
selectColor(btnRed, 'red');


//bai10
var dots = document.querySelector('div#showMore span.threeDots');
var moreText = document.querySelector('div#showMore span.more');
var btnText = document.querySelector('div#showMore button.js-btn-more')

console.log(dots, moreText, btnText)

btnText.addEventListener('click', () => {
     if (dots.style.display === "none") {
        dots.style.display = "inline";
         btnText.innerHTML = "Show more";
         moreText.style.display = "none";
    } else {
         dots.style.display = "none";
         btnText.innerHTML = "Show less";
         moreText.style.display = "inline";
       }
 })

//bai13

var hours = 0;
var minute = 0;
var seconds = 0;
function setupTime () {
    seconds++
    if (seconds > 59) {
        minute++
        seconds = 0;
    }
    if (minute > 59) {
        hours++
        minute = 0
    }
    display()
}

function display () {
    var setHours = hours;
    var setMinute = minute;
    var setSeconds = seconds;
    if (seconds < 10) {
        setSeconds = '0' + seconds
    }
    if (minute < 10) {
        setMinute = '0' + minute
    }
    if (hours < 10) {
        setHours = '0' + hours
    }
    clock.innerHTML = setHours + ':' + setMinute + ':' + setSeconds
}
var clock = document.querySelector(".clock")
var start = document.querySelector(".start")
var stops = document.querySelector(".stop")
var reset = document.querySelector(".reset")
console.log(clock, start, stops, reset)
var timer;
start.addEventListener('click', function() {
    timer = setInterval(setupTime, 1000)
})
stops.addEventListener('click', function() {
    timer = clearInterval(timer)
})
reset.addEventListener('click', function() {
    timer = clearInterval(timer)
    seconds = 0
    minute = 0
    hours = 0
    clock.innerHTML = '00:00:00'
})

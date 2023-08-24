/*
function rotateSecondsHand(){
    const secondHandElement = document.querySelector('.clock-seconds-hand')
    let angle = 270;
    function rotateLineOneSecond(){
        angle += 1;
        secondHandElement.style.transform = `rotate(${angle}deg)`
    }
    
}

function rotateMinutesHand(){
    const minuteHandElement = document.querySelector('.clock-minutes-hand')
    let angle = 270;
    function rotateLineOneMinute(){
        angle += 1;
        minuteHandElement.style.transform = `rotate(${angle}deg)`
    }
    setInterval(rotateLineOneMinute, 10000);
}

function rotateHoursHand(){
    const hourHandElement = document.querySelector('.clock-hours-hand')
    let angle = 270;
    function rotateLineOneHour(){
        angle += 1;
        hourHandElement.style.transform = `rotate(${angle}deg)`
    }
    setInterval(rotateLineOneHour, 600000);
}
*/

let secondAngle = 270;
let sixTimesMinuteAngle = 6*270;
let hourAngle = 270;

function rotateClock(){
    const secondHandElement = document.querySelector('.clock-seconds-hand');
    const minuteHandElement = document.querySelector('.clock-minutes-hand');
    const hourHandElement = document.querySelector('.clock-hours-hand');

    secondAngle += 6;
    secondHandElement.style.transform = `rotate(${secondAngle}deg)`;

    sixTimesMinuteAngle += 1;
    if(sixTimesMinuteAngles % 6 === 0){
        minuteHandElement.style.transform = `rotate(${sixTimesMinuteAngle/6}deg)`;
    }
    
    
    hourAngle += 0.0016;
    hourHandElement.style.transform = `rotate(${hourAngle}deg)`;

    setInterval(rotateClock, 1000);
}

rotateClock();

function rotateSecondsHand(){
    const secondHandElement = document.querySelector('.clock-seconds-hand')
    let angle = 270;
    function rotateLineOneSecond(){
        angle += 1;
        secondHandElement.style.transform = `rotate(${angle}deg)`
    }
    setInterval(rotateLineOneSecond, 166.67);
}

function rotateMinutesHand(){
    const minuteHandElement = document.querySelector('.clock-seconds-hand')
    let angle = 270;
    function rotateLineOneMinute(){
        angle += 1;
        secondHandElement.style.transform = `rotate(${angle}deg)`
    }
    setInterval(rotateLineOneSecond, 10000);
}

function rotateHoursHand(){
    const secondHandElement = document.querySelector('.clock-seconds-hand')
    let angle = 270;
    function rotateLineOneSecond(){
        angle += 1;
        secondHandElement.style.transform = `rotate(${angle}deg)`
    }
    setInterval(rotateLineOneSecond, 600000);
}

rotateSecondsHand();
rotateMinutesHand();
rotateHoursHand();

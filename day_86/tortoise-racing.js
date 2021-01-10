function race(v1, v2, g) {  
    let speedOfClosingGap = v2 - v1;
    let timeToCloseGap = g / speedOfClosingGap * 3600;

    let result = [];
    let hours = 0,
        minutes = 0,
        seconds = 0;
    if(timeToCloseGap >= 3600){
        hours = Math.round(timeToCloseGap / 3600);
        timeToCloseGap = timeToCloseGap - hours * 3600;
        result.push(hours);
    } else {
        result.push(0);
    }
    if(timeToCloseGap < 3600 && timeToCloseGap > 59){
        minutes = Math.floor(timeToCloseGap / 60); 
        timeToCloseGap -= minutes * 60;
        result.push(minutes)
    } else {
        result.push(0)
    }
    if(timeToCloseGap < 60){
        seconds = Math.round(timeToCloseGap); 
        result.push(seconds)
    } else {
        result.push(0)
    }
    
    return result;
}

// console.log(race(720, 850, 70));
// console.log(race(80, 91, 37))
// console.log(race(80, 100, 40));
console.log(race(820, 81, 550))
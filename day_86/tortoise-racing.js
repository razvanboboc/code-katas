function race(v1, v2, g) {  
    let speedOfClosingGap = v2 - v1;
    let timeToCloseGap = g / speedOfClosingGap * 3600;
    console.log(timeToCloseGap)
    let result = [];
    let hours = 0,
        minutes = 0,
        seconds = 0;
    if(timeToCloseGap >= 3600){
        timeToCloseGap /= 3600;
        hours = timeToCloseGap;
        result.push(hours);
    }
    if(timeToCloseGap < 3600 && timeToCloseGap > 59){
        timeToCloseGap /= 60;
        minutes = Math.round(timeToCloseGap); 
        result.push(minutes)
    }
    if(timeToCloseGap < 60){
        seconds = timeToCloseGap - minutes; 
        result.push(seconds)
    }
    
    return result;
}

console.log(race(720, 850, 70));
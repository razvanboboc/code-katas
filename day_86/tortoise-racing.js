function race(v1, v2, g) {  
    speedOfClosingGap = v2 - v1;
    console.log(speedOfClosingGap)
    timeToCloseGap = g / speedOfClosingGap * 3600;
    console.log(timeToCloseGap)
    console.log(speedOfClosingGap * timeToCloseGap / 60)
    return speedOfClosingGap * timeToCloseGap;
}

console.log(race(720, 850, 70));
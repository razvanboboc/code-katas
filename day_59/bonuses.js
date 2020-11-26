bonus = function(arr, s) {
    let sum = 0;
    arr.forEach(e => sum += e);
    let bonusPerDay = Math.floor(s / sum);
    // return arr.map(e => Math.floor(e * bonusPerDay));
    return bonusPerDay;
}

console.log(bonus([18, 15, 12], 851));
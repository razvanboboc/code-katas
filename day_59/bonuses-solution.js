bonus = function(arr, s) {
    let total = arr.reduce((a,c) => a + 1/c, 0);
    console.log(total);
    return arr.map(e => Math.round(s*(1/e)/total))
}

console.log(bonus([18, 15, 12], 851));
// console.log(bonus([ 6, 15, 23 ], 22156))
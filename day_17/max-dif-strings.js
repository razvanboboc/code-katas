function mxdiflg(a1, a2) {
    let maxDiff = -1;
    for(let i = 0; i < a1.length; i++){
        for(let j = 0; j < a2.length; j++){
            maxDiff = Math.max(maxDiff, Math.abs(a1[i].length - a2[j].length)); 
        }
    }
    return maxDiff;
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 'should return 13');
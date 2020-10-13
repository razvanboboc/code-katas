function solve(s) {
    //split the strings based upon the appeareances of vowels.
    s = s.split(/[aeiou]/).filter(x => x);
    //init a max variable
    let maxValue = -1;
    //go through each element of the array
    for(let i = 0; i < s.length; i++){
        //we calculate the value of each element of the newly formed array 
        //based on the formula [a-z] - 31;
        let stringValue = 0;
        for(let j = 0; j < s[i].length; j++){
            stringValue += s[i].charCodeAt(j) - 96;
        }
        //compare with maxValue
        maxValue = Math.max(maxValue, stringValue);
    }
    //return max value
    return maxValue;
};

console.log(solve("zodiac"),26);
console.log(solve("chruschtschov"),80);
console.log(solve("khrushchev"),38);
console.log(solve("strength"),57);
console.log(solve("catchphrase"),73);
console.log(solve("twelfthstreet"),103);
console.log(solve("mischtschenkoana"),80);
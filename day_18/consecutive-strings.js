function longestConsec(strarr, k) {
    if(k > strarr.length || k <= 0){
        return '';
    }
    //we have to memorise the biggest string 
    let longestString = '';
    //and also take into account the maximum length
    let maxLength = 0;
    //go through each element of the array
    for(let i = 0; i < strarr.length; i ++){
        //at each iteration we have to actually build an array out of all the next k - 1 elements
        let consecutiveStrings = [];
        consecutiveStrings.push(strarr[i]);
        for(let j = i + 1; j < i + k && j < strarr.length; j++) {
            consecutiveStrings.push(strarr[j]);
        }
        //we compare the size of the newly built array
        //with the max length 
        //if it is bigger we memorise it
        if(consecutiveStrings.join('').length > maxLength ){
            maxLength = consecutiveStrings.join('').length;
            longestString = consecutiveStrings.join('');
        }
    }
    return longestString;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3), "")
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
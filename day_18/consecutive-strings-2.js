//another way of solving consecutive-strings
//we memorise the positions for the longest length of strings
//and we build  it at the end
//this solution is more optimal

function longestConsec(strarr, k) {
    if(k > strarr.length|| k <= 0){
        return "";
    }

    let maxLength = 0;
    let pos1 = -1;
    let pos2 = -1;
    for(let i = 0; i <= strarr.length - k  ; i++){
        let currentLength = 0;
        for(let j = i; j <= i + k - 1; j++)
        {
            currentLength += strarr[j].length;
        }
        if(currentLength > maxLength){
            maxLength = currentLength;
            pos1 = i;
            pos2 = i + k - 1;
        }
    }
    let result = "";

    for(let i = pos1; i <= pos2; i++){
        result += strarr[i];
    }

    return result;
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
function decipherThis(str) {
  return str
    .split(" ")
    .map((word) =>{
        let firstChar = String.fromCharCode(parseInt(word.slice(0,3)));
        let otherCharExist = 0;
        let charCodeIndex;
        word = word.split('');
        for(let i = 0; i < word.length; i++){
            if (!Number.isInteger(parseInt(word[i]))) {
                charCodeIndex = i;
                let temp = word[i];
                word[i] = word[word.length - 1];
                word[word.length - 1] = temp;
                otherCharExist = 1;
                break;
            }
        }
        if(otherCharExist){
            return firstChar + word.join('').substring(charCodeIndex);
        } else {
            return firstChar;
        }
    }).join(' ');
}

console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"),
  "Have a go at this and see how you do"
);

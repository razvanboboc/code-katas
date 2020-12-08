function isPangram(n){
    let alphabet = [];
    n = n.split('');
    n.forEach(e => {
        if(e.toUpperCase() != e.toLowerCase() && !alphabet.includes(e.toLowerCase())){
            alphabet.push(e.toLowerCase());
        }
    });
    console.log(alphabet);
    return alphabet.length === 26 ? true :  false;
}

var string1 = "This is not a pangram."
console.log(isPangram(string1));
var string2 = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string2));
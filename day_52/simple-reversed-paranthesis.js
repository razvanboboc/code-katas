function solve(s){
    s = s.split('');
    let counter = 0;
    let changed = 0;
    if(s.length % 2 !== 0){
        return -1;
    }
    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            counter++;
        }
        if(s[i] === ")" && counter !== 0){
            counter--;
        } 
        if(s[i] === ")" && counter === 0){
            s[i] === "(";
            changed++;
            counter++;
        }
        
    }
    return counter;
}


// console.log(solve("())()))))()()("));
// ( ) ) ( ) ) ) ) ) ( ) ( ) ( ( ( 
// // console.log(solve(")()("));
// console.log(solve("((()"));
console.log(solve("())((("));
// ( ) ) ( ( ( 

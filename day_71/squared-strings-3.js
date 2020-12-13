function rot90Clock(strng) {
    let result = [];
    strng = strng.split('\n');
    strng.map(x => x.split(''));
    for(let i = strng.length - 1; i >= 0; i--){
        let wordArray = [];
        for(let j = strng.length - 1; j >= 0; j--){
            wordArray.push(strng[j][i]);
        }
        wordArray = wordArray.join('') + '\n';
        result.push(wordArray);
    }
    return (result.reverse().join('')).slice(0,result.join('').length - 1);
}
function diag1Sym(strng) {
    let result = [];
    strng = strng.split('\n');
    strng.map(x => x.split(''));
    for(let i = 0; i < strng.length; i++){
        let wordArray = [];
        for(let j = 0; j < strng.length; j++){
            wordArray.push(strng[j][i]);
        }
        wordArray = wordArray.join('') + '\n';
        result.push(wordArray);
    }
    return (result.join('')).slice(0,result.join('').length - 1);
}
function selfieAndDiag1(strng) {
    let diag1 = diag1Sym(strng).split('\n');
    strng = strng.split('\n').map((x, i) => x + '|' + diag1[i] + '\n').join('');
    return strng.substring(0, strng.length - 1);
}

function oper(fct, s){
    return fct(s);
}

// console.log(oper(diag1Sym, "abcd\nefgh\nijkl\nmnop"));
console.log(oper(rot90Clock, "abcd\nefgh\nijkl\nmnop"));
// console.log(oper(selfieAndDiag1, "abcd\nefgh\nijkl\nmnop"));
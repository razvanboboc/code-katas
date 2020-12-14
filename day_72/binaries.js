function code(strng) {
    strng = strng.split('');
    result = strng.map(x => {
        x = getBinary(x).split('');
        initialSize = x.length;
        x.unshift('1');
        for(let i = 0; i < initialSize - 1; i++){
            x.unshift('0');
        }
        return x.join('')
    });
    return result.join('');
}

function decode(str) {
    // str = str.substring(str.indexOf('1'), str.length).split('').reverse();
    let result = [];
    let counter = 0;
    let number = 0;
    console.log(str);
    str = str.split('').reverse().join('');
    for(let i = 0; i < str.length; i++){
        if(str[i] === '0'){
            counter++;    
        }else {
            counter++;
            number += Math.pow(2, counter);
            result.push(number);
            strng = strn.slice(i + counter);
            i = 0;
        }
    }
    return result;
}

function getBinary(strng){
    return Number(parseInt(strng)).toString(2);
}

let binary = code('86');
console.log(decode('0011110011110111011100011000'));
// console.log(code('77338'))
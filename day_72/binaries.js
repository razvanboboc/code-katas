function code(strng) {
  strng = strng.split("");
  result = strng.map((x) => {
    x = getBinary(x).split("");
    initialSize = x.length;
    x.unshift("1");
    for (let i = 0; i < initialSize - 1; i++) {
      x.unshift("0");
    }
    return x.join("");
  });
  return result.join("");
}

function decode(strng){
    let codes = Array.of(
        ['1', '11'],
        ['2', '0110'],
        ['3', '0111'],
        ['4', '001100'],
        ['5', '001101'],
        ['6', '001110'],
        ['7', '001111'],
        ['8', '00011000'],
        ['9', '00011001'],);
    let result = [];
    while(strng.length != 0){
        for(let i = codes.length - 1; i >= 0 ; i--){
            if(strng.indexOf(codes[i][1]) === 0){
                result.push(codes[i][0]);
                strng = strng.slice(codes[i][1].length);
            }
        }
    }
    return result.join('');
}

function getBinary(strng) {
  return Number(parseInt(strng)).toString(2);
}

// console.log(decode("0011110011110111011100011000"), '77338');
// console.log(decode("0011110011110111011100011000"));
// console.log(code('987654321'))
console.log(
  decode("00011001000110000011110011100011010011000111011011"),
  "987654321"
);

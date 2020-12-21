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

//split string into digits
//init a result array
//go through digits array 
    //determine by number of 0 digits followed by a 1 what number it could be
        //if there are no zeroes it must be a one
            //add it to the result array
    //after determining number of zeroes followed by 1, read next number of zeroes + 1 digits
        //determine number
        //add it to results array
//return result array. 

function decode(strng) {
  let codes = Array.of(
    ["1", "11"],
    ["2", "0110"],
    ["3", "0111"],
    ["4", "001100"],
    ["5", "001101"],
    ["6", "001110"],
    ["7", "001111"],
    ["8", "00011000"],
    ["9", "00011001"]
  );
  let result = [];
  for (let i = codes.length - 1; i >= 0; i--) {
    while (strng.includes(codes[i][1])) {
      result.push([strng.indexOf(codes[i][1]), codes[i][0]]);
      if(strng.indexOf(codes[i][1]) === 0){
          strng = strng.slice(codes[i][1].length);
      } else {
          left = strng.slice(0, strng.indexOf(codes[i][1]));
          right = strng.slice(strng.indexOf(codes[i][1]) + codes[i][1].length);
          strng = left + right;
      }
    }
  }
//   let position = strng.indexOf(codes[8][1]);
//   strng = strng.slice(0, position) + strng.slice()
  return result;
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

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

function decode(strng) {
  strng = strng.split('');
  let result = [];
  let counter = 0;
  for(let i = 0; i < strng.length; i++){
    if(strng[i] === '0'){
      counter++;
    }
    if(strng[i] === '1' && counter === 0){
      if(strng[i + 1] === '1'){
        result.push(1);
      }
      if(strng[i + 1] === '0'){
        result.push(0);
      }
      i += 1;
    } 
    if(strng[i] === '1' && counter != 0){
      counter++;
      let digit = [];
      for(let j = i + 1; j <= i + counter; j++){
        digit.push(strng[j]);
        
      }
      digit = parseInt(digit.join(''), 2);
      result.push(digit);
      i += counter;
      counter = 0;
    }
  }
  return result.join('');
}

function getBinary(strng) {
  return Number(parseInt(strng)).toString(2);
}
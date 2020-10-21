function loneliest(str) {
  str = str.trim().split('');
  let chars = {};
  let  loneliest = -1;
  let loneliestChars = [];

  for (let i = 0; i < str.length; i++) {
    let leftIndex = i - 1;
    let rightIndex = i + 1;
    let blanksCounter = 0;

    if (str[i] !== " " && !chars[str[i]]) {
      chars[str[i]] = 0;
    }
    
    while (str[leftIndex] === " " && str[i] !== ' ') {
        blanksCounter++;
        leftIndex--;
    }
    
    while (str[rightIndex] === " " && str[i] !== ' ') {
        blanksCounter++;
        rightIndex++;
    }

    if(blanksCounter > chars[str[i]]){
      chars[str[i]] = blanksCounter;
    }

    loneliest = Math.max(loneliest, blanksCounter);
  }

  for(let key in chars){
    if(chars[key] === loneliest){
      loneliestChars.push(key);
    }
  }
  
  return loneliestChars;
}

console.log(loneliest("     a  b  c de        "));
// console.log(loneliest("     a     a"));
console.log(loneliest("abc"));

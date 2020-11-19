function solve(s) {
  s = s.split("");
  let counter = 0;
  let changed = 0;
  if (s.length % 2 !== 0) {
    return -1;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      counter++;
    }
    if (s[i] === ")" && counter !== 0) {
      counter--;
    } else if (s[i] === ")" && counter === 0) {
      s[i] = '(';
      changed++;
      counter++;
    }
  }
  let halfCounter = counter / 2;
  let index = s.length - 1;
  while (halfCounter !== 0) {
      s[index] = ")";
      changed++;
      halfCounter--;
      index--;
  }
  return changed;
}

console.log(solve("())()))))()()("));
// console.log("( ) ( ( ) ) ( ) ( ( ) ( ) )")
// ( ) ) ( ) ) ) ) ) ( ) ( ) ( ( (
// ( )
console.log(solve(")()("));
console.log(solve("((()"));
console.log(solve("())((("));
// ( ) ) ( ( (

// (((()()(

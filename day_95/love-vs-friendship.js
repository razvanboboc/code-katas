function wordsToMarks(string) {
  string = string.split("");
  let sum = 0;
  string.forEach((x) => {
    sum += x.charCodeAt(0) - 96;
  });
  return sum;
}

console.log(wordsToMarks("attitude"));

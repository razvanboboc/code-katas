function duplicateEncode(word) {
  word = word.toLowerCase().split("");
  let appearances = {};
  word.forEach((x) => {
    if (!appearances.hasOwnProperty(`${x}`)) {
      appearances[`${x}`] = 1;
    } else {
      appearances[`${x}`]++;
    }
  });
  return word
    .map((x) => {
      if (appearances[`${x}`] === 1) {
        return "(";
      } else {
        return ")";
      }
    })
    .join("");
}

console.log(duplicateEncode("recede"));

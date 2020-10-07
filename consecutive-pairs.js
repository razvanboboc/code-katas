function pairs(ar) {
  let numberOfPairs = 0;
  let arrLength = ar.length % 2 ? ar.length - 1 : ar.length;

  //   console.log(ar.length, arrLength);
  for (let i = 0; i < arrLength; i = i + 2) {
    //   console.log(ar[i+1], ar[i]);
    if (ar[i] + 1 === ar[i + 1] || ar[i + 1] + 1 === ar[i]) {
      // console.log(`if ${ar[i]} === ${ar[i + 1]}`);
      numberOfPairs++;
    }
  }

  return numberOfPairs;
}

console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));

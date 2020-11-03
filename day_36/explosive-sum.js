function printAllUniqueParts(n) {
  let p = [n];
  let k = 0;
  let noOfPartitions = 0;
  while (true) {
    printArray(p);
    noOfPartitions++;
    let rem_val = 0;
    while (k >= 0 && p[k] == 1) {
      rem_val += p[k];
      k--;
    }

    if (k < 0) break;

    p[k]--;
    rem_val++;

    while (rem_val > p[k]) {
      p[k + 1] = p[k];
      rem_val = rem_val - p[k];
      k++;
    }

    p[k + 1] = rem_val;
    k++;
  }
  return noOfPartitions;
}

console.log(printAllUniqueParts(5));

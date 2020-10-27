function consecutive(arr, a, b) {
  if (
    arr.indexOf(a) === arr.indexOf(b) + 1 ||
    arr.indexOf(b) === arr.indexOf(a) + 1
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4));

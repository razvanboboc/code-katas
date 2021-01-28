function solution(mtrx) {
  for (let i = 0; i < mtrx.length; i++) {
    if (
      mtrx[i].includes(">") &&
      mtrx[i].includes("x") &&
      mtrx[i].indexOf(">") < mtrx[i].indexOf("x")
    ) {
      return true;
    }
  }
  return false;
}

console.log(
  solution([
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", ">", " ", "x"],
    [" ", " ", "", " ", " "],
  ])
);

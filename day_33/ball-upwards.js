function maxBall(v0) {
  v0 *= 1000 / 3600;
  const g = 9.81;
  let heights = [];
  let first = v0 * (1 / 10) - 0.5 * g * (1 / 10) * (1 / 10);
  heights.push(first);
  for (let i = 2; ; i++) {
    let h = v0 * (i / 10) - 0.5 * g * (i / 10) * (i / 10);
    heights.push(h);
    if(heights[i - 2] > heights[i - 1]){
        return i - 1;
    }
  }
}

console.log(maxBall(15));
// console.log(maxBall(37), '10');

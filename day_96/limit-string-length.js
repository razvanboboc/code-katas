function solution(string, limit) {
  return limit >= string.length ? string : string.substring(0, limit) + "...";
}

console.log(solution("Test", 4));

function apparently(string) {
  let result = string.split(" ");
  console.log(result);
  return result
    .map((x, i) => {
      if (
        (result[i] === "but" || result[i] === "and") &&
        result[i + 1] != "apparently"
      ) {
        return x + " apparently";
      }
      return x;
    })
    .join(" ");
}

console.log(apparently("and EmGv and but apparently LpABZ lCq but"));

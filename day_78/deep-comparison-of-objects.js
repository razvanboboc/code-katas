function deepCompare(o1, o2) {
  if (typeof o1 != typeof o2) {
    return false;
  }
  if (o1 === undefined || o2 === undefined || o1 === null || o2 === null) {
    return o1 === o2;
  }
  if (Array.isArray(o1) && Array.isArray(o2)) {
    if (o1.length != o2.length) {
      return false;
    }
    for (let i = 0; i < o1.length; i++) {
      if (typeof o1[i] === "object" && typeof o1[i] != null) {
        let areEqual = deepCompare(o1[i], o2[i]);
        if (areEqual) {
          continue;
        }
      } else if (o1[i] != o2[i]) {
        return false;
      }
    }
    return true;
  }
  o1 = JSON.stringify(o1);
  o1 = o1
    .substring(1, o1.length - 1)
    .split('"')
    .join("")
    .split(",");
  o2 = JSON.stringify(o2);
  o2 = o2
    .substring(1, o2.length - 1)
    .split('"')
    .join("")
    .split(",");
  if (o1.length != o2.length) {
    return false;
  }
  for (let i = 0; i < o1.length; i++) {
    let hasCounterpart = false;
    for (let j = 0; j < o2.length; j++) {
      if (o1[i] === o2[j]) {
        hasCounterpart = true;
      }
    }
    if (!hasCounterpart) {
      return false;
    }
  }
  return true;
}

console.log(
  deepCompare(
    [1, 2, null, undefined, { name: "Joe" }],
    [1, 2, null, undefined, { name: "Joe" }]
  )
);

var countDeafRats = function (town) {
  //identify the position of P
  let piedPiperIndex = town.indexOf("P");
  let deafRats = 0;
  //traverse the array once
  for (let i = 0; i < town.length; i++) {
    //verify if current element is blank, and skip
    if (i === " ") {
      continue;
    }

    //if the current index is smaller than the index of P
    if (i < piedPiperIndex) {
      //verify if rat is running left
      //2 cases : either first rat is running left or running right
      //no of deafRats increases
      if (town[i] === "O" && town[i + 1] === "~") {
        deafRats++;
        i++;
      } else if (town[i] === "~" && town[i + 1] === "O") {
        i++;
      }
    }

    //if the current index is bigger than the index of P
    if (i > piedPiperIndex) {
      //verify if rat is running left
      //2 cases : either first rat is running left or running right
      //no of deafRats increases
      if (town[i] === "~" && town[i + 1] === "O") {
        deafRats++;
        i++;
      } else if (town[i] === "O" && town[i + 1] === "~") {
        i++;
      }
    }
  }
  return deafRats;
};

console.log(countDeafRats("O~~OO~~OO~~OO~P~OO~~OO~~OO~~O"), 8);
console.log(countDeafRats("O~~OO~~OO~~OO~ P~OO~~OO~~OO~~O"), 8);
console.log(countDeafRats("~O~O~O~O~O~O~OO~~O~OO~~OO~P"), 3);

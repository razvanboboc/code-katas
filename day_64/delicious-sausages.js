function unpackSausages(truck) {
  let counter = [];
  let packageNo = 0;
  truck.forEach((e) => {
    e.forEach((p) => {
    //   console.log(p)
      let sausagePack = checkSausagePack(p);
    //   console.log(`sausage pack = ${sausagePack}`)
      if (sausagePack) {
        packageNo++;
        counter.push(
          sausagePack
            .substring(1, sausagePack.length - 1)
            .split("")
            .join(' ')
        );
        if(packageNo === 5){
            packageNo = 0;
            counter.pop();
        }
      }
    });
  });
  return counter.join(' ');
}

function checkSausagePack(pack) {
  let sausages = ["@", "I", ")", "║", "l", "1", "(", "|", "¦"];
  pack = pack.split("");
  if (pack[0] != "[" || pack[pack.length - 1] != "]") {
    return null;
  }
  let correctlyPackaged = false;
  let counter = 0;
  sausages.forEach((e) => {
    pack.reduce((acc, current) => {
      if (current === e) {
        counter++;
      }
    });
    if (counter === 4) {
      correctlyPackaged = true;
    } else {
      counter = 0;
    }
  });
  return correctlyPackaged ? pack.join("") : null;
}

// console.log(checkSausagePack("[@@@@]"));
console.log(unpackSausages([ [ '[IIII]', '[llll]', '[1111]', '[@@@@]', '[||||]', '[║║║║]' ] ]));

bonus = function(arr, s) {
    arr = simplestFormArray(arr);
    let commonDenominator = 1;
    arr.forEach(e => commonDenominator *= e);
    let numerator = commonDenominator * s;
    let arrOfKs = arr.map(e => commonDenominator / e);
    let calcSumOfKs = (totalSum, currentElement) => totalSum + currentElement;
    let sumOfKs = arrOfKs.reduce(calcSumOfKs);
    let k = numerator / sumOfKs;
    arr = arr.map(e => Math.floor(k / e));
    return arr;
}

function simplestFormArray(arr){
  arr = arr.sort( (a,b) => {
    if(a < b) return 1;
    if(a > b) return -1;
    return 0;
  });
  for(let i = arr[0]; i > 1 ; i--){
    let areDivisible = true;
    arr.forEach(e => {
      if(e % i !== 0){
        areDivisible = false;
      }
    });
    if(areDivisible){
      arr = arr.map(e => e / i);
    }
  }
  return arr;
}

// console.log(bonus([
//     19, 29, 15, 7, 10,
//     28, 10, 11, 9, 26
//   ], 383631715));

console.log(simplestFormArray([18, 15, 12]));

/*
//debugging code

bonus = function(arr, s) {
    console.log(arr);
    console.log(s);
    let commonDenominators = 1;
    for(let i = 0; i < arr.length; i++){
      if(commonDenominator * arr[i] < Number.MAX_VALUE){
        commonDenominator *= arr[i];
      } else {
        
      }
    }
    arr.forEach(e => commonDenominator *= e);
    console.log(`Common Denom is : ${commonDenominator}`)
    let numerator = commonDenominator * s;
    let arrOfKs = arr.map(e => commonDenominator / e);
    console.log(`Arr of Ks is : ${arrOfKs}`)
    let calcSumOfKs = (accumulator, currentElement) => accumulator + currentElement;
    let sumOfKs = arrOfKs.reduce(calcSumOfKs);
    let k = numerator / sumOfKs;
    console.log(`SumOfKs is ${sumOfKs}`)
    console.log(`Numerator is ${numerator}`)
    console.log(`K is ${k}`)
    arr = arr.map(e => Math.floor(k / e));
    return arr;
}

*/
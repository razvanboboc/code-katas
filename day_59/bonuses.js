bonus = function(arr, s) {
    arr = simplestFormArray(arr);
    console.log(arr)
    let commonDenominator = 1;
    arr.forEach(e => commonDenominator *= e);
    let numerator = commonDenominator * s;
    console.log(`numerator = ${numerator}`)
    let arrOfKs = arr.map(e => commonDenominator / e);
    console.log(`arrOfKs = ${arrOfKs}`)
    let calcSumOfKs = (totalSum, currentElement) => totalSum + currentElement;
    let sumOfKs = arrOfKs.reduce(calcSumOfKs);
    console.log(`sumOfKs = ${sumOfKs}`)
    let k = calculateK(numerator, sumOfKs);
    // let k = numerator / sumOfKs;
    console.log(`k = ${k}`)
    arr = arr.map(e => Math.floor(k / e));
    return arr;
}
function calculateK(numerator, sumOfKs){
  for(let i = Math.max(numerator, sumOfKs); i > 1; i--){
    if(numerator % i === 0 && sumOfKs % i === 0){
      numerator /= i;
      sumOfKs /= i;
    }
  }
  return numerator / sumOfKs;
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

// console.log(bonus([18, 15, 12], 851));
console.log(bonus([ 6, 15, 23 ], 22156))
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
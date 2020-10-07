// function reverseNumber(n) {

//   if((n <= 9 && n >= 0) || (n <= 0 && n >= -9)){
//       return n;
//   }
//   let reversedNumber = 0;

//   while (n !== 0) {
//     console.log(`n = ${n} ; reversedNumber = ${reversedNumber}`);
//     reversedNumber = reversedNumber * 10 + (n % 10);
   
//     if(n < 0){
//       if(n <= 0 && n >= -9)
//         n = Math.floor(n / 10);
//       else
//         n = Math.floor(n / 10) + 1;
//     } else {
//         n = Math.floor(n / 10);
//     }
//     console.log(`n = ${n} ; reversedNumber = ${reversedNumber}`);
//   }
//   return reversedNumber;
// }

// console.log(reverseNumber(123));
// console.log(reverseNumber(-20));
console.log(reverseNumber(-123));
// console.log(reverseNumber(-9));
// console.log(-100 % 10, Math.floor(-321 / 10));

  function reverseNumber(n){
    return parseFloat(n.toString().split('').reverse('').join('')) * Math.sign(n);
  }

function expandedForm(num) {
//fac un array pe care apoi sa il convertesc la string cu join cu semnul +
//impart nr repetat la 10:
//1521 & 10 = 1; 1521 / 10 = 152; 152 & 10 = 2; 152 / 10 = 15; 15 & 10 = 5; 15 / 10 = 1; 1 % 10 = 1;
//1452 / 1000 = 1 * counter
//1521 = 1 + 20 + 500 + 1000

let expandedNumber = [];
let counter = 1;

while(num !== 0){
    if(num % 10 !== 0){
        expandedNumber.unshift(num % 10 * counter);
    }
    counter = counter * 10;
    num = Math.floor(num / 10);
}
return expandedNumber.join(' + ');
} 

// //recursive solution - by me also
// function expandedForm(num){
//     if(Math.floor(num / 10) === 0){
//         return num.toString();
//     } else {
//         let counter = 1;
//         let temp = num;
//         while(Math.floor(temp / 10) !== 0){
//             temp /= 10;
//             counter *= 10;
//         }
//         if(num % 10 !== 0){
//             return (Math.floor(num / counter) * counter).toString() + ' + ' + expandedForm(Math.floor(num % counter));
//         }
//     }
// }


console.log(expandedForm(1245));
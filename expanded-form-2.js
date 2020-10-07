
function expandedForm(num) {
    //fac un array pe care apoi sa il convertesc la string cu join cu semnul +
    //impart nr repetat la 10:
    //1521 & 10 = 1; 1521 / 10 = 152; 152 & 10 = 2; 152 / 10 = 15; 15 & 10 = 5; 15 / 10 = 1; 1 % 10 = 1;
    //1452 / 1000 = 1 * counter
    //1521 = 1 + 20 + 500 + 1000

    //12.45 = 10 + 2 + 4/10 + 5/100
    
    let expandedNumber = [];
    let counter = 1;
    let integerPart = Number.parseInt(num);
    
    //find out how many digits are in the fractional part of the number
    let floatingNumbers = num.toString();
    let floatingSeparator = floatingNumbers.indexOf('.') + 1;
    floatingNumbers = floatingNumbers.substring(floatingSeparator);
    
    console.log(`${num} - ${integerPart} is : `, num - integerPart);

    //calculate expanded form of fractional part of the number
    for(let i = 0; i < floatingNumbers.length; i++){
        counter *= 10;
        if(floatingNumbers[i] !== '0'){
            expandedNumber.push(floatingNumbers[i] + '/' + counter);  
        }
    }

    counter = 1;
    //calculate expanded form of the whole part of the number
    while(integerPart !== 0){
        if(integerPart % 10 !== 0){
            expandedNumber.unshift(integerPart % 10 * counter);
        }
        counter = counter * 10;
        integerPart = Math.floor(integerPart / 10);
    }


    // return expandedNumber.join(' + ');
}

// console.log(expandedForm(0.04));
// console.log(expandedForm(1.24));
console.log(expandedForm(4.28));
console.log(expandedForm(7.304));


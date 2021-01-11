function buddy(start,limit) {
    //build an array with all the numbers from start to limit
    //and add the sum of the divisors next to the numbers.
    //go and try through trial and error what numbers are buddies
    
    //condition to satisfy 
    //sum divisors of n = m + 1 sa mearga pana la sum - 1
    //sum divisors of m = n + 1 sa mearga pana la sum - 1
    // let numbers = [];
    // for(let i = start; i <= limit; i++){
    //     numbers.push([i, sumProperDivisors(i)])
    // }
    // return numbers;
    for(let i = start; i <= limit ; i++)
    { 
        let currentDivisorSum = sumProperDivisors(i);
        let buddy = currentDivisorSum - 1;
        if(sumProperDivisors(buddy) - 1 === i){
            return [i, buddy];
        }
    }
    return "Nothing";
}

function sumProperDivisors(n){
    if(n === 0){
        return 0;
    }
    // console.log(n)
    let divisors = [];
    // console.log(divisors)
    for(let i = 1; i <= n / 2; i++){
        if(n % i === 0){
            divisors.push(i);
        }
    }
    let sum = divisors.reduce((acc,cur) => acc + cur);
    return sum;
}

// console.log(sumProperDivisors(23))
// console.log(sumProperDivisors(75))
// console.log(buddy(48,75))
// console.log(buddy(48,75))
// console.log(buddy(23, 4669))

console.log(buddy(4952, 6539), [5775, 6128] );
console.log(buddy(381, 4318), [1050, 1925] );
console.log(buddy(2382, 3679), "Nothing" );
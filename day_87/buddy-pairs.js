function buddy(start,limit) {
    //condition to satisfy 
    //sum divisors of n = m + 1 sa mearga pana la sum - 1
    //sum divisors of m = n + 1 sa mearga pana la sum - 1
    //sumDiv(n) = m - 1
    //sumDiv(m) = n - 1

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
    let divisors = [1];
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            divisors.push(i);
            divisors.push(n/i);
        }
    }
    return divisors.reduce((acc,cur) => acc + cur);
}

// console.log(sumProperDivisors(48))
// console.log(sumProperDivisors(75))
// console.log(buddy(48,75))
// console.log(buddy(48,75))
// console.log(buddy(23, 4669))

console.log(buddy(4952, 6539), [5775, 6128] );
console.log(buddy(381, 4318), [1050, 1925] );
console.log(buddy(2382, 3679), "Nothing" );
function buddy(start,limit) {
    //build an array with all the numbers from start to limit
    //and add the sum of the divisors next to the numbers.
    //go and try through trial and error what numbers are buddies
    
    //condition to satisfy 
    //sum divisors of n = m + 1
    //sum divisors of m = n + 1

    //init numbers array
    let numbers = [];
    //populate array with numbers and sum of proper divisors.
    for(let i = start; i <= limit; i++){
        numbers.push([i, sumProperDivisors(i)]);
    }
    console.log(numbers);
    //go through populated array.
        //find buddy in start limit interval
        //if not found and sum of its divisors is larger than limit + 1 
            //try to look in outer 
        //if not found and sumDiv(n) < limit + 1
            //next element
    
    return [,];
    return "Nothing";
}

function sumProperDivisors(n){
    let divisors = [];
    for(let i = 1; i <= n / 2; i++){
        if(n % i === 0){
            divisors.push(i);
        }
    }
    let sum = divisors.reduce((acc,cur) => acc + cur);
    return sum;
}

// console.log(sumProperDivisors(48))
// console.log(sumProperDivisors(75))
console.log(buddy(48,75))
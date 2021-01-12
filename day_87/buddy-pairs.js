function buddy(start,limit) {
    for(let i = start; i <= limit ; i++)
    { 
        let currentDivisorSum = sumProperDivisors(i);
        let buddy = currentDivisorSum - 1;
        if(sumProperDivisors(buddy) - 1 === i && buddy > i){
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

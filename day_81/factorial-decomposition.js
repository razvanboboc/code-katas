function decomp(n) {
    let result = {};
    for(let i = 2; i <= n; i++){
        decomposePrimes(i, result);
    }
    let primeFactors = [];
    for(let property in result){
        if(result[property] != 1){
            primeFactors.push(`${property}^${result[property]}`)
        } else {
            primeFactors.push(`${property}`)
        }
    }
    return primeFactors.join(' * ');
}

function isPrime(n) {
    if(n === 2 || n === 3){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

function decomposePrimes(n, result){
    let counter2 = 0;
    while(n % 2 === 0 && !isPrime(n)){
        n /= 2;
        counter2++;
    }
    let counter3 = 0;
    while(n % 3 === 0 && !isPrime(n)){
        n /= 3;
        counter3++;
    }
    if(!result['2'] && counter2 != 0){
        result['2'] = counter2;
    } else if (result['2'] && counter2 != 0){
        result['2'] += counter2;
    }
    if(!result['3'] && counter3 != 0){
        result['3'] = counter3;
    } else if (result['3'] && counter3 != 0){
        result['3'] += counter3;
    } 
    for(let i = 5; i <= n; i++){
        while(n % i === 0 && isPrime(i)){
            n /= i;
            if(!result[i]){
                result[i] = 1;
            } else {
                result[i]++;
            }
        }
    }
    return result;   
}


console.log(decomp(25));
// console.log(decomp(22));

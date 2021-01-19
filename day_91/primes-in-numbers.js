function primeFactors(n){
    if(isPrime(n)){
        return `(${n})`;
    }
    let primeFactors = [];
    for(let i = 2; i <= n; i++){
        let power = 0;
        if(!isPrime(i)){
            continue;
        }
        while(n % i === 0){
            n /= i;
            power++;
        }
        if(power > 1) {
            primeFactors.push(`${i}**${power}`);
        } else if(power === 1)  {
            primeFactors.push(`${i}`);
        }
    }
    return '(' + primeFactors.join(')(') + ')';
}

function isPrime(n){
    if(n === 1 || n === 0) {
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}
function countKprimes(k, start, nd) {
    let kPrimes = [];
    for(let i = start; i <= nd; i++){
        kPrimes.push(isKPrime(i, k))
    }
    return kPrimes.filter(x => x);
}

function isKPrime(n, k) {
    let temp = n;
    primeFactors = [];
    if(isPrime(n) && k === 1){
        return n;
    }
    for(let j = 2; j <= Math.sqrt(n); j++){
        while(n % j === 0 && isPrime(j)  && n != 0){
            if(primeFactors.length + 1 > k) {
                return null;
            }
            primeFactors.push(j);
            if(isPrime(n / j)){
                if(primeFactors.length + 1 > k) {
                    return null;
                }
                primeFactors.push(n / j);
                n /= (n / j);
            }
            n /= j;
        }
    }
    return primeFactors.length === k ? temp : null;
}

function isPrime(n){
    if(n === 1 || n === 0){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

function puzzle(s) {
    let solutionCounter = 0;
    let sevenPrimesArr = countKprimes(7, 0, s); 
    if(sevenPrimesArr.length === 0) return 0;
    for(let i = 0; i < sevenPrimesArr.length; i++){
        let remainder = s - sevenPrimesArr[i];
        let threePrimesArr = countKprimes(3, 0, remainder);
        if(threePrimesArr.length === 0) continue;
        let onePrimesArr = countKprimes(1, 0, remainder);
        if(onePrimesArr.length === 0) continue;
        for(let j = 0; j < threePrimesArr.length || remainder - threePrimesArr[j] < 0; j++){
            for(let k = 0; k < onePrimesArr.length || remainder - onePrimesArr[k] < 0; k++){
                if(remainder - threePrimesArr[j] - onePrimesArr[k] === 0){
                    solutionCounter++;
                }
            }
        }
    }
    return solutionCounter;
}

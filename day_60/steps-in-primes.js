function step(g, m, n) {
    for(let i = m; i <= n; i++){
        let isPrime = verifyIfPrime(i);
        if(isPrime){
            let nextPrime = searchForNextPrime(i, n);
            if(nextPrime - i === g){
                return [i, nextPrime];
            }
            else{
                continue;
            }
        }
    }
    return [];
}

function verifyIfPrime(e){
    let isPrime = true;
    for(let i = e - 1; i > 1; i--){
        if(e % i === 0){
            isPrime = false;
        }
    }
    return isPrime;
}

function searchForNextPrime(e, n){
    for(let i = e + 1; i <= n; i++){
        let isPrime = verifyIfPrime(i);
        if(isPrime){
            return i;
        }
    }
}

console.log(step(2,100,110), [101, 103])
console.log(step(4,100,110), [103, 107])
console.log(step(6,100,110), [101, 107])
console.log(step(8,300,400), [359, 367])
console.log(step(10,300,400), [307, 317])
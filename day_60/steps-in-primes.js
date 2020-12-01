function step(g, m, n) {
    for(let i = m; i <= n; i++){
        let isPrime = verifyIfPrime(i);
        if(isPrime){
            let nextPrime = searchForNextPrime(i, n, g);
            if(nextPrime){
                return [i, nextPrime];
            }
        }
    }
    return null;
}

function verifyIfPrime(e){
    if(e <= 1){
        return false;
    } else if (e === 2){
        return true;
    } else if (e % 2 === 0){
        return false;
    }
    for(let i = 3; i <= Math.sqrt(e); i += 2){
        if(e % i === 0){
            return false;
        }
    }
    return true;
}

function searchForNextPrime(e, n, g){
    for(let i = e + g; i <= n; i += g){
        let isPrime = verifyIfPrime(i);
        if(isPrime){
            if(i - e === g){
                return i;
            } else if(i - e > g) {
                return;
            }
        }
    }
}

// console.log(Math.sqrt(17))
// console.log(verifyIfPrime(17));
console.log(step(2,100,110), [101, 103])
console.log(step(4,100,110), [103, 107])
console.log(step(6,100,110), [101, 107])
console.log(step(8,300,400), [359, 367])
console.log(step(10,300,400), [307, 317])
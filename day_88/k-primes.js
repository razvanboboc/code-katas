function countKprimes(k, start, nd) {
    //init k primes array
    let kPrimes = [];
    //go from start to end
    for(let i = start; i <= nd; i++){
        // console.log(i)
        kPrimes.push(decomposePrimeFactors(i, k))
        // console.log(decomposePrimeFactors(i, k))
    }
    return kPrimes.filter(x => x);
}

function decomposePrimeFactors(n, k) {
    let temp = n;
    primeFactors = [];
    for(let j = 2; j <= Math.sqrt(n); j++){
        //if(n % i) === 0 and i is prime and 
        //primeFactors.length < k
        while(n % j === 0 && isPrime(j)  && n != 0){
            if(primeFactors.length + 1 > k) {
                return null;
            }
            primeFactors.push(j);
            //add it to the primeFactors array
            // if (n / i is prime )
            // console.log(${n} before n/j)
            // console.log(${isPrime(n/ j)} ${n} / ${j}) 
            if(isPrime(n / j)){
                // console.log('sike')
                //add it to the primeFactors array
                if(primeFactors.length + 1 > k) {
                    return null;
                }
                primeFactors.push(n / j);
                n /= (n / j);
                // console.log(n)
            }
            n /= j;
            // console.log(n)
        }
    }
    // return primeFactors;
    return primeFactors.length === k ? temp : null;
}

function isPrime(n){
    if(n === 1 && n === 0){
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
    // your code
}
// console.log(decomposePrimeFactors(12, 3))
// console.log(decomposePrimeFactors(18, 3))
// console.log(decomposePrimeFactors(32, 2))
// console.log(decomposePrimeFactors(16, 2))
// console.log(decomposePrimeFactors(4, 2))
// console.log(decomposePrimeFactors(1026, 5))
// console.log(countKprimes(2, 0, 100));
// console.log(countKprimes(2, 0, 100), [4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39, 46, 49, 51,
    // 55, 57, 58, 62, 65, 69, 74, 77, 82, 85, 86, 87, 91, 93, 94, 95]);
// console.log(countKprimes(3, 0, 100), [8, 12, 18, 20, 27, 28, 30, 42, 44, 45, 50, 52, 63, 66, 68, 70, 75, 76,
    // 78, 92, 98, 99]);
// console.log(countKprimes(5, 1000, 1100), [1020, 1026, 1032, 1044, 1050, 1053, 1064, 1072, 1092, 1100]);
// console.log(countKprimes(5, 500, 600), [500, 520, 552, 567, 588, 592, 594]);function countKPrimes(k, start, nd) {
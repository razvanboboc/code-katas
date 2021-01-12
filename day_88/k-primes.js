function countKPrimes(k, start, nd) {
    //init k primes array
    let kPrimes = [];
    //go from start to end
    for(let i = start; i <= nd; i++){
        //init primeDivisors array
        let primeDivisors = [];
        //go from 1 to sqrt(n)
        for(let j = 1; j <= Math.sqrt(i); j++){
            //if(n % i) === 0 and i is prime and 
            //primeDivisors.length < k
            if(n % i === 0 && isPrime(i) && primeDivisors.length < k){
                //add it to the primeDivisors array
                primeDivisors.push(i);
                // if (n / i is prime )
                if(isPrime(n / i)){
                    //add it to the primeDivisors array
                    primeDivisors.push(n / i);
                }
            } else {
                //break
                break;
            }
        }
            //if the number of prime factors for that number is k
            if(primeDivisors.length === k){
                //add it to the array of k Primes
                kPrimes.push()
            }
    }
}

function isPrime(n){
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

console.log(countKprimes(2, 0, 100), [4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39, 46, 49, 51,
    55, 57, 58, 62, 65, 69, 74, 77, 82, 85, 86, 87, 91, 93, 94, 95]);
// console.log(countKprimes(3, 0, 100), [8, 12, 18, 20, 27, 28, 30, 42, 44, 45, 50, 52, 63, 66, 68, 70, 75, 76,
    // 78, 92, 98, 99]);
// console.log(countKprimes(5, 1000, 1100), [1020, 1026, 1032, 1044, 1050, 1053, 1064, 1072, 1092, 1100]);
// console.log(countKprimes(5, 500, 600), [500, 520, 552, 567, 588, 592, 594]);